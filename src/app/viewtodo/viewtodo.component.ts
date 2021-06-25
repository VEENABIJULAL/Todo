import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {

 
  datas:any;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas,event.previousIndex, event.currentIndex);
  }
  
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
  addtodo(){
    this.router.navigateByUrl("todo")
  }

  
}
