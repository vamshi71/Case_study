import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.css'],
  providers:[UserService]
})
export class MloginComponent implements OnInit {

  constructor(public userService: UserService,private router:Router) { }
  
  serverErrorMessages!: string;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.userService.selectedUser = {
      _id:"",
      username:"",
      password:""
    }
  }

  onSubmit(form : NgForm){
    if(this.userService.selectedUser.username=="" || this.userService.selectedUser.password=="" ){
      alert("please sepcify username or password");
    }
    else if(this.userService.selectedUser.password.length<6){
      alert("please enter password of minimum 6 characters");
    }
    this.userService.postLogin(form.value).subscribe(res =>{
     
      console.log(res.token);
      alert("login Successfull");
      localStorage.setItem('token',res.token);
      this.router.navigate(['/manager'])
      
    },
    err => {
      this.serverErrorMessages = err.error.message;
    });
  }

}
