import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Entidad } from 'src/app/models/entidad.interface';
import { EntidadService } from 'src/app/services/entidad.service';

@Component({
  selector: 'app-entidad-listado',
  templateUrl: './entidad-listado.component.html',
  styleUrls: ['./entidad-listado.component.scss']
})
export class EntidadListadoComponent implements OnInit {

  listaEntidades: FirestoreResponse<Entidad>[];
  displayedColumns: string[] = ['personaContacto', 'nTelefono', 'direccionPostal', 'kilosDestinados', 'acciones'];

  constructor(
    private entidadServicio: EntidadService
  ) { }

  ngOnInit() {
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

}
