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
  MatDialogModule,
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
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HistoriasListadoComponent } from './historias-listado/historias-listado.component';
import { HistoriasService } from '../services/historias.service';
import { HistoriaEditarDialogComponent } from './historia-editar-dialog/historia-editar-dialog.component';
import { HistoriaEliminarDialogoComponent } from './historia-eliminar-dialogo/historia-eliminar-dialogo.component';
import { HistoriaCrearDialogComponent } from './historia-crear-dialog/historia-crear-dialog.component';
import { EntidadListadoComponent } from './entidad-listado/entidad-listado.component';
import { EntidadService } from '../services/entidad.service';
import { EntidadCrearDialogComponent } from './entidad-crear-dialog/entidad-crear-dialog.component';
import { EntidadEliminarDialogComponent } from './entidad-eliminar-dialog/entidad-eliminar-dialog.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { ProductoService } from '../services/producto.service';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoEliminarComponent } from './producto-eliminar/producto-eliminar.component';
import { CajasListadoComponent } from './cajas-listado/cajas-listado.component';
import { CajaCrearDialogComponent } from './caja-crear-dialog/caja-crear-dialog.component';
import { CajaEliminarDialogComponent } from './caja-eliminar-dialog/caja-eliminar-dialog.component';
import { CajaService } from '../services/caja.service';

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
  declarations: [
    DashboardComponent, 
    HistoriasListadoComponent, 
    HistoriaCrearDialogComponent, 
    HistoriaEditarDialogComponent, 
    HistoriaEliminarDialogoComponent, 
    EntidadListadoComponent, 
    EntidadCrearDialogComponent, 
    EntidadEliminarDialogComponent, 
    ProductosListadoComponent, 
    ProductoCrearComponent, 
    ProductoEliminarComponent, 
    CajasListadoComponent, 
    CajaCrearDialogComponent, 
    CajaEliminarDialogComponent
  ],
  providers: [
    HistoriasService,
    EntidadService,
    ProductoService,
    CajaService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  entryComponents: [ 
    HistoriaEditarDialogComponent, 
    HistoriaEliminarDialogoComponent,
    HistoriaCrearDialogComponent,
    EntidadCrearDialogComponent,
    EntidadEliminarDialogComponent,
    ProductoCrearComponent,
    ProductoEliminarComponent,
    CajaCrearDialogComponent, 
    CajaEliminarDialogComponent
  ]
})
export class DashboardModule {}
