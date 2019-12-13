import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Entidad } from '../models/entidad.interface';
import { EntidadDto } from '../models/entidad.dto';

const nombreColeccion = 'entidades';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor(private db: AngularFirestore) { }

  public crearEntidad(entidadDto: EntidadDto): Promise<DocumentReference> {
    return this.db.collection<Entidad>(nombreColeccion).add(entidadDto.transformarDto());
  }

  public getEntidades() {
    return this.db.collection<Entidad>(nombreColeccion).snapshotChanges();
  }

  public getEntidadesRaw() {
    return this.db.collection<Entidad>(nombreColeccion).valueChanges();
  }

  public updateEntidad(id: string, entidad: Entidad) {
    return this.db.collection<Entidad>(nombreColeccion).doc(id).update(entidad);
  }

  public deleteEntidad(id: string) {
    return this.db.collection<Entidad>(nombreColeccion).doc(id).delete();
  }
}
