import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

uid="User-id please";
pswd="";


  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  login(){
    var uid=this.uid;
    var pswd=this.pswd;
    let users=this.dataservice.accountdetails;
    if(uid in users){
      if(pswd==users[uid]["password"]){
        alert("login successful");
        this.router.navigateByUrl("todo")
      }else{
        alert("Incorrect password");
      }
    }
    else{
      alert("Invalid account");
    }
    
  }
  register(){
    this.router.navigateByUrl("register")
  }

}
