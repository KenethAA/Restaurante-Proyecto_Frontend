/* tslint:disable */
/* eslint-disable */
export interface Factura {
  cantidad: number;
  descripcion: string;
  fecha: string;
  id?: string;
  nombre: string;
  precio: number;
  rtn?: number;
  total: number;

  [key: string]: any;
}
