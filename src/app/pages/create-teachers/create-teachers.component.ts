import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {

  constructor(private teacherService: TeachersService,
    private router: Router){}

  ngOnInit(): void {}

  saveTeacher(oForm: NgForm){

    const addSub = this.teacherService.createTeacher(oForm.value).subscribe( (res) =>{
      if (res['status'] == 'success'){
        this.router.navigateByUrl('/view-teachers');
      }
    })
  }
}
