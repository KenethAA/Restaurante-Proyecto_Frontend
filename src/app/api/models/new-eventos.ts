/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Eventos, 'id'>, schemaOptions: { title: 'NewEventos', exclude: [ 'id' ] })
 */
export interface NewEventos {
  cantidad: number;
  fecha: string;
  menu: string;
  nombre: string;
  numero: number;

  [key: string]: any;
}
