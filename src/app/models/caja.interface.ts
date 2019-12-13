import { Producto } from './producto.interface';
import { Entidad } from './entidad.interface';

export interface Caja {
    nCaja: string;
    tipoProducto: Producto;
    kilos: number;
    entidadDestino: Entidad;
}