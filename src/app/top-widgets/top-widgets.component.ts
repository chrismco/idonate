import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit {
  currentUser: User;
  
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onLogout(){
    this.authService.logout();                     
  }
}
