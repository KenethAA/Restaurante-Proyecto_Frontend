/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: FacturaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FacturaWithRelations {
  cantidad: number;
  descripcion: string;
  fecha: string;
  id?: string;
  nombre: string;
  precio: number;
  rtn?: number;
  total: number;

  [key: string]: any;
}
