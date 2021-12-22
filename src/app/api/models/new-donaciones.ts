/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Donaciones, 'id'>, schemaOptions: { title: 'NewDonaciones', exclude: [ 'id' ] })
 */
export interface NewDonaciones {
  fecha: string;
  fudacion: string;
  monto: number;

  [key: string]: any;
}
