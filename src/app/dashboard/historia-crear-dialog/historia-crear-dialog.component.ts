import { Component, OnInit } from '@angular/core';
import { HistoriaDto } from 'src/app/models/historia.dto';
import { MatDialogRef } from '@angular/material';
import { HistoriasService } from 'src/app/services/historias.service';

@Component({
  selector: 'app-historia-crear-dialog',
  templateUrl: './historia-crear-dialog.component.html',
  styleUrls: ['./historia-crear-dialog.component.scss']
})
export class HistoriaCrearDialogComponent implements OnInit {
  historiaDto: HistoriaDto;
  
  constructor(
    public dialogRef: MatDialogRef<HistoriaCrearDialogComponent>,
    private historiaServicio: HistoriasService
  ) { }

  ngOnInit() {
    this.historiaDto = new HistoriaDto('', '', 'NO_ASIGNADA');
  }

  guardarHistoria() {
    this.historiaServicio.crearHistoria(this.historiaDto).then(resp => {
      this.dialogRef.close(true);
    }).catch(resp => {
      this.dialogRef.close(false);
    });
  }

  cerrar() {
    this.dialogRef.close();
  }

}