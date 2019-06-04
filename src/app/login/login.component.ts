import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  message : string = "";
  userError : any;
  isAuthenticated : boolean = false; 
  password:string = 'VMware1!';
  username:string = 'tenant';
  flag : number= 0;

  constructor(public fb : FormBuilder,public router : Router) {
    this.myForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
   }

  ngOnInit() {
  
  }

  onSubmit(form){
    
    
              if(form.value.email == this.username && form.value.password == this.password){
                console.log('match found');
                window.location.href='https://vra.vmware.lab/vcac/#csp.cs.ui.catalog.list';
              }else{
                this.router.navigate(['/']);
              }
          
    

    
    
  }

}
