import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent
  },
  {
    path:'register' , component:RegisterComponent
  },
  {
    path:'todo' , component:TodoComponent
  },
  {
    path:'view' , component:ViewtodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
