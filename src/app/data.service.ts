import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/api";
  private authcode: string;
  response: any = [];
  kd:any;
  id:string;

  constructor(private http: HttpClient,public router : Router) { }
  

ValidateUser ()
{

var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json','No-Auth':'True' });
return this.http.post(this._url+ '/identity/api/tokens',{username:"iaasact",password:"VMware1!",tenant: "vsphere.local"},{ headers: reqHeader })
.pipe(
map(res => res),
catchError( this.errorHandler )
);
}
public isAuthenticated(): boolean {
  return this.getToken()!== null;
}
storeToken(token: string){
  localStorage.setItem("token",token);
}
getToken() {
  return localStorage.getItem("token");
}
removeToken() {
  return localStorage.removeItem("token");
}
// catalogReq() {
//   this.authcode = this.getToken();
//   console.log(this.authcode);
//   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json','Authorization': `Bearer ${this.getToken()}`});
//   return this.http.get(this._url+ '/catalog-service/api/consumer/entitledCatalogItems/3f3fcfd9-7d58-4640-b1b9-6abcbe8e1f78',{ headers: reqHeader })
//   .pipe(
//     map(res => res),
//     catchError( this.errorHandler )
//     );
// }
// catalogReq()
// {

// var reqforHeader = new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json','Bearer-Token':'True','Authorization':`Bearer ${this.getToken()}` });
// return this.http.get(this._url+ '/catalog-service/api/consumer/entitledCatalogItems/3f3fcfd9-7d58-4640-b1b9-6abcbe8e1f78',{ headers: reqforHeader })
// .pipe(
// map(res => res),
// catchError( this.errorHandler )
// );
// }3f3fcfd9-7d58-4640-b1b9-6abcbe8e1f78
catalogReq(id) {
  var Header = new HttpHeaders();
  if(localStorage.getItem("token")!=null) {
    Header.append("Authorization", "Bearer "+ localStorage.getItem("token"))
  }
  return this.http.get(this._url+ '/catalog-service/api/consumer/entitledCatalogItems/'+id+'/requests/template',{
    headers: Header
  })
  .pipe(
    map(res => {
      console.log(res);
      // this.postreq(res,id)
      // .subscribe(res =>
      //   {
      //     this.response = res;
      //   },err => {
      //     console.log(err+'aaaaaa');
      //   },
      //   () => {
          
      //   }
      //   )
      this.kd = res;
      this.id = id;
      
      console.log("rahul");
    })
  );
}

getres() {
  return this.kd;
}

postreq(res,id) {
  console.log("post");
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json' });
  reqHeader.append("Authorization", "Bearer "+ localStorage.getItem("token"))
  return this.http.post(this._url+ '/catalog-service/api/consumer/entitledCatalogItems/'+id+'/requests',res,{ headers: reqHeader })
  .pipe(
  map(resp => {console.log(resp);console.log('accepted');alert('request submitted successfully')}),
  catchError( this.errorHandler )
  );
}
errorHandler (error: Response) {
  console.log(error);
  return throwError(error);
}


}
