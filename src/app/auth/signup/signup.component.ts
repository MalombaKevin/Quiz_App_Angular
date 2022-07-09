import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { GeneralService } from 'app/services/general.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signform:any
tok:any
  constructor(
    private auths:AuthService,
    private gen:GeneralService,
    private router:Router
  ) {
  
    
   }

  ngOnInit(): void {

this.signform=new FormGroup({
  'name':new FormControl('',[Validators.required]),
  'username':new FormControl('',[Validators.required]),
  'email':new FormControl('',[Validators.required]),
  'password':new FormControl('',[Validators.required])
})

  }
  signprocess(){
    const form=this.signform.value
    const body={
      'name':this.signform.get('name').value,
      'email':this.signform.get('email').value,
      'username':this.signform.get('username').value,
      'password':this.signform.get('password').value,

    }
    console.log(body)
    this.auths.reg(body).subscribe((res:any)=>{
    this.gen.setToken(res.token)
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
