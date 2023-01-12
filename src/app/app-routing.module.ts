import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CourseComponent } from './course/course.component';
import { TestStripeComponent } from './test-stripe/test-stripe.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  // {path:'course', component:CourseComponent},
  {path:'course/:id', component:CourseComponent},
  {path:'stripe', component:TestStripeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog-detail', component:BlogDetailComponent},
  {path:'blog-detail/:id', component:BlogDetailComponent},
  {path:'terms-and-conditions', component:TermAndConditionComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'faq', component:FaqComponent},
  {path:'testimonial', component:TestimonialComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
