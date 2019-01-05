import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAddComponent } from './parameter-add.component';

describe('ParameterAddComponent', () => {
  let component: ParameterAddComponent;
  let fixture: ComponentFixture<ParameterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
