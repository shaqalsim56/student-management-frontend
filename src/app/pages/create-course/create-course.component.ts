import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit{

  constructor(private courseService: CoursesService,
    private router: Router){}

    ngOnInit(): void {}

    saveCourse(oForm: NgForm){

      const addSub = this.courseService.createCourse(oForm.value).subscribe( (res) =>{
        if (res['status'] == 'success'){
          this.router.navigateByUrl('/view-courses');
        }
      })
    }
}
