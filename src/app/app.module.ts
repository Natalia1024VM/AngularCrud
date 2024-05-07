import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
//tablas
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

//controles de formularios
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule} from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { RouterModule, Routes } from "@angular/router";

//mensajes de alerta
import {MatSnackBarModule} from '@angular/material/snack-bar';

//iconos 
import {MatIconModule} from '@angular/material/icon';

//modales
import{MatDialogModule} from '@angular/material/dialog';

//grillas
import {MatGridListModule} from '@angular/material/grid-list';

import {MatExpansionModule} from '@angular/material/expansion';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NotasComponent } from './components/notas/notas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes:Routes=[
  {
    path:'Estudiantes',component:EstudiantesComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    NotasComponent,
    CursosComponent,
    MenuComponent
  ],
  imports: [
    MatDividerModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCommonModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { 


}
