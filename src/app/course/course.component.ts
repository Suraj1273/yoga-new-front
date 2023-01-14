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
  inquiryData:any={};
  courseName: any;
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
      console.log(res.data[0].content);
      this.courseList = res.data[0];
      this.courseName = res.data[0].coursetitle;
    })
}
saveInquiry(data:any){
  let arr = data.courseDate.split("~");
  data.courseName = this.courseName
  data.startDate = arr[0];
  this.webapiService.saveInquiry(data).subscribe((res:any)=>{
    console.log(res);
    if(res.status == "ok"){
      alert(res.msg);
    }
    else{
      alert('something went wrong');
    }
  })

}

}
