import { Injectable } from '@angular/core';
import { Workout, Exercise, Movement, RepType, WeightType } from '../../model';

@Injectable()
export class WorkoutResource {

    private workouts: Workout[] = [];
    private exercises: Exercise[] = [];
    private movements: Movement[] = [];

    constructor() { 
        this.populateWorkouts();
    }

    public getWorkouts() {
        return this.workouts;
    }

    populateWorkouts() {
        var workout = new Workout();
        workout.id = this.generateId();
        workout.name = "Monday";
        workout.exercises = [];
        workout.exercises.push(this.squat());
        workout.exercises.push(this.legPress());
        workout.exercises.push(this.lunges());
        workout.exercises.push(this.legCurl());
        workout.owner = undefined;
        workout.isPublic = true;
        this.workouts.push(workout);

        workout = new Workout();
        workout.id = this.generateId();
        workout.name = "Tuesday";
        workout.exercises = [];
        workout.exercises.push(this.benchPress());
        workout.exercises.push(this.benchDBInclinePress());
        workout.exercises.push(this.press());
        workout.owner = undefined;
        workout.isPublic = true;
        this.workouts.push(workout);
    }

    makeExercise(name) {
        var exe = new Exercise();
        this.exercises.push(exe);
        exe.id = this.generateId();

        var move = new Movement();
        this.movements.push(move);
        move.id = this.generateId();
        move.name = name;
        exe.movements = [];
        exe.movements.push(move);
        exe.restSeconds = 0;
        exe.repType = RepType.Reps;
        exe.weightType = WeightType.RM;
        return exe;
    }

    squat() {
        var exe = this.makeExercise("Squat");
        exe.reps = 5;
        exe.repType = RepType.Reps;
        exe.sets = 6;
        exe.weight = 80;
        exe.weightType = WeightType.RM;
        return exe;
    }

    legPress() {
        var exe = this.makeExercise("Leg Press");
        exe.reps = 8;
        exe.repType = RepType.Reps;
        exe.sets = 3;
        return exe;
    }

    lunges() {
        var exe = this.makeExercise("Lunges");
        exe.reps = 8;
        exe.repType = RepType.Reps;
        exe.sets = 3;
        exe.notes = "forward one way, backward to start"
        return exe;
    }

    legCurl() {
        var exe = this.makeExercise("Leg Curls");
        exe.reps = 8;
        exe.repType = RepType.Reps;
        exe.sets = 3;
        exe.weightType = WeightType.Heavy;
        return exe;
    }

    benchPress() {
        var exe = this.makeExercise("Bench Press");
        exe.reps = 5;
        exe.sets = 6;
        exe.weight = 80;
        return exe;
    }

    benchDBInclinePress() {
        var exe = this.makeExercise("Incline Dumbell Press");
        exe.reps = 8;
        exe.repsMin = 6;
        exe.sets = 6;
        return exe;
    }

    press() {
        var exe = this.makeExercise("Press");
        exe.reps = 3;
        exe.repType = RepType.Reps;
        exe.sets = 5;
        exe.weight = 75;
        exe.weightType = WeightType.lbs;
        return exe;
    }

    generateId() {
        //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
