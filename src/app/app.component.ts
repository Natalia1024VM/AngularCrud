import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';


import { Subject } from './Interfaces/subject';
import { SubjectService } from './Services/subject.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  panelOpenState = false;
  NombreFormControl = new FormControl('', [Validators.required]);
  ProfesorFormControl=  new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  VentanaMaterias()
  {

  }
  VentanaEstudiantes()
  {

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

              this.dataSource = new MatTableDataSource(response);
              
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
