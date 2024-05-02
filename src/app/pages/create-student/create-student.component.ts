import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceStudentService } from 'src/app/services/service-student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  
  constructor(private studentService: ServiceStudentService,
    private router: Router){}

  ngOnInit(): void {}

  saveStudent(oForm: NgForm){

    const addSub = this.studentService.createStudent(oForm.value).subscribe( (res) =>{
      if (res['status'] == 'success'){
        this.router.navigateByUrl('/view-students');
      }
    })
  }
}
