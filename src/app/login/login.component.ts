import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: {email?: string, password?: string} = {};
  responseData:any;
  constructor( private loginService : LoginService,
               private router : Router
  ) { }

  ngOnInit() {
  }

  onLogin(){
    this.loginService.login(this.login).subscribe(data => {this.responseData =data
        if(this.responseData.success){
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }




}
