import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HistoriasListadoComponent } from './historias-listado/historias-listado.component';
import { EntidadListadoComponent } from './entidad-listado/entidad-listado.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { CajasListadoComponent } from './cajas-listado/cajas-listado.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stories', component: HistoriasListadoComponent},
  { path: 'entidades', component: EntidadListadoComponent},
  { path: 'productos', component: ProductosListadoComponent},
  { path: 'cajas', component: CajasListadoComponent}
];
