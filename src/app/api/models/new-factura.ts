/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Factura, 'id'>, schemaOptions: { title: 'NewFactura', exclude: [ 'id' ] })
 */
export interface NewFactura {
  cantidad: number;
  descripcion: string;
  fecha: string;
  nombre: string;
  precio: number;
  rtn?: number;
  total: number;

  [key: string]: any;
}
