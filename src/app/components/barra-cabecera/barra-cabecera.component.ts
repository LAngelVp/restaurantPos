import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-cabecera',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './barra-cabecera.component.html',
  styleUrl: './barra-cabecera.component.scss'
})
export class BarraCabeceraComponent {
  titulo: string = "Sistema de Ventas";
  menuAbierto: boolean = false;
  lista_funciones = [
    {
      id: 1,
      nombre: 'Pedidos',
      icono: 'draw',
      compornente : 'home'
    },
    {
      id: 2,
      nombre: 'Inventario',
      icono: 'inventory',
      compornente : 'home'
    },
    {
      id: 3,
      nombre: 'Cientes',
      icono: 'how_to_reg',
      compornente : 'home'
    },
    {
      id: 4,
      nombre: 'Empleados',
      icono: 'group',
      compornente : 'home'
    },
  ];
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  navegarA() {
    this.menuAbierto = false; // Cerrar menú después de seleccionar
  }
}
