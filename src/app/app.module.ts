import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { ViewStudentComponent } from './pages/view-students/view-students.component';
import { AdminHeaderComponent } from './partials/admin-header/admin-header.component';
import { ViewSingleStudentComponent } from './pages/view-single-student/view-single-student.component';
import { UpdateStudentComponent } from './pages/update-student/update-student.component';
import { DeleteStudentComponent } from './pages/delete-student/delete-student.component';
import { ViewTeachersComponent } from './pages/view-teachers/view-teachers.component';
import { UpdateTeachersComponent } from './pages/update-teachers/update-teachers.component';
import { DeleteTeachersComponent } from './pages/delete-teachers/delete-teachers.component';
import { CreateTeachersComponent } from './pages/create-teachers/create-teachers.component';
import { ViewTeacherComponent } from './pages/view-teacher/view-teacher.component';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { UpdateCourseComponent } from './pages/update-course/update-course.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReportSelectorComponent } from './reports/report-selector/report-selector.component';
import { ReportViewerComponent } from './reports/report-viewer/report-viewer.component';
import { HomeBackgroundComponent } from './partials/home-background/home-background.component';
import { ViewCourseComponent } from './pages/view-course/view-course.component';
import { DeleteCourseComponent } from './pages/delete-course/delete-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    CreateStudentComponent,
    ViewStudentComponent,
    AdminHeaderComponent,
    ViewSingleStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ViewTeachersComponent,
    UpdateTeachersComponent,
    DeleteTeachersComponent,
    CreateTeachersComponent,
    ViewTeacherComponent,
    ViewCoursesComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    PaymentComponent,
    ReportSelectorComponent,
    ReportViewerComponent,
    HomeBackgroundComponent,
    ViewCourseComponent,
    DeleteCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
