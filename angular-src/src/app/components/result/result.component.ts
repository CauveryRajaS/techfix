import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  users:User[];
  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.authService.getUser('users/user').subscribe(profiles => {
      this.users=profiles;
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
  email:string,
  password:string
}
