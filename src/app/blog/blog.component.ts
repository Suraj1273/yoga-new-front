import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  loading:boolean = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  imageUrl:any
  blogList:any;
  p: number = 1;
  total: any;
  filter: any ={};
  constructor(private webapiService: WebapiService){

  }

  ngOnInit():void{
    this.filter ={
      pageNo:1,
      size:10
    }
    this.imageUrl = this.webapiService.imageUrl;
   this.getAllBlogs();
  }

  getAllBlogs(){
    this.webapiService.getBlogs(this.filter).subscribe((res:any)=>{

      this.blogList = res.data;
      this.total = res.total;
    });
   }

   onTableDataChange(event: any) {
     this.filter.pageNo = event;
     this.getAllBlogs();
     this.p = event;
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
