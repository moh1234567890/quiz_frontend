import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizyService {
  

  constructor(private http:HttpClient) { }
  getValues(data: any) {
    console.log(data);
    return this.http.post("http://localhost:9000/register", data);
  }
  getImage(data: any) {
    console.log(data);
    return this.http.post("http://localhost:9000/register/image", data);
  }




  loginStudent(data:any){
    console.log(data);
    return this.http.post("http://localhost:9000/register/login",data);
   }

  getScore(data:any){
    console.log(data);
    return this.http.post("http://localhost:9000/admin/scores", data);
  }
  getScoreStudent(){
    let obs=this.http.get("http://localhost:9000/admin/viewScoreStudent");
    return obs;
  }
  getViewStudent(){
    let obs=this.http.get("http://localhost:9000/register/viewStudent");
    return obs;

  }
}
