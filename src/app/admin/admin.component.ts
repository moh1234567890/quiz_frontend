import { Component, OnInit } from '@angular/core';
import { QuizyService } from '../quizy.service';
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  result:any=[];
  listOfStudents: any=[];
  listOfScoreStudents:any=[];
  students:boolean;
  scorestudents:boolean;
  downloadbtn:boolean=false;

  constructor(private obj:QuizyService) { }

  ngOnInit(): void {
    this.students=false;
    this.scorestudents=false;
    this.downloadbtn=false;
  }
  viewStudent():void{
    this.downloadbtn=true;
    this.students=true;
    this.scorestudents=false;
    let obj=this.obj.getViewStudent();
    obj.subscribe((response)=>
    {
      this.result=response;
      console.log(this.result);
      for( let i=0;i<this.result.length;i++){
            this.listOfStudents[i] = this.result[i]
            console.log(this.listOfStudents[i])
        }
      
     
      
    });
    

  }
  viewScoreStudent():void{
    this.downloadbtn=true;
    this.students=false;
    this.scorestudents=true;
    let obj=this.obj.getScoreStudent();
    obj.subscribe((response)=>
    {
      this.result=response;
      console.log(this.result);
      for( let i=0;i<this.result.length;i++){
        this.listOfScoreStudents[i] = this.result[i]
        console.log(this.listOfScoreStudents[i])
      
          
    }
   
      
    });

  }
public download(){
  
  var data=document.getElementById("content");
  html2canvas(data).then(canvas=>{
    var imgWidth=200;
    var pageWeigth=295;
    var imgHeight=canvas.height * imgWidth/canvas.width;
    var heightLeft=imgHeight;
    const contentDataUrl=canvas.toDataURL("image/png")
    let pdf =new jspdf('p','mm','a4');
    var position=0;
    pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imgHeight)
    pdf.save("student.pdf");
  });
}


public downloadscore(){
  
  var data=document.getElementById("contentscore");
  html2canvas(data).then(canvas=>{
    var imgWidth=200;
    var pageWeigth=295;
    var imgHeight=canvas.height * imgWidth/canvas.width;
    var heightLeft=imgHeight;
    const contentDataUrl=canvas.toDataURL("image/png")
    let pdf =new jspdf('p','mm','a4');
    var position=0;
    pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imgHeight)
    pdf.save("student.pdf");
  });
}
}
