import { Component, OnInit, Inject } from '@angular/core';
import { EntidadDto } from 'src/app/models/entidad.dto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EntidadService } from 'src/app/services/entidad.service';
import { Entidad } from 'src/app/models/entidad.interface';

export interface DatosEditar {
  id: string;
  entidad: Entidad;
}
@Component({
  selector: 'app-entidad-crear-dialog',
  templateUrl: './entidad-crear-dialog.component.html',
  styleUrls: ['./entidad-crear-dialog.component.scss']
})
export class EntidadCrearDialogComponent implements OnInit {
  entidadDto: EntidadDto;
  id: string;
  entidad: Entidad;

  constructor(
    public dialogRef: MatDialogRef<EntidadCrearDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEditar,
    private entidadServicio: EntidadService
    ) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data != undefined) {
      this.entidadDto = new EntidadDto(this.data.entidad.nombre, this.data.entidad.personaContacto, this.data.entidad.nTelefono, this.data.entidad.direccionPostal, this.data.entidad.kilosDestinados);
      this.id = this.data.id;
    } else {
      this.entidadDto = new EntidadDto('', '', '', '', 0);
      this.id = null;
    }
  }

  guardarEntidad() {
    this.entidadServicio.crearEntidad(this.entidadDto).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  editarEntidad() {
    this.entidadServicio.updateEntidad(this.id, this.entidadDto.transformarDto()).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

}
