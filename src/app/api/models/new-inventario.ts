/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Inventario, 'id'>, schemaOptions: { title: 'NewInventario', exclude: [ 'id' ] })
 */
export interface NewInventario {
  cantidad: number;
  costo: number;
  fecha: string;
  lote: string;
  nombre: string;

  [key: string]: any;
}
