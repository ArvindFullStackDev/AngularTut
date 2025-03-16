import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AngBindingTutComponent } from './ang-binding-tut/ang-binding-tut.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { JqueryEventBindingComponent } from './jquery-event-binding/jquery-event-binding.component';

@Component({
  selector: 'app-root',
  imports: [//LoginComponent,
   // AngBindingTutComponent,
    // CounterAppComponent
   JqueryEventBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTut';
}
