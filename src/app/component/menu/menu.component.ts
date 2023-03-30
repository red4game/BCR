import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {ThemePalette} from "@angular/material/core";
import {NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {ComsService} from "../../coms.service";
import {Comedien} from "../../comedien";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  floatLabelControl = new FormControl('auto' as FloatLabelType);




  seconds = true;
  public disabled = false;
  public touchUi = false;
  public colorTheme: ThemePalette = 'primary';







  constructor(private _formBuilder: FormBuilder, public comServicve: ComsService ) {

  }

  ngOnInit(): void {
  }

  toInt(vari : string): Number {
    return parseInt(vari)
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }





}
