/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Vehiculos>, schemaOptions: { partial: true })
 */
export interface VehiculosPartial {
  color?: string;
  id?: string;
  marca?: string;
  placa?: string;
  tipo?: 'pickup' | 'camion';

  [key: string]: any;
}
