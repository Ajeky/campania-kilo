import { Producto } from './producto.interface';
import { Entidad } from './entidad.interface';

export class CajaDto {
    constructor (
        public nCaja: string,
        public nProducto: Producto,
        public kilos: number,
        public entidadDestino: Entidad
    ) {  }

    transformarDto() {
        return {
            nCaja: this.nCaja,
            nProducto: this.nProducto,
            kilos: this.kilos,
            entidadDestino: this.entidadDestino
        }
    }
}