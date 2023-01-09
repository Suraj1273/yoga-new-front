import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CourseComponent } from './course/course.component';
import { TestStripeComponent } from './test-stripe/test-stripe.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  // {path:'course', component:CourseComponent},
  {path:'course/:id', component:CourseComponent},
  {path:'stripe', component:TestStripeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
