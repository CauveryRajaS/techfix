import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  tickets:Ticket[];

  constructor(private authService:AuthService,
    private flashmessage:FlashMessagesService) { }

  ngOnInit() {
    this.authService.getTicket("users/ticket").subscribe(tkt => {
    this.tickets=tkt;
    console.log(this.tickets);
  },
  err =>{
    console.log(err);
    return false;
  });
  }
 
  deleteTicket(pro:string,email:string) {
    this.authService.deleteTicket("users/ticket/"+email+"/"+pro).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.flashmessage.show('Your ticket has been deleted successfully',{
          cssClass:'alert-success',
          timeout:3000
        });
      }
    });
    this.authService.getTicket("users/ticket").subscribe(tkt => {
      this.tickets=tkt;
      console.log(this.tickets);
    },
    err =>{
      console.log(err);
      return false;
    });
  }

  check(pro:string,email:string) {
    const ticket ={
      priority:'panel-success'
    }
  
    console.log(ticket);

    this.authService.updateTicket("users/ticket/"+email+"/"+pro,ticket).subscribe(data => {
      if(data.success) {
        console.log(data);
      }
    });

    this.authService.getTicket("users/ticket").subscribe(tkt => {
      this.tickets=tkt;
      console.log(this.tickets);
    },
    err =>{
      console.log(err);
      return false;
    });
  }


  uncheck(pro:string,email:string) {
    const ticket ={
      priority:'panel-danger'
    }
  
    console.log(ticket);

    this.authService.updateTicket("users/ticket/"+email+"/"+pro,ticket).subscribe(data => {
      if(data.success) {
        console.log(data);
      }
    });

    this.authService.getTicket("users/ticket").subscribe(tkt => {
      this.tickets=tkt;
      console.log(this.tickets);
    },
    err =>{
      console.log(err);
      return false;
    });
  }
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