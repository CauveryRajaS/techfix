import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {/*
    if(user.name==undefined||user.email==undefined||user.contact==undefined||user.password==undefined
      ||user.question==undefined||user.answer==undefined) {*/
    if(user.name==undefined||user.email==undefined||user.contact==undefined) {
      console.log('inside false');
      return false;
    } 
    else {
      console.log('inside true');
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

}
