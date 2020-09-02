import { Component, OnInit } from '@angular/core';
import { QuizyService } from '../quizy.service';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {
  selectedAnswer:string="";
  options:any=["delhi","mumbai","kolkata","chennai"];
  options2:any=["male","female","boy","girl"];
  options3:any=["less","same","increases","no option"];
  count:boolean=false;
  score:number=0;
  total:number=0;
  finalscore:number=0;
  increment:boolean=false
  submitbtn:boolean=false
  ans1:string;
  ans2:string;
  imagename:string;
  ans3:string;
  score1:number=0;
  score2:number=0;
  score3:number=0;
  studentname:any;
  studentclas:any;
  studentrol:any;
  studentroll:number;
  studentclass:number;
  results:any;
  counter:number=0;
  
  
  
  

  constructor(private router:Router,private obs:QuizyService) { }

  ngOnInit(): void {
    this.studentname=localStorage.getItem("studentname");
    this.studentclas=localStorage.getItem("studentclass");
    this.studentrol=localStorage.getItem("studentroll");
    this.imagename=localStorage.getItem("file");
    console.log(localStorage.getItem("file"))
    this.studentclass=parseInt(this.studentclas)
    this.studentroll=parseInt(this.studentrol)
    this.submitbtn=false;
    this.counter=1;
    

    console.log(localStorage.getItem("studentname"))
  }
  answerhandler(event:any,ans1:string){
    console.log(ans1)
    this.counter=this.counter+1;
    if(ans1===this.options[0]){
      this.score1=this.score+1;
      console.log(this.score1);
    }
    else{
      this.score1=0;
      console.log(this.score1)
    }
  

  }

  answerhandler2(event:any,ans2:string){
    this.counter=this.counter+1;
    console.log(ans2)
    if(ans2===this.options2[0]){
      console.log(this.score1)
      this.score2=this.score1+1;
      console.log(this.score2)
    }
    else{
      this.score2=this.score1;
      console.log(this.score2)
    }
    
  } 

  answerhandler3(event:any,ans3:string)
  {
    this.counter=this.counter+1;
    console.log(ans3)
    if(ans3===this.options3[0]){
      console.log(this.score1)
      console.log(this.score2)
      this.score3=this.score2+1;
      console.log(this.score3)
    }
    else{
      this.score3=this.score2;
      console.log(this.score3)
    }
    this.finalscore=this.score3
  console.log(this.finalscore) 

    
    
  }
  


  
  submitquiz():void{
    this.total=this.score;
    console.log(this.total)
  }
  onsubmit(studentquiz:NgForm):void{
    console.log(studentquiz.value)
   // console.log(studentquiz.value.question0)
    //if(studentquiz.value.question0==="delhi"){
     // this.score1=this.score+1;
      //console.log(this.score1)


    //}
    //else if(studentquiz.value.question1==="male"){

     // console.log(this.score1)

     // this.score2=this.score1+1;
      //console.log(this.score2)
    //}
    //else{
      //this.score=0;
    
    //this.finalscore=this.score3;
    //console.log(this.finalscore)
    let jsonObj={};
    jsonObj["studentname"]=studentquiz.value["studentname"];
    jsonObj["studentclass"]=studentquiz.value["studentclass"];
    jsonObj["studentroll"]=studentquiz.value["studentroll"];
    jsonObj["finalscore"]=studentquiz.value["finalscore"];
    
    
    
    console.log("----------output of quiz-",jsonObj);
      this.obs.getScore(jsonObj).subscribe((result: any) => {
         this.results =result;
         console.log(this.results)
         console.log('result :', this.results);
         
      
         
      });
      this.submitbtn=true;
     
      
      alert("THANK YOU")
    
    
    

  }
  logout():void{
    

    this.studentname=localStorage.removeItem("studentname");
    this.studentclas=localStorage.removeItem("studentclass");
    this.studentrol=localStorage.removeItem("studentroll");
    this.router.navigate(['login'])

  }
}
