import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  hostUrl='http://quizapm.herokuapp.com';
  headers:any

  constructor(private cookie:CookieService) { 
    this.headers= {'Content-Type': 'application/json'};



  }

  setheaders() {
   const token = this.getToken();

    if (token !== '') {
      this.headers['Authorization']='Token '+token
      
  }
  return new HttpHeaders(this.headers);

    }

    setToken(token: string) {
      this.cookie.set('ATN', token);
    }


    isAuthenticated() {
      const token = this.getToken();
      return token === '' ? false : true;
    }



    getToken() {
      return this.cookie.get('ATN');
    }
  
  }




