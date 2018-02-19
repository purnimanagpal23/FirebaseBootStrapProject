import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-firebase-courses',
  templateUrl: './firebase-courses.component.html',
  styleUrls: ['./firebase-courses.component.css']
})
export class FirebaseCoursesComponent implements OnInit {
  courseObservable$: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.courseObservable$ = this.getCourses('/courses');
  }

  getCourses(pathToDB: string): Observable<any> {
    return this.db.list(pathToDB).valueChanges();
  }

}

export interface CourseDescription {
  description: string;
  title: string;
  url: string;
}
