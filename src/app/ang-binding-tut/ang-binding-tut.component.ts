import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-ang-binding-tut',
  imports: [FormsModule],
  templateUrl: './ang-binding-tut.component.html',
  styleUrl: './ang-binding-tut.component.css'
})

export class AngBindingTutComponent {
  OneWay = "One Way Data Binding";
  TextInterpolation1 = "Test Interpolation";
  TI1_Ex : string = "John";
  x :number = 10;
  y:number =20;


  EventBinding = "Event Binding";
  EB1_Ex : string = "";

  myEventBindingAction() {
    // do some process
    this.EB1_Ex = "On Click Event Work";
  }

  PropertyBinding = "Property Binding";
  PB1_Ex: string = "Property Binding Example";


  AttributeBinding = "Attribute Binding";
  AB1_Ex: string = "Attribute binding Example";


  ///////////////////////////////////////////////////////////////////
  TwoWay = "Two Way Data Binding";
  TW_Ex1: string = "";





}
