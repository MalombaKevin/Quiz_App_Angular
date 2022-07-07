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
    private gen:GeneralService 
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
    this.auths.log(body).subscribe((res)=>{
      console.log(res)
    })
    
  }

}
