import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{
  ngOnInit(): void {
    this.getCourse();
  }

  constructor(private route: ActivatedRoute, 
    private courseService: CoursesService){}

  id: number = 0;
  course: any;
  hasData: boolean = false;

  getCourse(){
    this.id = this.route.snapshot.params['id']
    const studentData = this.courseService.getCourse(this.id).subscribe( res => {
      console.log(res['status']);
      console.log(res['results']);
      console.log(res['course']);
      if (res['status'] !== 'error'){
        this.course = res ['course'];
        this.hasData = true;
      }
      
    })
  }
}
