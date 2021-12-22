/* tslint:disable */
/* eslint-disable */
export interface Vehiculos {
  color: string;
  id?: string;
  marca: string;
  placa: string;
  tipo: 'pickup' | 'camion';

  [key: string]: any;
}
