import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from 'src/app/services/service-student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentComponent implements OnInit {
  students = [];
  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService){}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe( res => {
      this.students = res ['students'];
    })
  }
}
