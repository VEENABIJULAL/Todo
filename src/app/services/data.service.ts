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

 
  add(todo:any){

    
    const data={
      todo
    }

    return this.http.post("http://localhost:3000/add",data,options)

  }
  view(){
    //  let userid=this.currentid;
      // const data={
      //   _id
      // }
      return this.http.post("http://localhost:3000/view",options)
 
}
}
