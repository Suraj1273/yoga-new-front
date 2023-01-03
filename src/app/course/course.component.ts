import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  slug: any;
  courseList: any;
  constructor(private webapiService: WebapiService,private _activatedRoute: ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
  })
  this.getCourseBySlug(this.slug);
  }
  ngOnInit(): void {
  }

  getCourseBySlug(slug:any){
    let data={
      "slug":slug
    }
    this.webapiService.getCourseById(data).subscribe((res:any)=>{
      console.log(res);
      this.courseList = res.data;
    })
}

}
