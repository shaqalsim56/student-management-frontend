import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit{

  ngOnInit(): void {
    this.getTeacher();
  }

  constructor(private route: ActivatedRoute,
    private teacherService: TeachersService){}

    id: number = 0;
    teacher: any;
    hasData: boolean = false;

    getTeacher(){
      this.id = this.route.snapshot.params['id']
      const teacherData = this.teacherService.getTeacher(this.id).subscribe( res => {
        console.log(res['status']);
        console.log(res['results']);
        console.log(res['teacher']);
        if (res['status'] !== 'error'){
          this.teacher = res['teacher'];
          this.hasData = true;
        }
        
      })
    }
}
