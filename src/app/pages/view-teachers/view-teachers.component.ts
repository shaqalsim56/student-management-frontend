import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.css']
})
export class ViewTeachersComponent implements OnInit{
  teachers=[];
  constructor(private route: ActivatedRoute,
    private teacherService: TeachersService){}
  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(res =>{
      this.teachers = res ['teachers']
    })
  }
}
