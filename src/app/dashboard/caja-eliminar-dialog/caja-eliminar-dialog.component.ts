import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CajaService } from 'src/app/services/caja.service';

export interface DatosEliminar {
  id: string;
}
@Component({
  selector: 'app-caja-eliminar-dialog',
  templateUrl: './caja-eliminar-dialog.component.html',
  styleUrls: ['./caja-eliminar-dialog.component.scss']
})
export class CajaEliminarDialogComponent implements OnInit {

  id: string;

  constructor(
    public dialogRef: MatDialogRef<CajaEliminarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEliminar,
    private cajaServicio: CajaService
  ) { }

  ngOnInit() {
    this.id = this.data.id;
  }

  confirmarBorrado() {
    this.cajaServicio.deleteCaja(this.id).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

}
