import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent {
  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  mentorList:any
  imageUrl:any
  constructor(private webapiService:WebapiService){}

  ngOnInit():void{
    this.imageUrl =this.webapiService.imageUrl;
   this.getAllMentors();
  }

  getAllMentors(){
    this.webapiService.getAllMentors().subscribe((res:any)=>{
      this.mentorList = res.user
    });
  }
}
