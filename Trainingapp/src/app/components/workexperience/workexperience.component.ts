import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TrainingserviceService } from '../../services/trainingservice.service';

@Component({
  selector: 'app-workexperience',
  imports: [NgFor],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent {
  _postdata:TrainingserviceService

  constructor(makecall:TrainingserviceService){
    this._postdata=makecall;
  }
}
