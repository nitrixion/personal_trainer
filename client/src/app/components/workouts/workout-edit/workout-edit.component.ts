import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from '../../../model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WorkoutService, ProgramService } from '../../../services';

@Component({
  selector: 'workout-edit',
  templateUrl: './workout-edit.component.html',
  styleUrls: ['./workout-edit.component.css']
})
export class WorkoutEditComponent implements OnInit {
  @Input() workout: Workout;
  @Input() isNew: boolean;
  @Output() saved: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private workoutService: WorkoutService,
              private programService: ProgramService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [this.workout.name, Validators.required],
      notes: [this.workout.notes],
      isPublic: [this.workout.isPublic],
    });
  }

  save() {
    this.workout.name = this.formGroup.controls.name.value;
    this.workout.notes = this.formGroup.controls.notes.value;
    this.workout.isPublic = this.formGroup.controls.isPublic.value;
    if(this.isNew){
      this.workoutService.save(this.workout).then((workoutId:string) => {
        this.saved.emit(workoutId);  
      });
    }
    else {
      this.workoutService.update(this.workout);
    }
  }
}
