import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCoursesComponent } from './firebase-courses.component';

describe('FirebaseCoursesComponent', () => {
  let component: FirebaseCoursesComponent;
  let fixture: ComponentFixture<FirebaseCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
