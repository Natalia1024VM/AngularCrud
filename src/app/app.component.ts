import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Subject } from './Interfaces/subject';
import { SubjectService } from './Services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  //title = 'ProyectoAngular';
  displayedColumns: string[] = ['Id', 'Nombre', 'Profesor', 'FechaCreacion', 'UsuarioCreacion', 'FechaModificacion', 'Estado'];
  dataSource = new MatTableDataSource<Subject>();

  constructor(private _SubjectServicio:SubjectService)
  {
  }
  ngOnInit(): void {
    this.mostarSubject();
  }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  mostarSubject()
  {
    console.log('prueba de servicio')

    this._SubjectServicio.getSubject().subscribe(
      (response: any) => {
        console.log( 'algo' );

          if (!response) {
            console.log( 'Error' );
          } else {
            console.log( 'dato' );

              this.dataSource = new MatTableDataSource(response.cedis);
              
          }
      },
      ( error: any ) => {

          let errorMessage = <any>error;
          let body = error.error.message;
          console.log( '------mensaje error:'+errorMessage.error );
      })

    console.log('fin prueba de servicio')

  }
}
