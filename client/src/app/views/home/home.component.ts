import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { Router } from '@angular/router';
import { User, Role } from '../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private me: User = new User();
  // helpers
  private trainer = Role.trainer;
  private trainee = Role.trainee;
  
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.me().subscribe((user) => {
      if(user) {
        this.me = user;
      }
      else {
        this.router.navigateByUrl('/');
      }
    });
  }

}
