import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { Caja } from 'src/app/models/caja.interface';

@Component({
  selector: 'app-cajas-listado',
  templateUrl: './cajas-listado.component.html',
  styleUrls: ['./cajas-listado.component.scss']
})
export class CajasListadoComponent implements OnInit {
  listaCajas: FirestoreResponse<Caja>[];
  displayedColumns: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
