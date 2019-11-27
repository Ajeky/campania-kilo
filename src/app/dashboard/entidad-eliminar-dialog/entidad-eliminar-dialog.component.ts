import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EntidadService } from 'src/app/services/entidad.service';

export interface DatosEliminar {
  id: string;
}

@Component({
  selector: 'app-entidad-eliminar-dialog',
  templateUrl: './entidad-eliminar-dialog.component.html',
  styleUrls: ['./entidad-eliminar-dialog.component.scss']
})
export class EntidadEliminarDialogComponent implements OnInit {

  id: string;

  constructor(
    public dialogRef: MatDialogRef<EntidadEliminarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEliminar,
    private entidadServicio: EntidadService
  ) { }

  ngOnInit() {
    this.id = this.data.id;
  }

  confirmarBorrado() {
    this.entidadServicio.deleteEntidad(this.id).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cerrar() {
    this.dialogRef.close();
  }

}
