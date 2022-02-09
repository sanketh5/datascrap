import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticateService} from '../../../home/services/authenticate.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticateService,private router: Router,) { }

  ngOnInit(): void {
  }

  authenticate(user:string, pass:string){
    this.auth.auth(user,pass).subscribe((data)=>{
      localStorage.setItem('email', user);
      this.router.navigateByUrl('/home');
    },(error=>{
      alert("User not found")
    }))
  }

}
