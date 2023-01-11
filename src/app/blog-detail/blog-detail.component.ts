import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute } from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  public loading = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  imageUrl: any;
  blogId:any;
  blogArr:any

  constructor(private webapiService: WebapiService,private _activatedRoute: ActivatedRoute) {}

  ngOnInit():void{
    this.imageUrl = this.webapiService.imageUrl;
    this._activatedRoute.params.subscribe(params => {
      return  this.blogId  = params['id']
    });
   this.getBlogBySlug(this.blogId);
  }


  getBlogBySlug(slug:any){
    this.loading = true;
   this.webapiService.getBlogBySlug(slug).subscribe((res: any) => {
    if(res.data){
      this.blogArr = res.data;
      this.loading = false;
    }
   });
  }
}
