import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService, UserService, WorkoutService } from '../../../services';
import { User, Program, Workout } from '../../../model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProgramBaseComponent } from '../../../components/programs/program-base';
import { Subscription } from 'rxjs';

@Component({
  selector: 'program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.css']
})
export class ProgramEditComponent extends ProgramBaseComponent {
  private type: any;
  public edit: boolean = false;
  public test = "TEST";
  public newWorkout: Workout;
  
  formGroup: FormGroup;
  clients: User[];
  today: Date = new Date();
  formChanges: Subscription;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected programService: ProgramService,
              protected workoutService: WorkoutService,
              private userService: UserService,
              private formBuilder: FormBuilder) { 
                super(route, programService, workoutService) 
              }

  ngOnInit() {
    super.ngOnInit();
    this.type = this.route.snapshot.data;
    this.edit = this.type.action === "edit";
    this.buildForm();
  }

  buildForm() {
    if(!this.program) {
      this.program = new Program();
    }
    if(this.formChanges) {
      this.formChanges.unsubscribe();
    }
    this.formGroup = this.formBuilder.group({
      name: [this.program.name, Validators.required],
      start: [this.program.start, Validators.required],
      end: [this.program.end, Validators.required],
      traineeId: [this.program.traineeId, Validators.required],
      notes: [this.program.notes],
    });

    this.formChanges = this.formGroup.valueChanges.subscribe(() => {
      this.updateLocal();
    });
  }

  onRefresh() {
    this.buildForm();
    this.userService.getClients().then((clients) => {
      this.clients = clients;
      console.log(this.clients);
    });
  }

  updateLocal() {
    this.program.name = this.formGroup.controls.name.value;
    this.program.start = this.formGroup.controls.start.value;
    this.program.end = this.formGroup.controls.end.value;
    this.program.traineeId = this.formGroup.controls.traineeId.value;
    this.program.notes = this.formGroup.controls.notes.value;
  }

  save() {
    if(this.formGroup.valid){
      if(this.edit) {
        this.programService.update(this.program);
      }
      else {
        this.programService.save(this.program).then((programId) => {
          this.router.navigateByUrl(`programs/edit/${programId}`);
        });
      }
    }
  }

  saveNewWorkout(workoutId) {
    this.newWorkout = undefined;
    if(!this.program.workoutIds) { this.program.workoutIds = []; }
    this.program.workoutIds.push(workoutId);
    this.programService.update(this.program);
    console.log(workoutId);
  }

}
