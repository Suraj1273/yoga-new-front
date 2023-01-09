import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  // {path:'course', component:CourseComponent},
  {path:'course/:id', component:CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
