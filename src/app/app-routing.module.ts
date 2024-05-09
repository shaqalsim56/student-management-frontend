import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ViewStudentComponent } from './pages/view-students/view-students.component';
import { ViewSingleStudentComponent } from './pages/view-single-student/view-single-student.component';
import { UpdateStudentComponent } from './pages/update-student/update-student.component';
import { DeleteStudentComponent } from './pages/delete-student/delete-student.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
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
import { ViewCourseComponent } from './pages/view-course/view-course.component';
import { DeleteCourseComponent } from './pages/delete-course/delete-course.component';


const routes: Routes = [
  {path: '', title: 'Chatham Evening', component: HomepageComponent, pathMatch: 'full'},
  {path: 'student-dashboard', title: 'Student Dashboard', component: StudentDashboardComponent, pathMatch: 'full'},
  {path: 'admin-dashboard', title: 'Admin Dashboard', component: AdminDashboardComponent, pathMatch: 'full'},
  {path: 'view-students', title: 'View All Students', component: ViewStudentComponent, pathMatch: 'full'},
  {path: 'view-student/:id', title: 'View Student', component: ViewSingleStudentComponent},
  {path: 'update-student/:id', title: 'Update Student', component: UpdateStudentComponent },
  {path: 'delete-student/:id', title: 'Update Student', component: DeleteStudentComponent },
  {path: 'create', title: 'Add New Student', component: CreateStudentComponent },
  
  {path: 'view-teachers', title: 'View Teachers', component: ViewTeachersComponent},
  {path: 'view-teacher/:id', title: 'View Teacher', component: ViewTeacherComponent},
  {path: 'update-teacher/:id', title: 'Update Teacher', component: UpdateTeachersComponent},
  {path: 'delete-teacher/:id', title: 'Delete Teacher', component: DeleteTeachersComponent},
  {path: 'create-teacher', title: 'Create Teacher', component: CreateTeachersComponent},

  {path: 'view-courses', title: 'View Courses', component: ViewCoursesComponent},
  {path: 'create-course', title: 'Create Course', component: CreateCourseComponent},
  {path: 'update-course/:id', title: 'Update Course', component: UpdateCourseComponent},
  {path: 'view-course/:id', title: 'View Course', component: ViewCourseComponent}, 
  {path: 'delete-course/:id', title: 'Delete Course', component: DeleteCourseComponent}, 


  {path: 'payment/:id', title: 'Make Payment', component: PaymentComponent},
  {path: 'reports', title: 'Select Report', component: ReportSelectorComponent},
  {path: 'report-view', title: 'View Report', component: ReportViewerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
