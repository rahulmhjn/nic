import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../_models';
import { UserService } from '../_services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  response: any = [];

  constructor(private http: HttpClient, private dataservice: DataService,public router : Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
  }

  catalog(id) {
    this.dataservice.catalogReq(id)
                .subscribe(res =>
                {
                  
                },err => {
                  console.log(err+'abcd');
                },
                () => {
                  
                  this.router.navigate(['form1',id]);
                }
                )
  }

}
