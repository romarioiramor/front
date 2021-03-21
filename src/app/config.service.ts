import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    const url = "http://localhost:3000/database"
    return this.http.get<any>(url)
  }

  getDados(): Observable<any> {
    const url = "http://localhost:3000/database"
    return this.http.get<any>(url)
  }


}
