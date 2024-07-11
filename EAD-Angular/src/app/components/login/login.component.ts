import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private service: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  user: any = {
    'username': '',
    'password': ''
  }
  
  isLoginError(){
    return this.service.loginError;
  }


  login(form: any) {
    console.log(form.value)
    this.service.login(form.value)
  }

}
