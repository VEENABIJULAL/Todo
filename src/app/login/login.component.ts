import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

uid="User-id please";
pswd="";

accountdetails:any={
  1000: {uid:1000, username:"userone", password:"userone",todo:""},
  1001: {uid:1001, username:"usertwo", password:"usertwo", todo:""},
  1002: {uid:1002, username:"userthree", password:"userthree", todo:""},
  1003: {uid:1003, username:"userfour", password:"userfour", todo:""},
}

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var uid=this.uid;
    var pswd=this.pswd;
    let users=this.accountdetails;
    if(uid in users){
      if(pswd==users[uid]["password"]){
        alert("login successful");
      }else{
        alert("Incorrect password");
      }
    }
    else{
      alert("Invalid account");
    }
    
  }
  register(){
    alert("register clicked");
  }

}
