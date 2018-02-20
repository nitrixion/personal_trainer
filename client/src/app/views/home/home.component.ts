import { Component, OnInit } from '@angular/core';
import { UserService, WorkoutService } from '../../services';
import { Router } from '@angular/router';
import { User, Role } from '../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private me: any;//User = new User();
  // helpers
  private trainer = Role.trainer;
  private trainee = Role.trainee;
  
  constructor(private userService: UserService,
    private workoutService: WorkoutService,
    private router: Router) { }

  ngOnInit() {
    this.userService.me().then((user) => {
      if(user && user.id) {
        this.me = user;
        console.log(this.me);
      }
      else {
        this.router.navigateByUrl('/');
      }
    });
  }

  navigateTo(route) {
    this.router.navigateByUrl(route);
  }

  init() {
    this.workoutService.init();
  }

}
