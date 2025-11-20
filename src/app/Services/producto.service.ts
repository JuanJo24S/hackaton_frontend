import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  Producto,
  ProductosResponse,
  ProductoDetalleResponse,
  ProductosPaginadosResponse,
  ProductoSearchParams
} from '../Models/Producto.interface';

export interface CrearProductoResponse {
  success: boolean;
  message: string;
  data: {
    producto: Producto;
  };
}

export interface ActualizarProductoResponse {
  success: boolean;
  message: string;
}

export interface ImagenesResponse {
  success: boolean;
  message: string;
  data: {
    imagenes: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private baseUrl = `${environment.apiUrl}`;
  private http = inject(HttpClient);

  listarTodos(): Observable<ProductosResponse> {
    return this.http.get<ProductosResponse>(`${this.baseUrl}/productos`);
  }

  buscarProductos(params: ProductoSearchParams): Observable<ProductosPaginadosResponse> {
    let httpParams = new HttpParams();

    if (params.page) httpParams = httpParams.set('page', params.page.toString());
    if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    if (params.categoria) httpParams = httpParams.set('categoria', params.categoria);
    if (params.busqueda) httpParams = httpParams.set('busqueda', params.busqueda);
    if (params.id_usuario) httpParams = httpParams.set('id_usuario', params.id_usuario.toString());

    return this.http.get<ProductosPaginadosResponse>(`${this.baseUrl}/productos/search`, { params: httpParams });
  }

  obtenerPorId(id: number): Observable<ProductoDetalleResponse> {
    return this.http.get<ProductoDetalleResponse>(`${this.baseUrl}/productos/${id}`);
  }

  obtenerPorCategoria(categoria: string): Observable<ProductosResponse> {
    return this.http.get<ProductosResponse>(`${this.baseUrl}/productos/categoria/${categoria}`);
  }

  crearProducto(formData: FormData): Observable<CrearProductoResponse> {
    return this.http.post<CrearProductoResponse>(`${this.baseUrl}/productos`, formData);
  }

  actualizarProducto(id: number, data: any): Observable<ActualizarProductoResponse> {
    return this.http.put<ActualizarProductoResponse>(`${this.baseUrl}/productos/${id}`, data);
  }

  agregarImagenes(id: number, formData: FormData): Observable<ImagenesResponse> {
    return this.http.post<ImagenesResponse>(`${this.baseUrl}/productos/${id}/imagenes`, formData);
  }

  eliminarImagen(id: number, nombreImagen: string): Observable<ImagenesResponse> {
    return this.http.delete<ImagenesResponse>(`${this.baseUrl}/productos/${id}/imagenes`, {
      body: { nombreImagen }
    });
  }

  eliminarProducto(id: number): Observable<ActualizarProductoResponse> {
    return this.http.delete<ActualizarProductoResponse>(`${this.baseUrl}/productos/${id}`);
  }
}
