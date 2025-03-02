import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-binding-tut',
  imports: [],
  templateUrl: './ang-binding-tut.component.html',
  styleUrl: './ang-binding-tut.component.css'
})

export class AngBindingTutComponent {
  OneWay = "One Way Data Binding";
  TextInterpolation1 = "Test Interpolation";
  TI1_Ex : string = "John";
  x :number = 10;
  y:number =20;

}
