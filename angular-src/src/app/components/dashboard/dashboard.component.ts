import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;
  tickets:Ticket[];
  problem:string;
  description:string;
  priority:string;
  now:Date=new Date();
  currdate=this.now.toString().substring(0,21);
  spin=true;

  constructor(private authService:AuthService,
    private router:Router,
    private flashmessage:FlashMessagesService) { }

  ngOnInit() {

    this.flashmessage.show('Choose your section to solve',{
      cssClass:'alert-info',
      timeout:3000
    });

    this.authService.getProfile().subscribe(profile => {
      this.spin=false;
      this.user=profile.user;
      console.log(this.user);
      this.authService.getTicket("users/ticket/"+this.user.email).subscribe(tkt => {
        this.tickets=tkt;
        console.log(this.tickets);
      },
      err =>{
        console.log(err);
        return false;
      });
    },
    err =>{
      console.log(err);
      return false;
    });

  }

  low() {
    this.priority='panel-default'
  }

  high() {
    this.priority='panel-danger';
  }

  onSubmit() {
    const ticket= {
      email:this.user.email,
      name:this.user.name,
      problem:this.problem,
      description:this.description,
      contact:this.user.contact,
      priority:this.priority,
      date:this.currdate
    }
    console.log(ticket);
    this.authService.postTicket(ticket).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.flashmessage.show('Your ticket has been posted successfully',{
          cssClass:'alert-success',
          timeout:3000
        });
      }
    });

    this.authService.getTicket("users/ticket/"+this.user.email).subscribe(tkt => {
      this.tickets=tkt;
      console.log(this.tickets);
    },
    err =>{
      console.log(err);
      return false;
    });
  }

  deleteTicket(pro:string) {
    this.authService.deleteTicket("users/ticket/"+this.user.email+"/"+pro).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.flashmessage.show('Your ticket has been deleted successfully',{
          cssClass:'alert-success',
          timeout:3000
        });
      }
    });
    this.authService.getTicket("users/ticket/"+this.user.email).subscribe(tkt => {
      this.tickets=tkt;
      console.log(this.tickets);
    },
    err =>{
      console.log(err);
      return false;
    });
  }
}

interface User {
  name:string,
  contact:string,
  type:string,
  email:string,
  password:string,
}


interface Ticket {
  name:string,
  email:string,
  contact:string,
  problem:string,
  description:string,
  priority:string,
  date:string
} 