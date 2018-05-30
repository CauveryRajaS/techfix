import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  dim='show';
  spin:boolean=false;
  forgotFlag='none';
  passFlag=false;
  user:User;
  answer:string;
  wrong=false;

  constructor(
  private authService:AuthService,
  private router:Router,
  private flashmessage:FlashMessagesService) { }

  ngOnInit() {
  }

  forgot() {
    console.log(this.email);
    if(this.email!==undefined) {
      this.wrong=false;
      console.log('forgot...');
      this.authService.getUser("users/user/"+this.email).subscribe(user => {
        this.user=user;
        console.log(this.user);
        if(this.user===null) {
          this.flashmessage.show('user not found', {
            cssClass:'alert-danger',
            timeout:5000 });
        }
        else {
          this.forgotFlag='block';
        }
      });
    }
    else {
      this.flashmessage.show('Enter your email to know your password', {
        cssClass:'alert-danger',
        timeout:5000 });
    }
  }

  view() {
    console.log(this.answer.toLowerCase());
    console.log(this.user.answer);
    if(this.answer.toLowerCase()===this.user.answer) {
      this.passFlag=true;
      this.wrong=false;
    }
    else {
      this.wrong=true;
    }
    this.answer=''; 
  }

  onClose() {
    this.forgotFlag='none';
    this.passFlag=false;
  }

  onLoginSubmit() {
    const user={
      email:this.email,
      password:this.password
    }

    this.spin=true;

    this.authService.authenticateUser(user).subscribe(data => {
      this.spin=false;
      if(data.success) {
        this.authService.storeUserData(data.token,data.user);
        this.flashmessage.show('You are now logged in', {
          cssClass:'alert-success',
          timeout:5000 });
        if(user.email.endsWith('bharath@gmail.com')) {
          this.router.navigate(['/report']);
        }
        else {
          this.router.navigate(['/dashboard']);
        }
      }
      else {
        this.flashmessage.show(data.msg, {
          cssClass:'alert-danger',
          timeout:5000 });
        this.router.navigate(['/login']);
      }
    });
  }

}

interface User {
  name:string,
  contact:string,
  email:string,
  password:string,
  copy:string,
  question:string,
  answer:string
}
