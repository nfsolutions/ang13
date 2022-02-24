import {Component} from '@angular/core';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {CustomAdapter} from "../../services/custom-adapter";


@Component({
  selector: 'ngbd-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
  ]
})
export class NgbdDatepickerAdapter {

  model1: string;
  model2: string;
  model3: Date;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<Date>) {
  }

  // constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<Date>) {}

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
}
