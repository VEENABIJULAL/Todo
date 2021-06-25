import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {
  datas="";
  
  constructor(private dataservice:DataService,private router:Router) {
    var uid=localStorage.getItem("userid")
  console.log(uid);
  this.dataservice.view(uid) 
 .subscribe((result:any)=>{
   if(result){
     this.datas=result.message
   }
  },
  (result)=>{
    alert(result.error.message)
  
 })
   }

  ngOnInit(): void {
  }
  
}
