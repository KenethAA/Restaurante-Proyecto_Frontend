/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Transportistas, 'id'>, schemaOptions: { title: 'NewTransportistas', exclude: [ 'id' ] })
 */
export interface NewTransportistas {
  licencia: 'liviana' | 'pesada';
  nombre: string;

  [key: string]: any;
}
