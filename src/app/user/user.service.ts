import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from './user.class';



@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl1:string = "http://localhost:8080/api/users/";
  constructor(
    private http: HttpClient
  ) { }
  list():Observable<user[]>{
    return this.http.get(`${this.baseurl1}`) as Observable<user[]>;
  }
  get(id: number): Observable<user> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<user>;
  }
  create(user:user): Observable<user>{
    return this.http.post(`${this.baseurl1}`,user) as Observable<user>;
    }
    change(user:user): Observable<any>{
      return this.http.put(`${this.baseurl1}${user.id}`,user) as Observable<user>;
    }
    remove(user:user): Observable<user>{
      return this.http.delete(`${this.baseurl1}${user.id}`) as Observable<user>;
    }
}
