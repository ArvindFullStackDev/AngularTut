import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  value : number =0;
  
  IncrementService() {
    this.value = this.value+1;
  }

  DecrementService(){    
    this.value = this.value-1;
    if(this.value < 0){
      this.value=0;
    }
  }

  ResetService(){
    this.value=0;
  }

  CommonService(parmValue:string){
    if(parmValue.toLowerCase() == "minus"){
      this.value = this.value-1;
    if(this.value < 0){
      this.value=0;
    }
    }
    else if(parmValue.toLowerCase() == "plus"){
      this.value = this.value+1;
    }
    else{
      this.value=0;
    }
  }

}
