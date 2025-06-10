import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-inventario',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    TablaComponent
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {
displayedColumns  = ['nombre', 'precio', 'cantidad', 'acciones'];
columnDefs  = [
  { column: 'nombre', header: 'Nombre' },
  { column: 'precio', header: 'Precio' },
  { column: 'cantidad', header: 'Cantidad' },
];

dataSource  = new MatTableDataSource([
  { nombre: "Nombre 1", precio: 10, cantidad: 5 },
  { nombre: "Nombre 2", precio: 20, cantidad: 10 },
  { nombre: "Nombre 3", precio: 30, cantidad: 15 },
]);
}
