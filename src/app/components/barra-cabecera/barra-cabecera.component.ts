import { Component, EventEmitter, Output, Type } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BarraNavegacionModel } from '../../models/barra-navegacion-model';


@Component({
  selector: 'app-barra-cabecera',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './barra-cabecera.component.html',
  styleUrl: './barra-cabecera.component.scss'
})
export class BarraCabeceraComponent {
  @Output() cambio_de_componente = new EventEmitter<string>();
  lista_funciones : BarraNavegacionModel[]= [
    {
      id: 0,
      nombre: 'Perfil',
      mensaje_tooltip : 'Perfil',
      icono: 'account_circle',
      componente : "perfil"
    },
    {
      id: 1,
      nombre: 'Pedidos',
      mensaje_tooltip : 'Pedidos de la empresa',
      icono: 'shopping_cart',
      componente : "pedidos"
    },
    {
      id: 2,
      nombre: 'Inventario',
      mensaje_tooltip : "Administración de inventario",
      icono: 'inventory',
      componente : "inventarios"
    },
    {
      id: 3,
      nombre: 'Cientes',
      mensaje_tooltip : "Administración de clientes",
      icono: 'people',
      componente : "clientes"
    },
    {
      id: 4,
      nombre: 'Empleados',
      mensaje_tooltip : "Administración de empleados",
      icono: 'badge',
      componente : "empleados"
    },
    {
      id: 5,
      nombre: 'Proveedores',
      mensaje_tooltip : "Administración de proveedores",
      icono: 'local_shipping',
      componente : "proveedores"
    },
    {
      id: 6,
      nombre: 'Ventas',
      mensaje_tooltip : "Historial de Ventas",
      icono: 'attach_money',
      componente : "ventas"
    },
    {
      id: 7,
      nombre: 'Reportes',
      mensaje_tooltip : "Visor de Reportes",
      icono: 'analytics ',
      componente : "reportes"
    },
    {
      id: 8,
      nombre: 'Mesas',
      mensaje_tooltip : "Visor de Mesas",
      icono: 'table_bar  ',
      componente : "mesas"
    },
  ];
  seleccion_de_componente(componente: string){
    this.cambio_de_componente.emit(componente);
  }
}
