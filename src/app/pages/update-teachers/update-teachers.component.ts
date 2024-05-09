import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-update-teachers',
  templateUrl: './update-teachers.component.html',
  styleUrls: ['./update-teachers.component.css']
})
export class UpdateTeachersComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private teacherService: TeachersService,
    private router: Router){}

    ngOnInit(): void {
      this.getTeacher();
    }

    id: number = 0;
    teacher: any;
    hasData: boolean = false;
    hasError: boolean = false;

    @ViewChild('teacherForm') teacherForm?: NgForm; 

    getTeacher(){
      this.id = this.route.snapshot.params['id']
      const teacherData = this.teacherService.getTeacher(this.id).subscribe( res => {
        if (res['status'] !== 'error'){
          console.log(res['teacher'])
         const teachData = res['teacher'];

         console.log(JSON.stringify(res));

         this.teacherForm?.setValue({
           f_n: teachData['first_nm'],
           l_n: teachData['last_nm'],
           e_m: teachData['email'],
           c_one: teachData['course_one'],
           c_two: teachData['course_two'],
         })
          this.hasData = true;
        }else{
          this.hasData = false; 
        }
        
      })
    }

    editTeacher(oForm: NgForm){
      const updateSub = this.teacherService.editTeacher(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-teachers');
        }else{
          this.hasError = true;
        }
      })
    }
}
