import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-view-trainers',
  templateUrl: './view-trainers.component.html',
  styleUrls: ['./view-trainers.component.css']
})
export class ViewTrainersComponent {
  slug: any;
  mentorData:any

  constructor(private _activatedRoute:ActivatedRoute,private webapiService:WebapiService){
    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
  })
  this.getMentorBySlug(this.slug);
  }
  ngOnInit():void{

  }

  getMentorBySlug(slug:any){
    this.webapiService.getMentorBySlug(slug).subscribe((res:any)=>{
      console.log(res);
      this.mentorData =res.data;
    });
  }

}
