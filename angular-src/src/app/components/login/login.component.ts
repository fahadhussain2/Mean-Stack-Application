import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userForm: FormGroup;

    constructor(private route:Router, private _formBuilder:FormBuilder, private authService: AuthService,private flashmessages: FlashMessagesService) {
      this.userForm= this._formBuilder.group({ 
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'),Validators.required]],
     password:['',passvalidator]
    })

  }

  ngOnInit() {
  }

  login(){
    this.authService.authenticateUser(this.userForm.value).subscribe(data=>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashmessages.show('you are logged in', {cssClass: 'alert-success', timeout:3000 });
        this.route.navigate(['home']);
      }
      else{
        this.flashmessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000})
      }
    });
    console.log(this.userForm.value)
  }

  firebaseLogin(){
    console.log('firebase')
  }

}

function passvalidator(control: FormControl):{ [s: string] : boolean }{                          // custom validation function for password
   if ( ! control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ )){
     return {invalidPassword: true}
   }
 }