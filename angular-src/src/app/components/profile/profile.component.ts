import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dim='show';
  spin:boolean=true;
  send:string;
  flag:any;
  callback:Function;
  user:Users;
  email:string='\assets\\uploads\\user\\photo-';
  link='users/upload/user';
  avatar=false;
  image='';
  editFlag='none';
  req=false;
  password:string;
  confirm:string;
  pass=false;
  imgFlag='none';

  constructor(private authService:AuthService,private router:Router,private flashmessage:FlashMessagesService) { }

  ngOnInit() {
    //this.callback=obj=>this.imageService.upload(obj);
    this.authService.getProfile().subscribe(profile => {
      this.spin=false;
      this.user=profile.user;
      this.send=this.user.email;
      console.log(this.user);
    },
    err =>{
      console.log(err);
      return false;
    });
  }

  editor() {
    this.editFlag='block';
  }

  onClose() {
    //this.avatar=false;
    this.editFlag='none';
    //this.imgFlag='none';
  }

  sendUser() {
    this.req=false;
    this.pass=false;
    //this.avatar=false;
    if(this.user.name.length>0 && this.user.contact.length>0 && this.user.question.length>0
       && this.user.answer.length>0 && this.user.password.length>0) {
        if(this.password===this.confirm) {
          const profile ={
            name:this.user.name,
            email:this.user.email,
            password:this.password,
            copy:this.password,
            question:this.user.question,
            answer:this.user.answer
        }
        
        console.log(profile);

        this.authService.updateProfile("users/profile/"+this.user.email,profile).subscribe(data => {
          if(data.success) {
            console.log(data);
            this.flashmessage.show('Your profile info has been updated',{
              cssClass:'alert-info',
              timeout:3000
            }); 
         }
        });
        }
        else {
          this.pass=true;
        }
        
    }
    else {
      this.req=true;
    }
  }
/*
  trigger(img:string) {
    this.image=img;
    console.log(img);
  }

  change() {
    this.imgFlag='block';
    this.avatar=true;
  }

  apply() {
    //this.avatar=false;
    //this.imgFlag='none';
    const pic ={
      link:this.image
  }
  
  this.authService.updateProfile("users/pic/"+this.user.email,pic).subscribe(data => {
    if(data.success) {
        console.log(data);
        this.flashmessage.show('Your profile pic has been updated',{
            cssClass:'alert-info',
            timeout:3000
        });
      }
    });
  }

  fileChangeEvent(event) {
    //this.email=null;
    //this.flag=this.imageService.upload(event,this.link,'photo').unsubscribe();
      this.imageService.upload(event,this.link,'photo').subscribe(result => {
      console.log("profile:",result);
      if(result.success) {
        this.flashmessage.show('Your profile pic has been updated,carry on... ',{
          cssClass:'alert-success',
          timeout:3000
        });
      }
      else {
        this.flashmessage.show('Invalid file type,it should be an image in jpeg format',{
          cssClass:'alert-danger',
          timeout:3000
        });
      }
    },
    err =>{
      console.log(err);
      return false;
    });
    
  }
*/
}
interface Users {
  name:string,
  email:string,
  contact:string,
  password:string,
  question:string,
  answer:string,
  copy:string
}
