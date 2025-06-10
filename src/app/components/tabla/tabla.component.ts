import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent implements AfterViewInit {
  @Input() title: string = 'Título de la tabla';
  @Input() subtitle: string = '';
  @Input() displayedColumns: string[] = [];
  @Input() columnDefs: { column: string, header: string }[] = [];
  @Input() dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

  editarElemento(element: any) {
    this.editar.emit(element);
  }

  eliminarElemento(element: any) {
    this.eliminar.emit(element);
  }
}