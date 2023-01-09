import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { WebapiService } from '../webapi.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
 config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  sliderList: any;
  imageUrl: any;
  blogList: any;
  mentorList: any;
  constructor(private webapiService: WebapiService){

  }
  ngOnInit(): void {
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllSlider();
    this.getHomeBlog(2);
    this.getHomeMentors(4);
  }

 getAllSlider(){
  this.webapiService.getSliders().subscribe((res:any)=>{
   this.sliderList = res.data;
   console.log(this.sliderList);

  });
 }

 getHomeBlog(limit:any){
  let val = {
    "limit":limit
  }
  this.webapiService.getHomeBlog(val).subscribe((res:any)=>{
  // console.log(res);
  this.blogList = res.data;
  });
 }
 getHomeMentors(limit:any){
  let val = {
    "limit":limit
  }
  this.webapiService.getHomeMentors(val).subscribe((res:any)=>{
  // console.log(res);
  this.mentorList = res.data;
  });
 }

}
