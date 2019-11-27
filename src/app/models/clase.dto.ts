export class ClaseDto {
    constructor (
        public nombre: string,
        public kilosAportados: number
    ) {  }

    tranformarDto() {
        return {
            nombre: this.nombre,
            kilosAportados: this.kilosAportados
        }
    }
}