import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  email:string;
  constructor(
    private flashMessage:FlashMessagesService,
    private authService:AuthService, 
    private route:ActivatedRoute) { }

ngOnInit() {
this.email=this.route.snapshot.paramMap.get('email');
const user= {
  email:this.email
}

    this.authService.resend(user).subscribe(data => {
      console.log('resending..');
      if(data.success) {
        console.log('sent..');
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
      }
      else {
        console.log('not sent..');
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
      }
    });
  }


}
