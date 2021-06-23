import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname="";
uid="";
pswd="";
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname;
    var uid=this.uid;
    var pswd=this.pswd;
    let users=this.dataservice.accountdetails;
    if(uid in users){
      alert("User exist ,please login...");
    }
    else{
      users[uid]={
        uid,
        username:uname,
        password:pswd

      }
      alert("Successfully registered");
      this.router.navigateByUrl("")
    }

   
  }


}
