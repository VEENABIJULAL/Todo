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

 //_id=60d9a7d93ed4b221a81fce26;
  datas:any;
  user:any
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas,event.previousIndex, event.currentIndex);
  }
  
  constructor(private dataservice:DataService,private router:Router) {
   // this.user=localStorage.getItem("todos");
   // console.log(this.user);
    
    
  this.dataservice.view() 
 .subscribe((result:any)=>{
   if(result){
     console.log(result.message);
     
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
