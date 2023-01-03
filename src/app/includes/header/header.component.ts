import { Component } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categoryList:any;
  constructor(private webapiService: WebapiService){}
  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.webapiService.getCategory().subscribe((res:any)=>{
      // console.log(res);
      this.categoryList =res.data
    })
  }
}
