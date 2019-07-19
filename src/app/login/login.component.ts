﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    loggedIn: Boolean = false;
    globalResponse: any = []

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,private http: HttpClient, private dataservice: DataService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();
        this.dataservice.removeToken();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.loggedIn = false;
                    this.dataservice.removeToken();
                    this.dataservice.ValidateUser()
                .subscribe(res =>
                {
                  this.globalResponse = res;
                },err => {
                  console.log(err);
                },
                () => {
                  console.log(this.globalResponse);
                  console.log(this.globalResponse.id);
                  this.dataservice.storeToken(this.globalResponse.id);
                  this.dataservice.getToken();
                  this.loggedIn = true;
                  alert('Token generated successfully');
                  window.location = window.location;
                }
        
                )

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                
    }

    
}