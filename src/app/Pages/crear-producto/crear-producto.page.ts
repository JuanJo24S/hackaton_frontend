import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Services/producto.service';
import { ToastService } from 'src/app/Services/toast.service';
import { NavPage } from 'src/app/nav/nav.page';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavPage]
})
export class CrearProductoPage implements OnInit {

  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoria: '',
    video_proceso: ''
  };

  // Historia opcional
  agregarHistoria = false;
  historia = {
    descripcion: '',
    tags: ''
  };

  // Imágenes
  imagenesSeleccionadas: File[] = [];
  imagenesPrevisualizacion: string[] = [];

  cargando = false;

  private productoService = inject(ProductoService);
  private toast = inject(ToastService);
  public router = inject(Router);

  // Tags sugeridos
  tagsSugeridos = [
    'Hecho a mano',
    'Técnica ancestral',
    'Producto único',
    'Comercio justo',
    'Artesanía tradicional',
    'Materiales naturales',
    'Diseño original',
    'Edición limitada',
    'Sostenible',
    'Producción local'
  ];

  ngOnInit() {}

  onImagenesSeleccionadas(event: any) {
    const archivos = event.target.files;

    if (archivos.length + this.imagenesSeleccionadas.length > 10) {
      this.toast.warning('Máximo 10 imágenes permitidas');
      return;
    }

    for (let i = 0; i < archivos.length; i++) {
      const archivo = archivos[i];

      // Validar tipo de archivo
      if (!archivo.type.startsWith('image/')) {
        this.toast.warning(`${archivo.name} no es una imagen válida`);
        continue;
      }

      this.imagenesSeleccionadas.push(archivo);

      // Crear previsualización
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenesPrevisualizacion.push(e.target.result);
      };
      reader.readAsDataURL(archivo);
    }
  }

  eliminarImagen(index: number) {
    this.imagenesSeleccionadas.splice(index, 1);
    this.imagenesPrevisualizacion.splice(index, 1);
  }

  agregarTag(tag: string) {
    const tagsActuales = this.historia.tags ? this.historia.tags.split(',').map(t => t.trim()) : [];
    if (!tagsActuales.includes(tag)) {
      this.historia.tags = tagsActuales.length > 0
        ? `${this.historia.tags}, ${tag}`
        : tag;
    }
  }

  crearProducto() {
    // Validaciones
    if (!this.producto.nombre || !this.producto.descripcion || !this.producto.precio || !this.producto.categoria) {
      this.toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    if (this.producto.precio <= 0) {
      this.toast.error('El precio debe ser mayor a 0');
      return;
    }

    if (this.producto.stock < 0) {
      this.toast.error('El stock no puede ser negativo');
      return;
    }

    this.cargando = true;

    const formData = new FormData();
    formData.append('nombre', this.producto.nombre);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('precio', this.producto.precio.toString());
    formData.append('stock', this.producto.stock.toString());
    formData.append('categoria', this.producto.categoria);

    if (this.producto.video_proceso) {
      formData.append('video_proceso', this.producto.video_proceso);
    }

    // Agregar imágenes
    this.imagenesSeleccionadas.forEach((imagen) => {
      formData.append('imagenes', imagen);
    });

    // Agregar historia si está habilitada
    if (this.agregarHistoria && this.historia.descripcion) {
      const historiaObj: any = {
        descripcion: this.historia.descripcion
      };

      if (this.historia.tags) {
        historiaObj.tags = this.historia.tags.split(',').map(t => t.trim()).filter(t => t.length > 0);
      }

      formData.append('historia', JSON.stringify(historiaObj));
    }

    this.productoService.crearProducto(formData).subscribe({
      next: (response: any) => {
        console.log('Producto creado', response);
        this.toast.success('Producto creado exitosamente');
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Error al crear producto', error);
        this.toast.error(error.error?.message || 'Error al crear el producto');
        this.cargando = false;
      }
    });
  }

}
