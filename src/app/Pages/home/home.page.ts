import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductoService } from 'src/app/Services/producto.service';
import { Producto } from 'src/app/Models/Producto.interface';
import { ToastService } from 'src/app/Services/toast.service';
import { Router } from '@angular/router';
import { NavPage } from 'src/app/nav/nav.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavPage]
})
export class HomePage implements OnInit {

  productos: Producto[] = [];
  cargando = false;

  // Filtros
  busqueda = '';
  categoriaSeleccionada = '';

  // Paginación
  paginaActual = 1;
  limite = 12;
  totalPaginas = 1;
  total = 0;

  private productoService = inject(ProductoService);
  private toast = inject(ToastService);
  private router = inject(Router);

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.cargando = true;

    this.productoService.buscarProductos({
      page: this.paginaActual,
      limit: this.limite,
      categoria: this.categoriaSeleccionada || undefined,
      busqueda: this.busqueda || undefined
    }).subscribe({
      next: (response) => {
        this.productos = response.data;
        this.paginaActual = response.pagination.page;
        this.totalPaginas = response.pagination.totalPages;
        this.total = response.pagination.total;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar productos', error);
        this.toast.error('Error al cargar productos');
        this.cargando = false;
      }
    });
  }

  buscarProductos() {
    this.paginaActual = 1;
    this.cargarProductos();
  }

  limpiarFiltros() {
    this.busqueda = '';
    this.categoriaSeleccionada = '';
    this.paginaActual = 1;
    this.cargarProductos();
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.cargarProductos();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  verDetalle(id: number) {
    this.router.navigate(['/product-detail'], { queryParams: { id } });
  }

  get paginasArray(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

}
