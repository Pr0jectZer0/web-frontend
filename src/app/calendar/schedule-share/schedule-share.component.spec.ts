import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleShareComponent } from './schedule-share.component';

describe('ScheduleShareComponent', () => {
  let component: ScheduleShareComponent;
  let fixture: ComponentFixture<ScheduleShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
