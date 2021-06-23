import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails:any={
    1000: {uid:1000, username:"userone", password:"userone",todo:""},
    1001: {uid:1001, username:"usertwo", password:"usertwo", todo:""},
    1002: {uid:1002, username:"userthree", password:"userthree", todo:""},
    1003: {uid:1003, username:"userfour", password:"userfour", todo:""},
  }
  

  constructor() { }
}
