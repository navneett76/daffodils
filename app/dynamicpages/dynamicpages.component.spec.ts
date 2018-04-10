import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicpagesComponent } from './dynamicpages.component'; 


describe('DynamicpagesComponent', () => {
  let component: DynamicpagesComponent;
  let fixture: ComponentFixture<DynamicpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

