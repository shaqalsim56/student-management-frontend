import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from 'src/app/services/service-student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single-student',
  templateUrl: './view-single-student.component.html',
  styleUrls: ['./view-single-student.component.css']
})
export class ViewSingleStudentComponent implements OnInit {

  ngOnInit(): void {
    this.getStudent();
  }

  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService){}

    id: number = 0;
    student: any;
    hasData: boolean = false;

    getStudent(){
      this.id = this.route.snapshot.params['id']
      const studentData = this.studentService.getStudent(this.id).subscribe( res => {
        console.log(res['status']);
        console.log(res['results']);
        console.log(res['students']);
        if (res['status'] !== 'error'){
          this.student = res ['students'];
          this.hasData = true;
        }
        
      })
    }
}
