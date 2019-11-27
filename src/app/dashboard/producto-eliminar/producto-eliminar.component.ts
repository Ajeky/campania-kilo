import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoService } from 'src/app/services/producto.service';

export interface DatosEliminar {
  id: string;
}
@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.scss']
})
export class ProductoEliminarComponent implements OnInit {

  id: string;

  constructor(
    public dialogRef: MatDialogRef<ProductoEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEliminar,
    private productoServicio: ProductoService
  ) { }

  ngOnInit() {
    this.id = this.data.id;
  }

  confirmarBorrado() {
    this.productoServicio.deleteProducto(this.id).then( resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

}
