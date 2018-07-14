import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  resLink='result/resume/';
  name:String;
  contact:String;
  email:String;
  password:String;
  question:String;
  answer:String;
  spin=false;
  now:Date=new Date();
  currdate=this.now.toString().substring(0,21);

  constructor(
    private validateService : ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.resLink+=this.email;
  }

  onRegisterSubmit() {
    this.spin=true;
    console.log(this.name);
    if(this.answer == undefined) {
      const user = {
        name:this.name,
        contact:this.contact,
        email:this.email/*,
        password:this.password,
        copy:this.password,
        question:this.question,
        answer:this.answer*/
      }


      console.log(user);
      
          //Require fields
          if(!this.validateService.validateRegister(user)) {
            this.spin=false;
            this.flashMessage.show('Please fill in all fields',{cssClass:'alert-danger',timeout:3000});
            return false;
          }
      
          //Require valid Email
          if(!this.validateService.validateEmail(user.email)) {
            this.spin=false;
            this.flashMessage.show('Please enter valid email',{cssClass:'alert-danger',timeout:3000});
            return false;
          }    
      
          //Register user
          this.authService.registerUser(user).subscribe(data => {
            console.log('registering...');
            if(data.success) {
              this.flashMessage.show('You are now registered successfully and can log in',{cssClass:'alert-success',timeout:3000});
              this.router.navigate(['/sent/$this.email']);
            }
            else {
              this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
              this.router.navigate(['/register']);
            }
          });
    }
      else  {
        const user = {
          name:this.name,
          contact:this.contact,
          email:this.email/*,
          password:this.password,
          copy:this.password,
          question:this.question,
          answer:this.answer.toLowerCase()*/
        }


      console.log(user);
      
          //Require fields
          if(!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields',{cssClass:'alert-danger',timeout:3000});
            return false;
          }
      
          //Require valid Email
          if(!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter valid email',{cssClass:'alert-danger',timeout:3000});
            return false;
          }    
      
          //Register user
          this.authService.registerUser(user).subscribe(data => {
            console.log('registering..');
            if(data.success) {
              this.flashMessage.show('You are now registered successfully and can log in',{cssClass:'alert-success',timeout:3000});
              this.router.navigate(['/sent/$this.email']);
            }
            else {
              this.flashMessage.show('Log in unsuccessful , please try again',{cssClass:'alert-danger',timeout:3000});
              this.router.navigate(['/register']);
            }
          });
      }

    }

    
}

