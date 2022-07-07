import { FormGroup,FormControl } from '@angular/forms';
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
    private gen:GeneralService
  ) {
  
    
   }

  ngOnInit(): void {

this.signform=new FormGroup({
  'name':new FormControl(),
  'username':new FormControl(),
  'email':new FormControl(),
  'password':new FormControl()
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
      
    
    
       
    })

  }

}
