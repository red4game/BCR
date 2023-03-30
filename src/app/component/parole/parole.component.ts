import {Component, HostListener} from '@angular/core';
import {ComsService} from "../../coms.service";
import {Comedien} from "../../comedien";

@Component({
  selector: 'app-parole',
  templateUrl: './parole.component.html',
  styleUrls: ['./parole.component.css']
})



export class ParoleComponent {

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    this.comServicve.comediens.forEach((com:Comedien)=>{
      if (event.key.toLowerCase() == com.key.toLowerCase()){
        console.log(event)
        if (!com.talking){
          com.startTimer();
        } else {
          com.pauseTimer();
        }
      }
    })
  }
  constructor(public comServicve: ComsService) {
  }

  public nbCols(nb:number):number{
    return Math.ceil(Math.sqrt(nb));
  }

  toInt(vari : string): number {
    return parseInt(vari)
  }


}
