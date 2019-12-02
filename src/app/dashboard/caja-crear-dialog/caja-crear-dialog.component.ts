import { Component, OnInit, Inject } from '@angular/core';
import { Caja } from 'src/app/models/caja.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CajaService } from 'src/app/services/caja.service';
import { CajaDto } from 'src/app/models/caja.dto';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Producto } from 'src/app/models/producto.interface';
import { Entidad } from 'src/app/models/entidad.interface';
import { EntidadListadoComponent } from '../entidad-listado/entidad-listado.component';
import { ProductosListadoComponent } from '../productos-listado/productos-listado.component';
import { ProductoService } from 'src/app/services/producto.service';
import { EntidadService } from 'src/app/services/entidad.service';
import { Observable } from 'rxjs';

export interface DatosEditar {
  id: string;
  caja: Caja;
}

@Component({
  selector: 'app-caja-crear-dialog',
  templateUrl: './caja-crear-dialog.component.html',
  styleUrls: ['./caja-crear-dialog.component.scss']
})
export class CajaCrearDialogComponent implements OnInit {
  cajaDto: CajaDto;
  id: string;
  caja: Caja;
  productos: FirestoreResponse<Producto>[];
  entidades: FirestoreResponse<Entidad>[];
  productoFirestoreResponse: FirestoreResponse<Producto>;
  entidadFirestoreResponse: FirestoreResponse<Entidad>;
  kilosCajaAntesDeEditar: number;

  constructor(
    public dialogRef: MatDialogRef<CajaCrearDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEditar,
    private cajaServicio: CajaService,
    private productoServicio: ProductoService,
    private entidadServicio: EntidadService
  ) { }

  ngOnInit() {
    if (this.data != undefined) {
      this.cajaDto = new CajaDto(this.data.caja.nCaja, this.data.caja.productoNombre, this.data.caja.productoId, this.data.caja.kilos, this.data.caja.entidadNombre, this.data.caja.entidadId)
      this.id = this.data.id;
    } else {
      this.cajaDto = new CajaDto('', '', '', 20, '', '');
      this.id = null;
    }
    this.entidadServicio.getEntidades().subscribe(resp => {
      this.entidades = [];

      resp.forEach((entidad: any) => {
        this.entidades.push({
          id: entidad.payload.doc.id,
          data: entidad.payload.doc.data() as Entidad
        });
      });
    });
    this.productoServicio.getProductos().subscribe(resp => {
      this.productos = [];

      resp.forEach((producto: any) => {
        this.productos.push({
          id: producto.payload.doc.id,
          data: producto.payload.doc.data() as Producto
        })
      })
    });
    console.log(this.entidades);
    console.log(this.productos);
  }

  guardarCaja() {
    this.productoServicio.getProductosByNombre(this.cajaDto.productoNombre).subscribe(resp => {
      this.productoFirestoreResponse = null;
      resp.forEach((producto: any) => {
        this.cajaDto.productoId = producto.payload.doc.id;
      });    
    });
    this.entidadServicio.getEntidadesByNombre(this.cajaDto.entidadNombre).subscribe(resp => {
      this.entidadFirestoreResponse = null;
      resp.forEach((entidad: any) => {
        this.cajaDto.entidadId = entidad.payload.doc.id;
      });
    });
    console.log("Caja a guardar: ")
    console.log(this.cajaDto)
    this.cajaServicio.crearCaja(this.cajaDto).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  editarCaja() {
    console.log("Caja antes de guardarla: ")
    console.log(this.cajaDto)
    this.productoServicio.getProductosByNombre(this.cajaDto.productoNombre).subscribe(resp => {
      this.productoFirestoreResponse = null;
      resp.forEach((producto: any) => {
        this.cajaDto.productoId = producto.payload.doc.id;
      });    
    });
    this.entidadServicio.getEntidadesByNombre(this.cajaDto.entidadNombre).subscribe(resp => {
      this.entidadFirestoreResponse = null;
      resp.forEach((entidad: any) => {
        this.cajaDto.entidadId = entidad.payload.doc.id;
      });
    });
    console.log("Caja a guardar: ")
    console.log(this.cajaDto)
    this.cajaServicio.updateCaja(this.id, this.cajaDto.transformarDto()).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

}
