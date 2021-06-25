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

    this.dataservice.register(uname,uid,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        this.router.navigateByUrl("");
    }
    
    },
    (result)=>{
      alert(result.error.message);
     } )
  //  const result=this.dataservice.register(uname,uid,pswd)
  //  if(result){
  //    alert("Successfully registered");
  //    this.router.navigateByUrl("")
  //  }
  //  else{
  //    alert("User exist ,please login...");
   // }
   
  }


}
