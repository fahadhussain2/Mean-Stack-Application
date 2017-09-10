import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private route:Router, private _formBuilder:FormBuilder, private authService: AuthService, private flashMessage: FlashMessagesService) {

    this.userForm= this._formBuilder.group({ 
     fname:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     lname:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'),Validators.required]],
     passwordfields: this._formBuilder.group ({
        pass:['', passvalidator],
        cpass:['',Validators.compose([Validators.required])],
     }, {validator: matchingPasswords('pass', 'cpass')}
     ),
    })

  }

  ngOnInit() {
  }

  register(){
    this.authService.registerUser(this.userForm.value).subscribe(data=>{
      if(data.success){
        // console.log(data.success);
        this.flashMessage.show('Registration Successfull! You can login now', {cssClass:'alert-success', timeout: 3000});
        setTimeout(()=> {
        this.route.navigate(['/login']);         
        }, 3000);  
      }
      else if(data.msg === 'User already exist'){
        this.flashMessage.show(data.msg + ' please use another email', {cssClass:'alert-danger', timeout: 3000});
        this.route.navigate(['/register']); 
      }
      else{
        this.flashMessage.show('Registration Unsuccessfull', {cssClass:'alert-danger', timeout: 3000});
        this.route.navigate(['/register']);            
    }
    })

    // console.log(this.userForm.value)
  }

}

function passvalidator(control: FormControl):{ [s: string] : boolean }{                          // custom validation function for password
   if ( ! control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ )){
     return {invalidPassword: true}
   }
 }


function matchingPasswords(passwordKey: string, confirmPasswordKey:string) {                // custom validation function for password and confirm password
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {mismatchedPasswords: true}
    }
  }
}