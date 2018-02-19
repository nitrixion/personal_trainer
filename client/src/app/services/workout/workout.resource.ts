import { Injectable } from '@angular/core';
import { Workout, Exercise, Movement, RepType, WeightType } from '../../model';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user/user.service';

@Injectable()
export class WorkoutResource {

    private workouts: Workout[] = [];
    private exercises: Exercise[] = [];
    private movements: Movement[] = [];

    constructor(private db: AngularFireDatabase,
                private userService: UserService) { 
        this.userService.me().subscribe((user) => {
            this.populateWorkouts(user);
        })
        
    }

    public getWorkouts() {
        return this.workouts;
    }
    public getExercises() {
        return this.exercises;
    }

    public getMovements() {
        return this.movements;
    }

    populateWorkouts(user) {
        var workout = new Workout();
        workout.id = this.generateId();
        workout.name = "Monday";
        workout.exerciseIds = [];
        workout.exerciseIds.push(this.squat().id);
        workout.exerciseIds.push(this.legPress().id);
        workout.exerciseIds.push(this.lunges().id);
        workout.exerciseIds.push(this.legCurl().id);
        workout.exerciseIds.push(this.plank().id);
        workout.owner = user.uid;
        workout.isPublic = true;
        this.workouts.push(workout);

        workout = new Workout();
        workout.id = this.generateId();
        workout.name = "Tuesday";
        workout.exerciseIds = [];
        workout.exerciseIds.push(this.benchPress().id);
        workout.exerciseIds.push(this.benchDBInclinePress().id);
        workout.exerciseIds.push(this.press().id);
        workout.exerciseIds.push(this.plank().id);
        workout.owner = user.uid;
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
        exe.movements.push(move.name);
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
        exe.weightType = WeightType.RM;
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

    plank() {
        var exe = this.makeExercise("Plank");
        exe.reps = 60;
        exe.repType = RepType.Seconds;
        exe.sets = 5;
        return exe;
    }

    generateId() {
        //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        return this.db.createPushId();
    }
}
