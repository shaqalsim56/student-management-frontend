import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceStudentService } from 'src/app/services/service-student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService,
    private router: Router){}

  ngOnInit(): void {
    this.getStudent();
  }

    id: number = 0;
    student: any;
    hasData: boolean = false;
    hasError: boolean = false;

    @ViewChild('studentForm') studentForm?: NgForm; 

    getStudent(){
      this.id = this.route.snapshot.params['id']
      const studentData = this.studentService.getStudent(this.id).subscribe( res => {
        if (res['status'] !== 'error'){
         const studData = res ['students'];

         console.log(JSON.stringify(res));

         this.studentForm?.setValue({
           f_n: studData['first_nm'],
           l_n: studData['last_nm'],
           e_m: studData['email'],
           c_one: studData['course_one'],
           c_two: studData['course_two'],
           c_three: studData['course_three'],
           bal: studData['balance'],
         })
          this.hasData = true;
        }else{
          this.hasData = false; 
        }
        
      })
    }

    editStudent(oForm: NgForm){
      const updateSub = this.studentService.editStudent(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-students');
        }else{
          this.hasError = true;
        }
      })
    }
}
