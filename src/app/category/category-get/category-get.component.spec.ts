import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGetComponent } from './category-get.component';

describe('CategoryGetComponent', () => {
  let component: CategoryGetComponent;
  let fixture: ComponentFixture<CategoryGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
