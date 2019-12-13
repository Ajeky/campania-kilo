import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from 'src/app/models/producto.interface';
import { ProductoDto } from 'src/app/models/producto.dto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoService } from 'src/app/services/producto.service';

export interface DatosEditar {
  id: string;
  producto: Producto;
}

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.scss']
})
export class ProductoCrearComponent implements OnInit {
  productoDto: ProductoDto;
  id: string;
  producto: Producto;

  constructor(
    public dialogRef: MatDialogRef<ProductoCrearComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEditar,
    private productoServicio: ProductoService
  ) { }

  ngOnInit() {
    if (this.data != undefined) {
      this.productoDto = new ProductoDto(this.data.producto.nombreProducto, this.data.producto.kilos);
      this.id = this.data.id;
    } else {
      this.productoDto = new ProductoDto('', 0);
      this.id = null;
    }
  }

  guardarProducto() {
    this.productoServicio.crearProducto(this.productoDto).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  editarProducto() {
    this.productoServicio.updateProducto(this.id, this.productoDto.transformarDto()).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

}
