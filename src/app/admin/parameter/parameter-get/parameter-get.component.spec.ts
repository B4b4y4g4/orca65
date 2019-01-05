import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterGetComponent } from './parameter-get.component';

describe('ParameterGetComponent', () => {
  let component: ParameterGetComponent;
  let fixture: ComponentFixture<ParameterGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
