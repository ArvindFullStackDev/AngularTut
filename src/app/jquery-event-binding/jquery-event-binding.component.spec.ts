import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryEventBindingComponent } from './jquery-event-binding.component';

describe('JqueryEventBindingComponent', () => {
  let component: JqueryEventBindingComponent;
  let fixture: ComponentFixture<JqueryEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JqueryEventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
