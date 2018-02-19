import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
;
@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private _fireAuth: AngularFireAuth, private router: Router) {
    this.user = this._fireAuth.authState;
  }

}
