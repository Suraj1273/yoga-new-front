import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CourseComponent } from './course/course.component';
import { TestStripeComponent } from './test-stripe/test-stripe.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TrainersComponent } from './trainers/trainers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgxLoadingModule } from "ngx-loading";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ViewTrainersComponent } from './trainers/view-trainers/view-trainers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CourseComponent,
    TestStripeComponent,
    SafeHtmlPipe,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,
    TrainersComponent,
    GalleryComponent,
    FaqComponent,
    TermAndConditionComponent,
    PrivacyPolicyComponent,
    TestimonialComponent,
    ViewTrainersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    NgxUsefulSwiperModule,
    FormsModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({}),
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
