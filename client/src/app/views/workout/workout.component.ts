import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../services';
import { Workout, Exercise } from '../../model';
import { ExerciseService } from '../../services/exercise/exercise.service';

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
        me.exercises.push(exercise);
        console.log(me.exercises);
      });
    });
  }

  getExerciseName(exercise: Exercise) {
    return exercise.movements.join(" SS ");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
