import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {

  constructor(private route: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router){}

    ngOnInit(): void {
      this.getCourse();
    }

    id: number = 0;
    course: any;
    hasData: boolean = false;
    hasError: boolean = false;

    @ViewChild('courseForm') courseForm?: NgForm; 

    getCourse(){
      this.id = this.route.snapshot.params['id']
      const courseData = this.courseService.getCourse(this.id).subscribe( res => {
        if (res['status'] !== 'error'){
         const courseData = res ['courses'];

         console.log(JSON.stringify(res));

         this.courseForm?.setValue({
           course_name: courseData['course_name'],
           exam: courseData['exam'],
         })
          this.hasData = true;
        }else{
          this.hasData = false; 
        }
        
      })
    }

    editCourse(oForm: NgForm){
      const updateSub = this.courseService.editCourse(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-courses');
        }else{
          this.hasError = true;
        }
      })
    }
}
