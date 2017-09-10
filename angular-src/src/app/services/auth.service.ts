import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {userModel} from '../Models/userModel'

@Injectable()
export class AuthService {

  authToken:any;
  User: any;
  tokenNotExpired: any;

  constructor(private http: Http) {
    this.loggedIn()
  }

  registerUser(user){
    console.log(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    console.log(user)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
    .map(res => res.json());
  }

  storeUserData(token, user){
    // this.setCookie('token', token);
    // this.setCookie('user', JSON.stringify(user))
    console.log(token, user)
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.User = user;
  }

//   setCookie(cname,token) {
//     document.cookie = cname + "=" + token + ";";
// }

//  getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// deleteCookie(){
//   document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }

  loggedIn(){
    // console.log(tokenNotExpired());
    this.tokenNotExpired = tokenNotExpired();
    console.log(true)
    return tokenNotExpired();
    
    // var token = localStorage.getItem('token');

  // console.log(
  //   this.jwtHelper.decodeToken(token),
  //   this.jwtHelper.getTokenExpirationDate(token),
  //   this.jwtHelper.isTokenExpired(token)
  // );
  
  }

  logout(){
    this.authToken = null;
    this.User = null;
    this.tokenNotExpired = false
    localStorage.clear();
    
  }

  getUsername(){
    var user = JSON.parse(localStorage.getItem('user'));
    // console.log(user.fname)
    return user.fname;
  }
  

}
