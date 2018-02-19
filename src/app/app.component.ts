import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase} from 'angularfire2/database';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  course = {
    heading: '',
    title: '',
    description: '',
    url: ''
  };

  constructor(private db: AngularFireDatabase) {

  }

  addCourseInfo() {
    console.log('Btn Clicked');
    this.db.database.ref('courses/' + this.course.heading).set({
      description:this.course.description,
      title: this.course.title,
      url: this.course.url
    });
    // $('#myModal').close();
  }

  openModal() {
    this.course = {
      heading: '',
      title: '',
      description: '',
      url: ''
    };
  }
}
