import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Producto } from 'src/app/models/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ProductoCrearComponent } from '../producto-crear/producto-crear.component';
import { EntidadCrearDialogComponent } from '../entidad-crear-dialog/entidad-crear-dialog.component';
import { EntidadEliminarDialogComponent } from '../entidad-eliminar-dialog/entidad-eliminar-dialog.component';
import { ProductoEliminarComponent } from '../producto-eliminar/producto-eliminar.component';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.scss']
})
export class ProductosListadoComponent implements OnInit {
  listaProductos: FirestoreResponse<Producto>[];
  displayedColumns: string[] = ['nombreProducto', 'acciones'];

  constructor(
    private productoServicio: ProductoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoServicio.getProductos().subscribe(resp => {
      this.listaProductos = [];

      resp.forEach((producto: any) => {
        this.listaProductos.push({
          id: producto.payload.doc.id,
          data: producto.payload.doc.data() as Producto
        });
      });
    });
  }

  dialogoCrearProducto() {
    let dialogRef = this.dialog.open(ProductoCrearComponent, {
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if (resp) {
          this.snackBar.open("Producto creado correctamente");
        } else {
          this.snackBar.open("Error al crear el producto");
        }
      } else {
        this.snackBar.open("Error al crear el producto");
      }
    });
  }

  dialogoEditarProducto(firestoreResponse: FirestoreResponse<Producto>) {
    let dialogRef = this.dialog.open(ProductoCrearComponent, {
      width: '25%',
      data: {id: firestoreResponse.id, producto: firestoreResponse.data}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if (resp) {
          this.snackBar.open("Producto editado correctamente");
        } else {
          this.snackBar.open("Error al editar el producto");
        }
      } else {
        this.snackBar.open("Error al editar el producto");
      }
    });
  }

  dialogoEliminarProducto(id: string) {
    let dialogRef = this.dialog.open(ProductoEliminarComponent, {
      width: '25%',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp != null) {
        if (resp) {
          this.snackBar.open("Producto eliminado correctamente")
        } else {
          this.snackBar.open("Error al eliminar el producto");
        }
      } else {
        this.snackBar.open("Error al eliminar el producto");
      }      
    });
  }

}
