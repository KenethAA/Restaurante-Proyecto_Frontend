/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Factura>, schemaOptions: { partial: true })
 */
export interface FacturaPartial {
  cantidad?: number;
  descripcion?: string;
  fecha?: string;
  id?: string;
  nombre?: string;
  precio?: number;
  rtn?: number;
  total?: number;

  [key: string]: any;
}
