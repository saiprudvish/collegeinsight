import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoginStatus=false;
  constructor(private hc:HttpClient ) {

    if(localStorage.getItem('username')!=null){
      this.userLoginStatus=true;
    }  
    }
    createUser(userObj:any):Observable<any>{
      return  this.hc.post("/user/createuser",userObj)
    }
     
    getUser(userObj:any):Observable<any>{
      return  this.hc.post("/user/getuser",userObj)
    }

    
    loginUser(credentials:any){
       return  this.hc.post("/user/login",credentials)
     }
     // return  this.hc.post("/user/login",credentials)
    
}
   
