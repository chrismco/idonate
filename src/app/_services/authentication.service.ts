import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(false);

   get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    constructor(private http: HttpClient,  private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    console.log(user, user.token, this)
                    
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn.next(true);
                   // this.router.navigate(['/home']);
                }

                return user;
            }));
    }

    logout() {
     
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
         this.router.navigate(['/login']);
    }
}