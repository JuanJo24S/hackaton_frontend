export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: string;
  stock: number;
  categoria: string;
  imagenes: string[];
  qr: string;
  certificado_blockchain: string;
  video_proceso: string;
  id_usuario: number;
  created_at: string;
  historia?: Historia;
}

export interface Historia {
  id_historia: number;
  id_producto: number;
  descripcion: string;
  tags: string[];
  created_at: string;
}

export interface ProductosResponse {
  success: boolean;
  data: {
    productos: Producto[];
  };
}

export interface ProductoDetalleResponse {
  success: boolean;
  data: {
    producto: Producto;
  };
}

export interface ProductosPaginadosResponse {
  success: boolean;
  data: Producto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ProductoSearchParams {
  page?: number;
  limit?: number;
  categoria?: string;
  busqueda?: string;
  id_usuario?: number;
}
