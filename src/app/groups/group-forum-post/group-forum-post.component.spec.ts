import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupForumPostComponent } from './group-forum-post.component';

describe('GroupForumPostComponent', () => {
  let component: GroupForumPostComponent;
  let fixture: ComponentFixture<GroupForumPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupForumPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
