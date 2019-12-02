import { Producto } from './producto.interface';
import { Entidad } from './entidad.interface';

export class CajaDto {
    constructor (
        public nCaja: string,
        public productoNombre: string,
        public productoId: string,
        public kilos: number,
        public entidadNombre: string,
        public entidadId: string
    ) {  }

    transformarDto() {
        return {
            nCaja: this.nCaja,
            productoNombre: this.productoNombre,
            productoId: this.productoId,
            kilos: this.kilos,
            entidadNombre: this.entidadNombre,
            entidadId: this.entidadId
        };
    }
}