import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  private url = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }

  getCategory(id =""){
    return this.http.get(this.url+"api/v1/getAllCategory"+id);
   }

   getCourseById(data:any){
    return this.http.post(this.url+"api/v1/getCourseBySlug",data);
   }
}
