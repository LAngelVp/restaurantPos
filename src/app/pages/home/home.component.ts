import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { BarraCabeceraComponent } from '../../components/barra-cabecera/barra-cabecera.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { InventarioComponent } from "../inventario/inventario.component";
import { ClientesComponent } from "../clientes/clientes.component";
import { EmpleadosComponent } from "../empleados/empleados.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    BarraCabeceraComponent,
    PedidosComponent,
    InventarioComponent,
    ClientesComponent,
    EmpleadosComponent,
    LogoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  componente_activo : string= "inventarios";

  cambiar_componente(componente: string){
    console.log(componente)
    this.componente_activo = componente;
  }
}
