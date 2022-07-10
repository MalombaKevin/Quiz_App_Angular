import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralService } from 'app/services/general.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:any
  username = new FormControl('');
  password = new FormControl('');

  constructor(
    private auths:AuthService,
    private gen:GeneralService,
    private router:Router 
  ) {
    
   }

  ngOnInit(): void {
  }

  logprocess(){
    const body = {
      username: this.username.value,
      password: this.password.value
    };
    console.log(body)
    this.auths.log(body).subscribe((res:any)=>{
      this.gen.setToken(res.token)
      console.log(res.token)
      this.router.navigate([''])
     
    })
    
  }

  snr(){
    this.router.navigate(['register'])

  }

  lgr(){
    this.router.navigate(['login'])


  }

}
