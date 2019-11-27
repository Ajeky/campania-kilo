import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Caja } from 'src/app/models/caja.interface';
import { CajaService } from 'src/app/services/caja.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CajaCrearDialogComponent } from '../caja-crear-dialog/caja-crear-dialog.component';
import { CajaEliminarDialogComponent } from '../caja-eliminar-dialog/caja-eliminar-dialog.component';

@Component({
  selector: 'app-cajas-listado',
  templateUrl: './cajas-listado.component.html',
  styleUrls: ['./cajas-listado.component.scss']
})
export class CajasListadoComponent implements OnInit {

  listaCajas: FirestoreResponse<Caja>[];
  displayedColumns: string[] = ['nCaja', 'tipoProducto', 'kilos', 'entidadDestino', 'acciones'];

  constructor(
    private cajaServicio: CajaService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarCajas();
  }

  cargarCajas() {
    this.cajaServicio.getCajas().subscribe(resp => {
      this.listaCajas = [];

      resp.forEach((caja: any) => {
        this.listaCajas.push({
          id: caja.payload.doc.id,
          data: caja.payload.doc.data() as Caja
        });
      });
    });
  }

  dialogoCrearCaja() {
    let dialogRef = this.dialog.open(CajaCrearDialogComponent, {
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if (resp) {
          this.snackBar.open("Caja creada correctamente");
        } else {
          this.snackBar.open("Error al crear la caja");
        }
      } else {
        this.snackBar.open("Error al crear la caja");
      }
    });
  }

  dialogoEditarCaja(firestoreResponse: FirestoreResponse<Caja>) {
    let dialogRef = this.dialog.open(CajaCrearDialogComponent, {
      width: '25%',
      data: {id: firestoreResponse.id, caja: firestoreResponse.data}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp != null) {
        if (resp) {
          this.snackBar.open("Caja editada correctamente")
        } else {
          this.snackBar.open("Error al editar la caja");
        }
      } else {
        this.snackBar.open("Error al editar la caja");
      }      
    });
  }

  dialogoEliminarCaja(id: string) {
    let dialogRef = this.dialog.open(CajaEliminarDialogComponent, {
      width: '25%',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp != null) {
        if (resp) {
          this.snackBar.open("Caja eliminada correctamente")
        } else {
          this.snackBar.open("Error al eliminar la caja");
        }
      } else {
        this.snackBar.open("Error al eliminar la caja");
      }      
    });
  }

}
