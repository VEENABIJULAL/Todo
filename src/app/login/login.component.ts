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
   this.dataservice.login(uid,pswd)
   .subscribe((result:any)=>{
   if(result){
     alert(result.message)
     localStorage.setItem("name",result.name);
     localStorage.setItem("userid",result.userid);
     this.router.navigateByUrl("todo");
   }
 },
 (result)=>{
  alert(result.error.message);
 } )




 //   var uid=this.uid;
 //   var pswd=this.pswd;
 //   const result=this.dataservice.login(uid,pswd)
 //   if(result){
  //    alert("login successful");
 //       this.router.navigateByUrl("todo")
 //   }
    
    
  }
  register(){
    this.router.navigateByUrl("register")
  }

}
