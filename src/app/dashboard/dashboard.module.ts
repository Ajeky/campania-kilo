import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTableModule,
  MatFormFieldModule,
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MatSnackBar,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { HistoriasListadoComponent } from './historias-listado/historias-listado.component';
import { HistoriasService } from '../services/historias.service';
import { FormsModule } from '@angular/forms';
import { HistoriaEditarDialogComponent } from './historia-editar-dialog/historia-editar-dialog.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HistoriaEliminarDialogoComponent } from './historia-eliminar-dialogo/historia-eliminar-dialogo.component';
import { EntidadListadoComponent } from './entidad-listado/entidad-listado.component';
import { EntidadService } from '../services/entidad.service';
import { EntidadCrearDialogComponent } from './entidad-crear-dialog/entidad-crear-dialog.component';
import { HistoriaCrearDialogComponent } from './historia-crear-dialog/historia-crear-dialog.component';
import { EntidadEliminarDialogComponent } from './entidad-eliminar-dialog/entidad-eliminar-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatChipsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [DashboardComponent, HistoriasListadoComponent, HistoriaCrearDialogComponent, HistoriaEditarDialogComponent, HistoriaEliminarDialogoComponent, EntidadListadoComponent, EntidadCrearDialogComponent, EntidadEliminarDialogComponent],
  providers: [
    HistoriasService,
    EntidadService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  entryComponents: [ 
    HistoriaEditarDialogComponent, 
    HistoriaEliminarDialogoComponent,
    HistoriaCrearDialogComponent,
    EntidadCrearDialogComponent
  ]
})
export class DashboardModule {}
