import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { SubjectsBannerComponent } from './subjects-banner/subjects-banner.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AboutModalComponent } from './about-modal/about-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectCardComponent,
    SubjectsBannerComponent,
    AboutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
