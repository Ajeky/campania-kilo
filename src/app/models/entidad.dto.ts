export class EntidadDto {
    constructor(
        public personaContacto: string,
        public nTelefono: string,
        public direccionPostal: string,
        public kilosDestinados: number
    ) { }

    transformarDto() {
        return {
            personaContacto: this.personaContacto,
            nTelefono: this.nTelefono,
            direccionPostal: this.direccionPostal,
            kilosDestinados: this.kilosDestinados
        };
    }
}