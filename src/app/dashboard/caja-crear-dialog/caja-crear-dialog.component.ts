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
  productos: Producto[];
  entidades: Entidad[];
  productoFirestoreResponse: FirestoreResponse<Producto>;
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
      this.cajaDto = new CajaDto(this.data.caja.nCaja, this.data.caja.tipoProducto, this.data.caja.kilos, this.data.caja.entidadDestino)
      this.id = this.data.id;
    } else {
      this.cajaDto = new CajaDto('', null, 20, null);
      this.id = null;
    }
    this.entidadServicio.getEntidadesRaw().subscribe(resp => this.entidades = resp);
    this.productoServicio.getProductosRaw().subscribe(resp => this.productos = resp);
    console.log(this.entidades);
    console.log(this.productos);
  }

  guardarCaja() {
    this.productoServicio.getProductosByNombre(this.cajaDto.tipoProducto.nombreProducto).subscribe(resp => {
      this.productoFirestoreResponse = null;

      resp.forEach((productoFirestoreResponse: any) => {
        this.productoFirestoreResponse = ({
          id: productoFirestoreResponse.payload.doc.id,
          data: productoFirestoreResponse.payload.doc.data() as Producto
        });
      });
    });
    this.productoFirestoreResponse.data.kilos -= this.cajaDto.kilos;
    this.productoServicio.updateProducto(this.productoFirestoreResponse.id, this.productoFirestoreResponse.data);
    this.cajaServicio.crearCaja(this.cajaDto).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  editarCaja() {
    this.productoFirestoreResponse = null;
    this.cajaServicio.getCajaById(this.id).valueChanges().subscribe(resp => {
      this.caja = resp as Caja;
      this.kilosCajaAntesDeEditar = this.caja.kilos;
    });
    this.productoServicio.getProductosByNombre(this.cajaDto.tipoProducto.nombreProducto).subscribe(resp => {
      resp.forEach((productoFirestoreResponse: any) => {
        this.productoFirestoreResponse = ({
          id: productoFirestoreResponse.payload.doc.id,
          data: productoFirestoreResponse.payload.doc.data() as Producto
        });
      });
    });

    this.productoFirestoreResponse.data.kilos -= (this.cajaDto.kilos - this.kilosCajaAntesDeEditar);
    this.productoServicio.updateProducto(this.productoFirestoreResponse.id, this.productoFirestoreResponse.data);

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
