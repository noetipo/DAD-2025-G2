import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class Services {
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>("categorias"); // Se agregará la baseUrl por el interceptor
  }

}
