/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Menu, 'id'>, schemaOptions: { title: 'NewMenu', exclude: [ 'id' ] })
 */
export interface NewMenu {
  categoria: string;
  nombre: string;
  precio: number;

  [key: string]: any;
}
