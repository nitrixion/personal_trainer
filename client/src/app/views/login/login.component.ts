import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UserService } from '../../services';
import { Router } from '@angular/router';
import { User } from '../../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formOptions: any;
  public username: string;
  public password: string;
  private error;//: boolean = false;

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
    this.userService.logout();
  }

  public login() {
    var username = this.formOptions.username.value;
    var password = this.formOptions.password.value;
    this.error = undefined;
    if(username && password) {
      this.error = false;
      this.userService.login(username, password).then((user: User) => {
        if(user && user.id) {
          this.router.navigateByUrl('home');
        }
      })
      .catch((error) => {
        this.error = error;
      });
    }
  }
}
