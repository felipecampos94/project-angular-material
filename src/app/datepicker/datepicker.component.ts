import {Component} from '@angular/core';
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public startDate = new Date();
  public minDate = this.removeDays();
  public maxDate = this.addDays();


  constructor(private platform: Platform) {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

  private addDays(): Date {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    return currentDate;
  }

  private removeDays(): Date {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30);
    return currentDate;
  }

}
