import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  requestHeader = new HttpHeaders({
      "No-Auth": "True"
  });

  public isLogin: boolean = false;
  public userDetails = {};
  

  constructor(private http: HttpClient) {

  }


  getRequest<T>(requestUrl:string): Observable<T>{
      return this.http.get<T>(`${requestUrl}`,{headers: this.requestHeader});
  }

  postRequest<T>(requestUrl:string, requestBody: any): Observable<T>{
      return this.http.post<T>(`${requestUrl}`,requestBody, {headers: this.requestHeader});
} 
}
