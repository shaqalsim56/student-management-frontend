import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceStudentService } from 'src/app/services/service-student.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css']
})
export class ReportSelectorComponent implements OnInit{
  students = [];

  hasResults: boolean = false;

  dateFrom: any;
  dateTo: any;

  @ViewChild('reportData') reportData!: ElementRef;

  constructor(private route: ActivatedRoute,
    private studentService: ServiceStudentService){}

  ngOnInit(): void {
    
   }

  getAllStudents(data: NgForm){

    this.dateFrom = data.value.dateFrom;
    this.dateTo = data.value.dateTo;
   this.studentService.getReport().subscribe( res => {
      this.students = res ['results'];
      if (this.students.length > 0){
        this.hasResults = true;
      } else {
        this.hasResults = false;
      }
    })
  }

generatePDF(): void {
  try{
    let pdfDoc = new jsPDF();
    const  title = document.getElementsByClassName('title');
    const  date = document.getElementsByClassName('date');

    autoTable(pdfDoc, {
      html: "#reportData",
      startY: 40
    });

    pdfDoc.setProperties({
      title: "Student Report"
    });

    pdfDoc.text(title[0].innerHTML, 80, 10);
    pdfDoc.text(date[0].innerHTML, 70, 30);

    window.open(pdfDoc.output('bloburl')); 

  } catch (error){
    console.log(error)
  }
}
}
