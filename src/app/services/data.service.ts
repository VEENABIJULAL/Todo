import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails:any={
    1000: {uid:1000, username:"userone", password:"userone",todos:[]},
    1001: {uid:1001, username:"usertwo", password:"usertwo",todos:[]},
    1002: {uid:1002, username:"userthree", password:"userthree",todos:[]},
    1003: {uid:1003, username:"userfour", password:"userfour",todos:[]},
  }
  

  constructor(private router:Router,private http:HttpClient) { }

  register(uname:any,uid:any,pswd:any){

      const data={
        uname,
        uid,
        pswd
      }
  
      return this.http.post("http://localhost:3000/register",data)
//    let users=this.accountdetails;
//    if(uid in users){
//      return false;
    
//    }
//    else{
//      users[uid]={
//        uid,
//        username:uname,
//        password:pswd

//      }
//      return true;
      
 //   }

  }
  login(uid:any,pswd:any){
    const data={
      uid,
      pswd
    }

    return this.http.post("http://localhost:3000/login",data,options)


  //  let users=this.accountdetails;
  //  if(uid in users){
  //    if(pswd==users[uid]["password"]){
  //      return true;
        
 //     }else{
 //       alert("Incorrect password");
  //      return false;
  //    }
  //  }
  //  else{
  //    alert("Invalid account");
  //    return false;
  //  }
  }
  add(uid:any,todo:any){

    
    const data={
      uid,
      todo
    }

    return this.http.post("http://localhost:3000/add",data,options)

  }
  view(uid:any){
    //  let userid=this.currentid;
      const data={
        uid
      }
      return this.http.post("http://localhost:3000/view",data,options)
 
}
}
