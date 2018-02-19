import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UserService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formOptions: any;
  public username: string;
  public password: string;
  private error: boolean = false;

  constructor(private userService: UserService,
              private router: Router) { 
    this.formOptions = { 
      username : new FormControl(this.username, [
        Validators.required,
      ]),
      password : new FormControl(this.password, [
        Validators.required,
      ])
    };
  }

  ngOnInit() {
  }

  public login() {
    var username = this.formOptions.username.value;
    var password = this.formOptions.password.value;
    if(username && password) {
      this.error = false;
      this.userService.login(username, password).subscribe((user) => {
        if(user && user["uid"]) {
          this.router.navigateByUrl('home');
        }
        else{
          this.error = true;
        }
      });
    }
  }
}
