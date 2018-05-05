import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyElementComponent } from './my-element.component';

describe('MyElementComponent', () => {
  let component: MyElementComponent;
  let fixture: ComponentFixture<MyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
