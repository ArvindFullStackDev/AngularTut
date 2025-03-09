import { Component } from '@angular/core';

@Component({
  selector: 'AppJqueryEventBinding',
  imports: [],
  templateUrl: './jquery-event-binding.component.html',
  styleUrl: './jquery-event-binding.component.css'
})
export class JqueryEventBindingComponent {
  JQClickEvent : string = "Angular Click Event";
  EventValue: string = "";
  ShowName: string = "";

  agClickEventService() {
    alert("Button has Click");
  }

  getValue(event: Event) {
    const inputElement = (event.target as HTMLInputElement).value;   
    this.EventValue = inputElement;
  }

  showName() {
    this.ShowName = this.EventValue;
    alert(this.ShowName);
  }
  sendEventValue(event: Event) {
    // Get the value from the textbox
    const inputElement = (event.target as HTMLElement).previousElementSibling as HTMLInputElement;
    const textboxValue = inputElement.value;
   
    console.log('Textbox value:', textboxValue);
    alert(textboxValue);
    // Add your logic to handle the value (e.g., send it to an API)
  }

  sendValue(value: string) {    
    alert(value);
    // Add your logic to handle the value (e.g., send it to an API)
  }
}
