/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyhutsComponent } from './myhuts.component';

describe('MyhutsComponent', () => {
  let component: MyhutsComponent;
  let fixture: ComponentFixture<MyhutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
