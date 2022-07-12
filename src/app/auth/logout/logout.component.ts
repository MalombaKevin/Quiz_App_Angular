import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private gen:GeneralService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signout(){
    this.gen.delToken()
    this.router.navigate(['login'])
    
  }

}
