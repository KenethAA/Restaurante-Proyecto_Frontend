/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Proveedores, 'id'>, schemaOptions: { title: 'NewProveedores', exclude: [ 'id' ] })
 */
export interface NewProveedores {
  direccion: string;
  email: string;
  nombre: string;
  numero: number;

  [key: string]: any;
}
