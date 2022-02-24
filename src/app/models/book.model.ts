import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export interface IBook {
  id?: string;
  name : string;
  author : string;
  genre : string;
  price : number;
  dateBought: NgbDateStruct;
}
