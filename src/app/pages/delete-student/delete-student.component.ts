import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceStudentService } from 'src/app/services/service-student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  id: number = 0;
  student: any;
  hasData: boolean = false;
  hasError: boolean = false;

  ngOnInit(): void {
    this.getStudent();
  }

  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService,
    private router: Router){}

    @ViewChild('studentForm') studentForm?: NgForm; 


    getStudent(){
      this.id = this.route.snapshot.params['id']
      const studentData = this.studentService.getStudent(this.id).subscribe( res => {
        console.log(res['status']);
        console.log(res['results']);
        if (res['status'] !== 'error'){
          this.student = res ['students'];
          this.hasData = true;
        }
        
      })
    }

    deleteStudent(oForm: NgForm){
      const deleteSub = this.studentService.deleteStudent(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-students');
        }else{
          this.hasError = true;
        }
      })
    }
}
