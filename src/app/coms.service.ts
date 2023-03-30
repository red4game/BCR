import { Injectable } from '@angular/core';
import {Comedien} from "./comedien";

@Injectable({
  providedIn: 'root'
})
export class ComsService {

  public nbcomediens:string = "1";
  public comediens : Array<Comedien>;

  constructor() {
    this.comediens = new Array<Comedien>();
    this.comediens.push(new Comedien())
  }

  toInt(vari : string): Number {
    return parseInt(vari)
  }
  changeArraySize(){
    while (this.comediens.length > this.toInt(this.nbcomediens)) { this.comediens.pop(); }
    while (this.comediens.length < this.toInt(this.nbcomediens)) { this.comediens.push(new Comedien()); }
  }


}
