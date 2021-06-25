import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  uid="";
  todo="";




  constructor(private dataservice:DataService,private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }
 
  
  add(){
    var uid=this.uid;
    var todo=this.todo;
    console.log(todo);

    this.dataservice.add(uid,todo)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
    }
    
    },
    (result)=>{
      alert(result.error.message);
     } )
    }

  //  var users=this.dataservice.accountdetails;
  //  if(uid in users){
  //    users[uid].todos.push(todo)
  //    console.log(users[uid].todos);
      
  //  }
  //  else{
  //    alert("invalid")
  //  }
   
   
  // view(){
  //   alert(1)
  //   this.router.navigateByUrl("view");

  // }
  showTodos(){
    this.router.navigateByUrl("view");
  }
    
  }


