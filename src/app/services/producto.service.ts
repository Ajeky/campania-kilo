import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ProductoDto } from '../models/producto.dto';
import { Producto } from '../models/producto.interface';

const nombreColeccion = 'productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private db: AngularFirestore) { }

  public crearProducto(entidadDto: ProductoDto): Promise<DocumentReference> {
    return this.db.collection<Producto>(nombreColeccion).add(entidadDto.transformarDto());
  }

  public getProductos() {
    return this.db.collection<Producto>(nombreColeccion).snapshotChanges();
  }

  public getProductosRaw() {
    return this.db.collection<Producto>(nombreColeccion).valueChanges();
  }

  getProductosByNombre(nombre: string) {
    return this.db.collection<Producto>(nombreColeccion, ref => 
      ref.where('nombreProducto', '==', nombre)).snapshotChanges();
  }

  public updateProducto(id: string, producto: Producto) {
    return this.db.collection<Producto>(nombreColeccion).doc(id).update(producto);
  }

  public deleteProducto(id: string) {
    return this.db.collection<Producto>(nombreColeccion).doc(id).delete();
  }
}
