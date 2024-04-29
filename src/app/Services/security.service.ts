import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidarResponse } from '../models/validar-response';
import { Validar } from '../models/validar';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';


const ApiUrl="https://localhost:7173/Api/Autenticacion/Validar";
const httpOptions ={
headers:new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: ValidarResponse = new ValidarResponse();

  constructor(private http: HttpClient) { }

  resetSecutityObject() {
    this.securityObject.token = '';
  }

  login(entity: Validar) {

    this.resetSecutityObject();

    return this.http.post(`${ApiUrl}login`, entity, httpOptions)
 }

  logout() {
    this.resetSecutityObject();
    localStorage.removeItem('token');
  }

  handleError(err: any) {
    return throwError(err.error);
  }

}