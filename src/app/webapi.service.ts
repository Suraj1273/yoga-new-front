import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  // private url = 'http://34.203.244.83:3000/';
  private url = 'http://localhost:3000/';
  public imageUrl = "http://localhost:3000/public/images/";
  // private url = 'https://indiayogashala.com:3000/';
  // public imageUrl = "https://indiayogashala.com:3000/public/images/";
  private youtubeApiKey = "AIzaSyBBWKHx71MmwvADlvncUc8ivZuJ0k5Wi44";
  private youtubeChannelId = "UCp8TSIgLoBWsPS1knyeFhaw";
  private videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&channelId=${this.youtubeChannelId}&key=${this.youtubeApiKey}&maxResults=4`;
  private channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${this.youtubeChannelId}&key=${this.youtubeApiKey}`;

  constructor(private http:HttpClient) { }

  getChannelDetails(){
    return this.http.get(this.channelUrl);
  }
  getVideoDetails(){
    return this.http.get(this.videoUrl);
  }

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
   getSubCategoryByCatId(data:any) {
    return this.http.post(this.url + "api/v1/getSubCategoryByCatId/",data);
  }
  getSubCourseCategoryBySubCatId(data:any) {
    return this.http.post(this.url + "api/v1/getSubCourseCategoryBySubCatId/",data);
  }
  getAllMentors(id=""){
    return this.http.get(this.url+"api/v1/getAllMentor"+id);
  }
  getMentorBySlug(id:any){
    return this.http.get(this.url+"api/v1/getMentorBySlug/"+id);
   }
}
