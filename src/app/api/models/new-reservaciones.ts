/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Reservaciones, 'id'>, schemaOptions: { title: 'NewReservaciones', exclude: [ 'id' ] })
 */
export interface NewReservaciones {
  Nombre: string;
  cantidad: number;
  fecha: string;
  mesa: number;
  numero: number;

  [key: string]: any;
}
