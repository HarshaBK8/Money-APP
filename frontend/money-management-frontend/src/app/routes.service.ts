import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:8080/"

  getDetails(type:string):Observable<Details[]>{
    return this.http.get<Details[]>(this.url+`${type}`);
  }
  saveDetails(type:string,detail:Details):Observable<Details>{
    return this.http.post<Details>(this.url+`${type}/add`,detail);
  }
  getSingleDetail(type:string,id:number){
    return this.http.get<Details>(this.url+`${type}/edit/${id}`)
  }
  editDetails(type:string,id:number,detail:Details,):Observable<Details>{
    return this.http.put<Details>(this.url+`${type}/edit/${id}`,detail);
  }
  deleteDetails(type:string,id:number):Observable<Details>{
    return this.http.delete<Details>(this.url+`${type}/${id}`);
  }
}
