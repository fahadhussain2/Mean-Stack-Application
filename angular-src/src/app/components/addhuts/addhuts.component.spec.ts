/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddhutsComponent } from './addhuts.component';

describe('AddhutsComponent', () => {
  let component: AddhutsComponent;
  let fixture: ComponentFixture<AddhutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
