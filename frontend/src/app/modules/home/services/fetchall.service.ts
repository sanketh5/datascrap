import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchallService {

  
  constructor(private httpClient: HttpClient) { }


  
  fetch(user:any) {
    return this.httpClient.get<any>(environment.backend+'fetch?email='+user)
  }

  send(formData:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.httpClient.post<any>(environment.backend+'upload',formData,{ headers: headers })
  }
}
