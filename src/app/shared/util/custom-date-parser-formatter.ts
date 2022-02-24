/*
import {Injectable} from "@angular/core";
import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

/!**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 *!/
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

parse(value: string): NgbDateStruct | null {
  if (value) {
    const date = value.split(this.DELIMITER);
    return {
      day : parseInt(date[0], 10),
      month : parseInt(date[1], 10),
      year : parseInt(date[2], 10)
    };
  }
  return null;
}

  parse(value: Date): NgbDateStruct | null {
    if (value) {
      var ngbDateStruct = { day: value.getUTCDay(), month: value.getUTCMonth(), year: value.getUTCFullYear()}
      return ngbDateStruct
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}
*/
