import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuizyService } from '../quizy.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  studentname:string;
  studentroll:number;
  studentclass:number;
  studentemail:string;
  results:any;
  registerbtn:boolean=false;
  selectedFile:File=null;
  fd=new FormData();
  imagename:string;
  
  

  constructor(private router:Router,private obj:QuizyService) { }

  ngOnInit(): void {
    this.registerbtn=false;
  }
  onsubmit(newstudent:NgForm){
    console.log(newstudent)
    
  
  let jsonObj={};
  
  this.imagename=this.selectedFile.name
  console.log(this.imagename)
  jsonObj["studentname"]=newstudent.value["studentname"];
  jsonObj["studentclass"]=newstudent.value["studentclass"];
  jsonObj["studentroll"]=newstudent.value["studentroll"];
  jsonObj["studentemail"]=newstudent.value["studentemail"];
  jsonObj["file"]=this.selectedFile.name;
  
  
  
  console.log("----------output-",jsonObj);
    this.obj.getValues(jsonObj).subscribe((result: any) => {
       this.results =result;
       console.log('result :', this.results);
       
    
       
    });
    
  }
  register():void{
    this.registerbtn=true;

    
  }
  
  
//selectimage(event){
  //if(event.target.files.length>0){
    //const file=event.target.files[0]
    //this.imagename=file
  //}

//}
createFormData(event){
  this.selectedFile=<File>event.target.files[0];
  this.fd.append('file',this.selectedFile,this.selectedFile.name);
  console.log(this.fd)
  console.log(this.selectedFile.name)
}
upload(){
  this.obj.getImage(this.fd).subscribe((result: any) => {
    this.results =result;
console.log('result :', this.results);
    
  

  });
 }
 
}


