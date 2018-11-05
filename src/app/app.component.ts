import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/auth.service';
// import { componentFactoryName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social';
  topics: AngularFireList<any[]>;
  user = null;
constructor(private auth: AuthService, public db: AngularFireDatabase) { }

ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
      this.topics = this.db.list('/topics');
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  loginWithFacebook () {
    this.auth.loginWithFacebook();
  }

  loginWithGitHub () {
    this.auth.loginWithGithub();
  }



  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}
