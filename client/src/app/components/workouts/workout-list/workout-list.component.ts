import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Role, User, Workout } from '../../../model';
import { WorkoutService } from '../../../services/workout';
import { Router } from '@angular/router';

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: Workout[];
  public newWorkout: Workout;
  @Output() workoutAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor(private workoutService: WorkoutService,
              private router: Router) { }

  ngOnInit() {
  }

  showDetail(workoutId) {
    this.router.navigateByUrl(`workouts/${workoutId}`);
  }

  initWorkouts() {
    this.workoutService.init();
  }

  saveNewWorkout(workoutId) {
    this.newWorkout = undefined;
    // this.workoutService.save(this.newWorkout).then((id) => {
    //   this.workoutAdded.emit(id);
    // });
    this.workoutAdded.emit(workoutId);
    
    // if(!this.program.workoutIds) { this.program.workoutIds = []; }
    // this.program.workoutIds.push(workoutId);
    // this.programService.update(this.program);
    console.log(workoutId);
  }

  addNew() {
    this.newWorkout = new Workout();
  }

}
