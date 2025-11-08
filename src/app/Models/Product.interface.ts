export interface Data {
  productos: Producto[];
}

export interface Producto {
  id_producto:            number;
  nombre:                 string;
  descripcion:            string;
  precio:                 string;
  stock:                  number;
  categoria:              string;
  imagenes:               string[];
  qr:                     string;
  certificado_blockchain: string;
  video_proceso:          string;
  id_usuario:             number;
  created_at:             Date;
}

export type CrearProducto = Pick<Producto, "nombre" | "descripcion" | "precio" | "stock" | "categoria" | "video_proceso"> & {
  imagenes: File[];
};


export interface PaginatedProducts {
  success:    boolean;
  data:       Producto[];
  pagination: Pagination;
}

export interface Pagination {
  page:       number;
  limit:      number;
  total:      number;
  totalPages: number;
}

export interface ProductCreated {
  success: boolean;
  message: string;
  data:    Data;
}

export interface Data {
  producto: Producto;
}

export interface Producto {
  id_producto:            number;
  nombre:                 string;
  precio:                 string;
  stock:                  number;
  qr:                     string;
  certificado_blockchain: string;
  blockchain_info:        BlockchainInfo;
}

export interface BlockchainInfo {
  hash:      string;
  index:     number;
  timestamp: Date;
}



