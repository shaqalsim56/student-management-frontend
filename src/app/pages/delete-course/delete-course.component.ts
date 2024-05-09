import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit{
  id: number = 0;
 course: any;
  hasData: boolean = false;
  hasError: boolean = false;

  ngOnInit(): void {
    this.getCourse();
  }

  constructor(private route: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router){}

    @ViewChild('courseForm') courseForm?: NgForm; 

    getCourse(){
      this.id = this.route.snapshot.params['id']
      const courseData = this.courseService.getCourse(this.id).subscribe( res => {
        console.log(res['status']);
        console.log(res['results']);
        if (res['status'] !== 'error'){
          this.course = res ['course'];
          this.hasData = true;
        }
        
      })
    }

    deleteCourse(oForm: NgForm){
      const deleteSub = this.courseService.deleteCourse(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-courses');
        }else{
          this.hasError = true;
        }
      })
    }
}
