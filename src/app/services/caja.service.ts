import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { CajaDto } from '../models/caja.dto';
import { Producto } from '../models/producto.interface';
import { Caja } from '../models/caja.interface';
import { Entidad } from '../models/entidad.interface';

const nombreColeccion = 'cajas';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(private db: AngularFirestore) { }

  public crearCaja(cajaDto: CajaDto): Promise<DocumentReference> {
    return this.db.collection<Caja>(nombreColeccion).add(cajaDto.transformarDto());
  }

  public getCajas() {
    return this.db.collection<Caja>(nombreColeccion).snapshotChanges();
  }

  public getCajasRaw() {
    return this.db.collection<Caja>(nombreColeccion).valueChanges();
  }

  public updateCaja(id: string, caja: Caja) {
    return this.db.collection<Caja>(nombreColeccion).doc(id).update(caja);
  }

  public deleteCaja(id: string) {
    return this.db.collection<Caja>(nombreColeccion).doc(id).delete();
  }

  public getCajasByEntidad(entidad: Entidad) {
    return this.db.collection<Caja>(nombreColeccion, ref =>
      ref.where('entidad', '==', entidad)).valueChanges();
  }

}
