import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseObjectComponent } from './course-object/course-object.component';



  const routes: Routes = [
    { path: '',redirectTo: '/course',pathMatch: 'full'},
    
    { path: 'course', 
    component: CourseComponent ,
    },
    { path: 'course-object', 
    component: CourseObjectComponent ,
    },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
