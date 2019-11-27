export class EntidadDto {
    constructor(
        public nombre: string,
        public personaContacto: string,
        public nTelefono: string,
        public direccionPostal: string,
        public kilosDestinados: number
    ) { }

    transformarDto() {
        return {
            nombre: this.nombre,
            personaContacto: this.personaContacto,
            nTelefono: this.nTelefono,
            direccionPostal: this.direccionPostal,
            kilosDestinados: this.kilosDestinados
        };
    }
}