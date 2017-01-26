/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserBadgeComponent } from './user-badge.component';

describe('UserBadgeComponent', () => {
  let component: UserBadgeComponent;
  let fixture: ComponentFixture<UserBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
