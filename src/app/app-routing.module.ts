import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewCourseComponent } from './includes/view-course/view-course.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  {path:'course', component:ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
