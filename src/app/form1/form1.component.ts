import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  myForm : FormGroup;
  message : string = "";
  userError : any;
  res:any;
  id:string;
  response: any = [];
  resp: any = [];
  private _url: string = "/api";

  constructor(public fb : FormBuilder,public activatedRoute : ActivatedRoute, public router : Router,private dataservice: DataService,private http: HttpClient) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id1');
    this.response = this.dataservice.getres();
    this.myForm = this.fb.group({
      description : ['',[Validators.required]],
      datacenter_location : ['',[Validators.required]],
      label : ['',[Validators.required]]
    })
    
   }

  ngOnInit() {
    console.log(this.response);
    console.log(this.id);
  }
  onSubmit(form){

    this.postreq(this.response,this.id)
      .subscribe(res =>
        {
          this.resp = res;
        },err => {
          console.log(err+'aaaaaa');
        },
        () => {
          
        }
        )
  }

  postreq(res,id) {
    console.log("post");
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json' });
    reqHeader.append("Authorization", "Bearer "+ localStorage.getItem("token"))
    return this.http.post(this._url+ '/catalog-service/api/consumer/entitledCatalogItems/'+id+'/requests',res,{ headers: reqHeader })
    .pipe(
    map(resp => {console.log(resp);console.log('accepted');alert('request submitted successfully');this.router.navigate(['home']);}),
    catchError( this.errorHandler )
    );
  }

  errorHandler (error: Response) {
    console.log(error);
    return throwError(error);
  }

}
