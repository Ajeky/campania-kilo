import { Producto } from './producto.interface';
import { Entidad } from './entidad.interface';

export interface Caja {
    nCaja: string;
    productoNombre: string;
    productoId: string;
    kilos: number;
    entidadNombre: string;
    entidadId: string;
}