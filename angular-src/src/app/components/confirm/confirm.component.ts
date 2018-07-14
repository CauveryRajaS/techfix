import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  token:string;
  password:string;
  retypePassword:string;
  success:boolean;
  failure:boolean;
  failureMsg='';

  constructor(
              private flashMessage:FlashMessagesService,
              private authService:AuthService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    const user= {
      token:this.token
    }
    this.authService.confirmUser(user).subscribe(data => {
      console.log('confirming..');
      if(data.success) {
        console.log('confirmed..');
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
        this.success=true;
        this.failure=false;
      }
      else {
        console.log('not confirmed..');
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        this.success=false;
        this.failure=true;
        this.failureMsg=data.msg;
        //this.router.navigate(['/register']);
      }
    });
  }

}
