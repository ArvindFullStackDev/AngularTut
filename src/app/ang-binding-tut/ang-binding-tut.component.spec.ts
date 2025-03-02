import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngBindingTutComponent } from './ang-binding-tut.component';

describe('AngBindingTutComponent', () => {
  let component: AngBindingTutComponent;
  let fixture: ComponentFixture<AngBindingTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngBindingTutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngBindingTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
