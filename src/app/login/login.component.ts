import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuizyService } from '../quizy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentname:string;
  studentroll:number;
  studentclass:number;
  results:any;
  userlogin:boolean;

  openquiz():void{
    this.userlogin=true;
    this.router.navigate(['quizpage'])
    localStorage.setItem("studentname",this.results[0].studentname)
    localStorage.setItem("studentclass",this.results[0].studentclass)
    localStorage.setItem("studentroll",this.results[0].studentroll)
   localStorage.setItem("file",this.results[0].file)
   console.log(this.results[0].file)

  }

  constructor(private router:Router,private obj:QuizyService) { }

  ngOnInit(): void {
    
  }
  onsubmit(logstudent:NgForm){
  
    console.log(logstudent)
  
  let jsonObj={};
  jsonObj["studentname"]=logstudent.value["studentname"];
 
  jsonObj["studentroll"]=logstudent.value["studentroll"];
  
  
  console.log("----------output of login dashboard-",jsonObj);
    this.obj.loginStudent(jsonObj).subscribe((result: any) => {
       this.results =result;
       console.log('result :--', this.results);
       if(result.length>0)
       {
         this.userlogin=true;
         console.log("login succesfull")
         
         console.log(this.results)
         console.log(this.results[0].studentname)
         
       }
       else{
      
         console.log("login failed")
       }
       
    
       
    });
    
  }
  
  

}
