import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Program, Workout } from '../../../model';
import { ProgramService, WorkoutService } from '../../../services';

@Component({
  selector: 'app-program-base',
  templateUrl: './program-base.component.html',
  styleUrls: ['./program-base.component.css']
})
export abstract class ProgramBaseComponent implements OnInit {
  protected programId: string;
  public program: Program;
  public workouts: Workout[];
  constructor(protected route: ActivatedRoute,
              protected programService: ProgramService,
              protected workoutService: WorkoutService) { }

  ngOnInit() {
    this.workouts = [];
    this.route.params.subscribe((params) => {
      this.programId = params["programId"];
      this.refresh();
    });
  }

  refresh() {
    if(!this.programId) {
      this.onRefresh();
      return;
    }
    this.programService.getProgramById(this.programId).subscribe((program) => {
      if(program){
        this.program = Object.assign(new Program, program);
        this.program.start = new Date(this.program.startString);
        this.program.end = new Date(this.program.endString);
        if(this.program.workoutIds) {
          this.program.workoutIds.forEach((id) => {
            this.workoutService.getWorkoutById(id).subscribe((workout) => {
              this.addWorkout(workout);
            })
          });
        }
      }
      this.onRefresh();
    });
  }

  addWorkout(workoutObj){
    let query = this.workouts.filter((w) => w.id == workoutObj.id);
    //let workout;
    if(query.length > 0){ 
      //workout = query[0];
      query[0] = Object.assign(new Workout(), workoutObj);
    }
    else {
      this.workouts.push(Object.assign(new Workout(), workoutObj));
    }
    
  }

  abstract onRefresh();

}
