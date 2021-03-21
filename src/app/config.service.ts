import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    const url = "https://minha-api-covid.herokuapp.com/database"
    return this.http.get<any>(url)
  }

  getDados(): Observable<any> {
    const url = "https://minha-api-covid.herokuapp.com/database"
    return this.http.get<any>(url)
  }


}
