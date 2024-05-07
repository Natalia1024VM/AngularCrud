import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../Interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private endPoint:string =environment.endPoint;
  private apiUrl:string= this.endPoint+"Subject/";
  private token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJuYXR0aXN2bUBnbWFpbC5jb20iLCJuYmYiOjE3MTQ0MzAxMTcsImV4cCI6MTcxNDQzMDQxNywiaWF0IjoxNzE0NDMwMTE3fQ.Qg0D2k73ePIg5t_0r1KRUSabG762WeY3NGlg0q5Vbho";

  constructor(private http:HttpClient) {}

    getSubject():Observable<Subject[]>{
      console.log( 'metodo lista materias' );
      console.log(this.apiUrl);
      //return this.http.get<Subject[]>(this.apiUrl, { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token  })});
      var respuesta= this.http.get<Subject[]>(this.apiUrl);

      console.log(respuesta);
      return  respuesta ;
    }

    update( modelo:Subject):Observable<Subject>{
      return this.http.put<Subject>(this.apiUrl, modelo);
    }
   
    delete(idSubject:number):Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${idSubject}`);
    }
}
