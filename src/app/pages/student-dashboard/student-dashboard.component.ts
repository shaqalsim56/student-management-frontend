import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceStudentService } from 'src/app/services/service-student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.getStudent()
  }

  constructor(private route: ActivatedRoute,
   private studentService: ServiceStudentService){}

  id: number = 0;
  student: any;
  hasData: boolean = false;

  getStudent() {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe(res => {
      console.log(res['status']);
      console.log(res['results']);
      console.log(res['data']);
      if (res['status'] !== 'error') {
        this.student = res['data']['students'];
        this.hasData = true;
      }
    });

    }
}
