import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarraCabeceraComponent } from '../../components/barra-cabecera/barra-cabecera.component';
import { PedidosComponent } from '../pedidos/pedidos.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    BarraCabeceraComponent,
    PedidosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  logotipo = '/img/Dev_Rous.png';
  componente = true;
}
