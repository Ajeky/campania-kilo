import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.interface';
import { ProductoService } from '../services/producto.service';
import { monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Label, SingleDataSet } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { CajaService } from '../services/caja.service';
import { EntidadService } from '../services/entidad.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  total: number;
  
  //OPCIONES GENÉRICAS PARA LAS GRÁFICAS
  public opcionesGraficaResponsiva: ChartOptions = {
    responsive: true,
  };
  public opcionesGraficaNoResponsiva: ChartOptions = {
    responsive: false,
  };
  public tipoGraficaTarta: ChartType = 'pie';
  public tipoGraficaBarra: ChartType = 'bar';
  public leyendaGraficaTrue = true;
  public leyendaGraficaFalse = false;
  public pluginsGraficaVoid = [];
  
  //OPCIONES GRÁFICA DE KILOS POR PRODUCTO TIPO TARTA  
  public etiquetasGraficaTartaKilosPorProducto: Label[];
  public valoresGraficaTartaKilosPorProducto: SingleDataSet[];
  graficaTartaKilosPorProductoReady = false;

  //OPCIONES GRÁFICA DE KILOS POR ENTIDAD TIPO BARRA
  public etiquetasGraficaBarraKilosPorEntidad: Label[];
  public valoresGraficaBarraKilosPorEntidad: SingleDataSet[];
  graficaBarraKilosPorEntidadReady = false;

  constructor (
    private productoServicio: ProductoService,
    private cajaServicio: CajaService,
    private entidadServicio: EntidadService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.cargarDatosGraficaTartaKilosPorProductos();
    // this.cargarDatosGraficaBarrasKilosPorEntidad()
  }

  cargarDatosGraficaTartaKilosPorProductos() {
    console.log('Cargando productos')
    this.productoServicio.getProductosRaw().subscribe(resp => {
      this.etiquetasGraficaTartaKilosPorProducto = [];
      this.valoresGraficaTartaKilosPorProducto = [];

      resp.forEach((producto: any) => {
        this.etiquetasGraficaTartaKilosPorProducto.push(producto.nombreProducto);
        this.valoresGraficaTartaKilosPorProducto.push(producto.kilos);
      })
      this.graficaTartaKilosPorProductoReady = true;
      console.log(this.etiquetasGraficaTartaKilosPorProducto);
      console.log(this.valoresGraficaTartaKilosPorProducto);
    });
  }

  // cargarDatosGraficaBarrasKilosPorEntidad() {
  //   this.entidadServicio.getEntidadesRaw().subscribe(resp => {
  //     this.etiquetasGraficaBarraKilosPorEntidad = [];
  //     this.valoresGraficaBarraKilosPorEntidad = [];

  //     resp.forEach((entidad: any) => {
  //       this.total = 0;
  //       this.etiquetasGraficaBarraKilosPorEntidad.push(entidad.nombre);
  //       this.cajaServicio.getCajasByEntidad(entidad).forEach((caja: any) => {
  //         this.total += caja.kilos;
  //       });
  //       this.valoresGraficaBarraKilosPorEntidad.push(this.total);
  //     });
  //   });
  //}


  
}
