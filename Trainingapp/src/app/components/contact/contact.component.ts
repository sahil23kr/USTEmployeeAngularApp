import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TrainingserviceService } from '../../services/trainingservice.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  callservice:TrainingserviceService;
  postData={
    name:'',
    emailid:'',
    phoneno:'',
    desc:''
  };

  constructor(private apiService:TrainingserviceService){
  this.callservice=apiService;
  }
  onSubmit():void { 
    this.apiService.callPostApi(this.postData).subscribe(response => 
    { 
      console.log('Response:', response);
      alert("Data has been successfully submitted");
     }, 
  error => { console.error('Error:', error); }); }
  
  /*onSubmit(formdata:any) {
    this.postData={name:formdata.name,emailid:formdata.emailid,phoneno:formdata.phoneno,desc:formdata.desc}
    this.callservice.callPostApi(this.postData);
  }*/

}
