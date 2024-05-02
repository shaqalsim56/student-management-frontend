import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courses=[];
  constructor(private route: ActivatedRoute,
  private courseService: CoursesService){}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(res =>{
      console.log(['courses'])
      this.courses = res ['courses']
    })
  }
}
