export class ProductoDto {
    constructor(
        public nombreProducto: string
    ) {  }

    transformarDto() {
        return {
            nombreProducto: this.nombreProducto
        };
    }
}