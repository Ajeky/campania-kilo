export class ProductoDto {
    constructor(
        public nombreProducto: string,
        public kilos: number
    ) {  }

    transformarDto() {
        return {
            nombreProducto: this.nombreProducto,
            kilos: this.kilos
        };
    }
}