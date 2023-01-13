import { Component } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  loading: boolean = false;
  categoryList: any;
  constructor(private webapiService: WebapiService) { }
  ngOnInit(): void {
    this.getAllCategory();
    // console.log(this.loading);

  }

  getAllCategory() {
      this.webapiService.getCategory().subscribe((res: any) => {
        this.categoryList = res.data
        for (const sub of this.categoryList) {
          this.webapiService.getSubCategoryByCatId({ catId: sub._id }).subscribe((res: any) => {
            //  console.log(res.data,'sub category');
            sub.subCatData = res.data;
            for (const course of res.data) {
              this.webapiService.getSubCourseCategoryBySubCatId({ subcatId: course._id }).subscribe((res: any) => {
                if (res.data.length > 0) {
                  course.courseCounter = true;
                  course.subCourseData = res.data;
                }
                else {
                  course.courseCounter = false;
                }
              })
            }
          })
        }
        // console.log(this.categoryList);

        // sessionStorage.setItem('nav',JSON.stringify(this.categoryList,["categoryname","slug","subCatData"]));
      })
    // }
  }
}
