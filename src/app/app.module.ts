import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScormWrapperModule } from 'ngx-scorm-wrapper';
import {ScormService} from 'src/app/services/scorm.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseObjectComponent } from './course-object/course-object.component';
// import {RadioButtonModule} from 'primeng/radiobutton';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseObjectComponent,
  ],
  imports: [
    BrowserModule,
    ScormWrapperModule,
    BrowserAnimationsModule,
    // RadioButtonModule,
    AppRoutingModule
  ],
  providers: [
    ScormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
