/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleados, 'id'>, schemaOptions: { title: 'NewEmpleados', exclude: [ 'id' ] })
 */
export interface NewEmpleados {
  Nombre: string;
  direccion: string;
  edad: number;
  numero: number;
  puesto: string;

  [key: string]: any;
}
