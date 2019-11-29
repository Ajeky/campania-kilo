import { Producto } from './producto.interface';
import { Entidad } from './entidad.interface';

export class CajaDto {
    constructor (
        public nCaja: string,
        public tipoProducto: Producto,
        public kilos: number,
        // public entidadDestino: Entidad
        entidadId
        entidadNombre
    ) {  }

    transformarDto() {
        return {
            nCaja: this.nCaja,
            tipoProducto: this.tipoProducto,
            kilos: this.kilos,
            entidadDestino: this.entidadDestino
        };
    }
}