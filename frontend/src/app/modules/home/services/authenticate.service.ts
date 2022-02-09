import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }


  auth(user:any, pass:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    var formData = new FormData();
    formData.append("username", user)
    formData.append("password",pass)

    return this.httpClient.post<any>(environment.backend,formData,{ headers: headers })
  }
}
