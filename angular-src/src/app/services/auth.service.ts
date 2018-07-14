import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  users:Users;
  authtoken : any;
  user:any;
  test=false;
  evaluate=false;
  constructor(private http:Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('register...');
    return this.http.post('users/register',user,{headers:headers})
    .map(res => res.json()); 
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('authenticate...');
    return this.http.post('users/authenticate',user,{headers:headers})
    .map(res => res.json()); 
  }

  confirmUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('confirmation...');
    return this.http.post('users/confirmation',user,{headers:headers})
    .map(res => res.json()); 
  }

  resend(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('resending...');
    return this.http.post('users/resend',user,{headers:headers})
    .map(res => res.json()); 
  }

  getUser(link) {
    console.log('getting user from:'+link);
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    console.log('serviceUser:'+this.user);
    return this.http.get('users/profile',{headers:headers})
    .map(res => res.json());   
  }

  updateProfile(link,profile) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,profile,{headers:headers})
    .map(res => res.json()); 
  }

  //From here
  setTest() {
    this.test=true;
  }

  isTest() {
    return this.test;
  }

  finishTest() {
    this.test=false;
  }

  setEvaluate() {
    this.evaluate=true;
  }

  isEvaluate() {
    return this.evaluate;
  }

  finishEvaluate() {
    this.evaluate=false;
  }

  getLogic(link) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  getAptitude(link) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  getTaptitude(link) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  //Posting score details
  postScore(score) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('result/score',score,{headers:headers})
    .map(res => res.json()); 
  }

  updateScore(link,score) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,score,{headers:headers})
    .map(res => res.json()); 
  }

  //Getting score details
  getScore(link) {
    console.log('Getting scores fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  postCompany(company) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('home/company',company,{headers:headers})
    .map(res => res.json()); 
  }

  //Getting score details
  getCompany(link) {
    console.log('Getting companies fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }


  //Posting resume details
  postResume(resume) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('result/resume',resume,{headers:headers})
    .map(res => res.json()); 
  }

  //Getting score details
  getResume(link) {
    console.log('Getting resume fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  //Posting resume details
  updateResume(link,resume) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,resume,{headers:headers})
    .map(res => res.json()); 
  }
//end here
  storeUserData(token,user) {
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authtoken=token;
    this.user=user;
    this.getProfile().subscribe(profile => {
      this.users=profile.user;
    },
    err =>{
      console.log(err);
      return false;
    });
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authtoken=token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authtoken=null;
    this.user=null;
    localStorage.clear();
  }

  postTicket(quest) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/ticket',quest,{headers:headers})
    .map(res => res.json());
  }

  getTicket(link) {
    console.log('Getting tickets fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  updateTicket(link,ticket) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,ticket,{headers:headers})
    .map(res => res.json()); 
  }

  deleteTicket(link) {
    console.log('deleting tickets fron authService'+link);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete(link,{headers:headers})
    .map(res => res.json());   
  }

  //start again

  postTest(quest) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/ticket',quest,{headers:headers})
    .map(res => res.json());
  }

  getTest(link) {
    console.log('Getting tickets fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }


  deleteTest(link) {
    console.log('deleting tickets fron authService'+link);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete(link,{headers:headers})
    .map(res => res.json());   
  }

  postTester(quest) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('dashboard/tester',quest,{headers:headers})
    .map(res => res.json());
  }

  getTester(link) {
    console.log('Getting tester fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  updateTester(link,resume) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,resume,{headers:headers})
    .map(res => res.json()); 
  }

  postReport(link) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('dashboard/report',link,{headers:headers})
    .map(res => res.json());
  }

  getReport(link) {
    console.log('Getting report fron authService'+link);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get(link,{headers:headers})
    .map(res => res.json());   
  }

  updateReport(link,report) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,report,{headers:headers})
    .map(res => res.json()); 
  }

  deleteReport(link) {
    console.log('deleting report fron authService'+link);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete(link,{headers:headers})
    .map(res => res.json());   
  }

  getFeedback() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/feedback',{headers:headers})
    .map(res => res.json());   
  }

  postFeedback(feed) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/feedback',feed,{headers:headers})
    .map(res => res.json()); 
  }

  updateFeedback(link,feed) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put(link,feed,{headers:headers})
    .map(res => res.json()); 
  }

  isStudent() {
      if(this.users && this.users.type.endsWith('student')) {
          return true;
      }
      else {
        return false;
      }
  }
//end here

  isAdmin() {
    if(this.users && this.users.name.endsWith('bharath123')) {
        return true;
    }
    else {
      return false;
    }
}
}

interface Users {
name:string,
email:string,
type:string,
username:string,
password:string
}
