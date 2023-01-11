import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  // private url = 'http://34.203.244.83:3000/';
  // private url = 'http://localhost:3000/';
  // public imageUrl = "http://localhost:3000/public/images/";
  private url = 'https://indiayogashala.com:3000/';
  public imageUrl = "https://indiayogashala.com:3000/public/images/";




  constructor(private http:HttpClient) { }

  getCategory(id =""){
    return this.http.get(this.url+"api/v1/getAllCategory"+id);
   }

   getCourseById(data:any){
    return this.http.post(this.url+"api/v1/getCourseBySlug",data);
   }

   saveInquiry(data:any){
    return this.http.post(this.url+"api/v1/inquiryEmail",data);

   }

    getSliders(id =""){
    return this.http.get(this.url+"api/v1/getSlider"+id);
   }

   getHomeBlog(data:any){
    return this.http.post(this.url+"api/v1/getHomeBlog",data);
   }
   getHomeMentors(data:any){
    return this.http.post(this.url+"api/v1/getHomeMentors",data);
   }
   getBlogs(data:any){
    return this.http.post(this.url+"api/v1/getAllBlog",data);
   }
   getBlogBySlug(id:any){
    return this.http.get(this.url+"api/v1/getBlogBySlug/"+id);
   }
}
