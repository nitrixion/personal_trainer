import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService, ExerciseService } from '../../services';
import { Workout, Exercise } from '../../model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  id: string;
  private sub: any;
  workout: Workout;
  exercises: Exercise[];
  constructor(private route: ActivatedRoute,
              private workoutService: WorkoutService,
              private exerciseService: ExerciseService) {
    this.exercises = [];
  }

  ngOnInit() {
    let me = this;
    this.sub = this.route.params.subscribe(params => {
      me.id = params['workoutId'];
      me.workoutService.getWorkoutById(me.id).subscribe((workout: Workout) => {
        me.workout = workout;
        me.getExercises();
      })
    });
  }

  getExercises() {
    let me = this;
    this.workout.exerciseIds.forEach((id) => {
      me.exerciseService.getExerciseById(id).subscribe((exercise: Exercise) => {
        let exe = Object.assign(new Exercise(),exercise);
        me.exercises.push(exe);
      });
    });
  }

  getExerciseName(exercise: Exercise) {
    return exercise.getName();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
