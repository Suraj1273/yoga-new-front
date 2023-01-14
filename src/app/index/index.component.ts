import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { WebapiService } from '../webapi.service';
import {Router,ActivatedRoute} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  public loading = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

 config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    }
  };
  sliderList: any;
  imageUrl: any;
  blogList: any;
  mentorList: any;
  channelInfo:any;
  videoInfo:any;
  constructor(private webapiService: WebapiService, private router: Router,private sanitizer: DomSanitizer){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit(): void {
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllSlider();
    this.getHomeBlog(2);
    this.getHomeMentors(4);
    // this.getChannelDetails();
    // this.getVideoDetails();
  }

  getChannelDetails(){
    this.webapiService.getChannelDetails().subscribe((res:any)=>{
      console.log(res,'channel');
      this.channelInfo = res.items[0];
    });
  }
  getVideoDetails(){
    this.webapiService.getVideoDetails().subscribe((res:any)=>{
      console.log(res,'video');
      this.videoInfo = res.items;
      for (const vid of this.videoInfo) {
         let url = `https://www.youtube.com/embed/${vid.id.videoId}?controls=0`;

         vid.addedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    });
  }

 getAllSlider(){
  this.webapiService.getSliders().subscribe((res:any)=>{
   this.sliderList = res.data;
  //  console.log(this.sliderList);

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
