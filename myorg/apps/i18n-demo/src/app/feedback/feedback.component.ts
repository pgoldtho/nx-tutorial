import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'myorg-app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {
  customerFeedback = new Feedback();



  saveFeedback() {
    alert('Thanks for your valuable feedback!!!\nThe feedback has been submitted succesfully.');
    console.table(this.customerFeedback);
  }

}

