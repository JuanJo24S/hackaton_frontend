import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrearProducto, Data, PaginatedProducts, ProductCreated, Producto } from '../Models/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {

  private baseUrl = `${environment.apiUrl}`;

  private http = inject(HttpClient);

  getAllProducts(): Observable<Data> {
    return this.http.get<Data>(`${this.baseUrl}/productos`);
  }

 searchProductos(
    page: number = 1,
    limit: number = 10,
    categoria?: string,
    busqueda?: string,
    id_usuario?: number
  ): Observable<PaginatedProducts> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (categoria) params = params.set('categoria', categoria);
    if (busqueda) params = params.set('busqueda', busqueda);
    if (id_usuario) params = params.set('id_usuario', id_usuario.toString());
    return this.http.get<PaginatedProducts>(`${this.baseUrl}/productos/search`, { params });
  }

  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/productos/${id}`);
  }

  getProducstByCategory(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos/categoria/${categoria}`);
  }

  //Solo artesanos
  getMisProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos/mis-productos`);
  }

  createProduct(data: CrearProducto): Observable<ProductCreated> {
    return this.http.post<ProductCreated>(`${this.baseUrl}/productos`, data);
  }

}
