import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingserviceService {

  _calldata:HttpClient
 postdata:any;

 getpostData(){
   this._calldata.get('https://jsonplaceholder.typicode.com/posts').subscribe(result=>{
     this.postdata=result
     console.log(this.postdata);
     alert('got the data');
   })
 }
 private apiUrl = 'http://localhost:9000/addnewemp'; // Replace with your API endpoint constructor(private http: HttpClient) { } 
 callPostApi(data: any): Observable<any> 
 { 
   const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    return this._calldata.post(this.apiUrl, data); 
  }
  constructor(httpdata:HttpClient) { 
    this._calldata=httpdata
  }
}
