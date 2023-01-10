import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CourseComponent } from './course/course.component';
import { TestStripeComponent } from './test-stripe/test-stripe.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  // {path:'course', component:CourseComponent},
  {path:'course/:id', component:CourseComponent},
  {path:'stripe', component:TestStripeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog-detail', component:BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
