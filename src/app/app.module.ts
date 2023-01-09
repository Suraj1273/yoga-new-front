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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CourseComponent,
    TestStripeComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    NgxUsefulSwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
