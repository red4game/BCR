import {ThemePalette} from "@angular/material/core";
import {NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
export class Comedien {
  public time: NgbTimeStruct;
  public color: string;
  public name: string;
  public key : string;
  public talking : boolean;
  private interval : any;

  constructor(time:NgbTimeStruct = { hour: 0, minute: 30, second: 0 },color:string = "#ffffff",name:string="Comedien",key:string="a"){
    this.time = time;
    this.color = color;
    this.name =  name;
    this.key = key;
    this.talking = false;
  }

  startTimer() {
    this.talking = true;
    this.minusSecond()
    this.interval = setInterval(() => {
      this.minusSecond()
    },1000)
  }

  minusSecond() {
    if(this.time.second > 0) {
      this.time.second--;
    } else {
      if (this.time.minute >0){
        this.time.second = 59;
        this.time.minute--;
      } else {
        if (this.time.hour>0){
          this.time.minute = 59;
          this.time.second = 59;
          this.time.hour--;
        } else {
          this.pauseTimer()
        }
      }
    }
  }
  pauseTimer() {
    this.talking = false;
    clearInterval(this.interval);
  }

  addSeconds(nbs: number){
    let total = 3600 * this.time.hour + 60*this.time.minute + this.time.second + nbs
    let seconds = total%60
    let minutes = Math.floor(total/60) % 60
    let hour = Math.floor(total/3600)

    this.time.second = seconds;
    this.time.minute = minutes;
    this.time.hour = hour
  }

  removeSeconds(nbs: number){
    let total = 3600 * this.time.hour + 60*this.time.minute + this.time.second - nbs
    if (total < 0){
       total = 0;
       this.pauseTimer();
    }
    let seconds = total%60
    let minutes = Math.floor(total/60) % 60
    let hour = Math.floor(total/3600)

    this.time.second = seconds;
    this.time.minute = minutes;
    this.time.hour = hour

  }

}
