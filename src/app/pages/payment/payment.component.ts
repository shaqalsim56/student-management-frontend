import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from 'src/app/services/service-student.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  ngOnInit(): void {
    this.getStudent();
  }
  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService,
    private router: Router){}

    id: number = 0;
    student: any;
    hasData: boolean = false;

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

    savePayment(oForm: NgForm){

      const addSub = this.studentService.createPayment(oForm.value).subscribe( (res) =>{
        if (res['status'] == 'success'){
          this.router.navigateByUrl('/view-students');
        }
      })
    }
}
