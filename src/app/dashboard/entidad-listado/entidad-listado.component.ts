import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Entidad } from 'src/app/models/entidad.interface';
import { EntidadService } from 'src/app/services/entidad.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EntidadCrearDialogComponent } from '../entidad-crear-dialog/entidad-crear-dialog.component';
import { EntidadEliminarDialogComponent } from '../entidad-eliminar-dialog/entidad-eliminar-dialog.component';

@Component({
  selector: 'app-entidad-listado',
  templateUrl: './entidad-listado.component.html',
  styleUrls: ['./entidad-listado.component.scss']
})
export class EntidadListadoComponent implements OnInit {

  listaEntidades: FirestoreResponse<Entidad>[];
  displayedColumns: string[] = ['nombre', 'personaContacto', 'nTelefono', 'direccionPostal', 'kilosDestinados', 'acciones'];

  constructor(
    private entidadServicio: EntidadService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarEntidades();
  }

  cargarEntidades() {
    this.entidadServicio.getEntidades().subscribe(resp => {
      this.listaEntidades = [];

      resp.forEach((entidad: any) => {
        this.listaEntidades.push({
          id: entidad.payload.doc.id,
          data: entidad.payload.doc.data() as Entidad
        });
      });
    });    
  }

  dialogoCrearEntidad() {
    let dialogRef = this.dialog.open(EntidadCrearDialogComponent, {
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if (resp) {
          this.snackBar.open("Entidad creada correctamente");
        } else {
          this.snackBar.open("Error al crear la entidad");
        }
      } else {
        this.snackBar.open("Error al crear la entidad");
      }
    });
    
  }

  dialogoEditarEntidad(firestoreResponse: FirestoreResponse<Entidad>) {
    let dialogRef = this.dialog.open(EntidadCrearDialogComponent, {
      width: '25%',
      data: {id: firestoreResponse.id, entidad: firestoreResponse.data}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp != null) {
        if (resp) {
          this.snackBar.open("Entidad editada correctamente")
        } else {
          this.snackBar.open("Error al editar la entidad");
        }
      } else {
        this.snackBar.open("Error al editar la entidad");
      }      
    });
  }

  dialogoEliminarEntidad(id: string) {
    let dialogRef = this.dialog.open(EntidadEliminarDialogComponent, {
      width: '25%',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp != null) {
        if (resp) {
          this.snackBar.open("Entidad eliminada correctamente")
        } else {
          this.snackBar.open("Error al eliminar la entidad");
        }
      } else {
        this.snackBar.open("Error al eliminar la entidad");
      }      
    });
  }

}
