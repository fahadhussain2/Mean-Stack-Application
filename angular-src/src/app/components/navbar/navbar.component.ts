import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

    constructor(private authService: AuthService, private flashMessages: FlashMessagesService, private route: Router) { }


  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.flashMessages.show('you are logged out', {cssClass: 'alert-danger', timeout: 3000});
    this.route.navigate(['/login']);
    return false;
  }

}
