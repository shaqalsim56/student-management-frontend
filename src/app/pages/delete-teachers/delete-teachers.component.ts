import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-delete-teachers',
  templateUrl: './delete-teachers.component.html',
  styleUrls: ['./delete-teachers.component.css']
})
export class DeleteTeachersComponent implements OnInit {
  id: number = 0;
  teacher: any;
  hasData: boolean = false;
  hasError: boolean = false;

  ngOnInit(): void {
    this.getTeacher();
  }
  
  constructor(private route: ActivatedRoute,
    private teacherService: TeachersService ,
    private router: Router){}

  @ViewChild('teacherForm') teacherForm?: NgForm; 



    getTeacher(){
      this.id = this.route.snapshot.params['id']
      const teacherData = this.teacherService.getTeacher(this.id).subscribe( res => {
        if (res['status'] !== 'error'){
          console.log(res['data']);
         const teachData = res['data']
          this.hasData = true;
        }else{
          this.hasData = false; 
        }
        
      })
    }

    deleteTeacher(oForm: NgForm){
      const deleteSub = this.teacherService.deleteTeacher(oForm.value, this.id).subscribe((res)=>{
        if(res['status'] !== 'error'){
          this.hasError = false;
          this.router.navigateByUrl('/view-teachers');
        }else{
          this.hasError = true;
        }
      })
    }
}
