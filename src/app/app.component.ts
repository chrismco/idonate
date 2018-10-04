import { Component } from '@angular/core';
import {Router} from '@angular/router'

import { User } from './_models';
import { UserService } from './_services';


// require('../../node_modules/bootstrap/js/');
// require('../styles.css');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iDonate test chris';
  router: string;
  currentUser: User;

  constructor(private _router: Router, private userService: UserService){
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       console.log(this)
          this.router = _router.url; 

          
    }
    

    
}
