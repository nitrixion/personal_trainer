import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../../services/program/program.service';
import { Program } from '../../../model';
import { ProgramBaseComponent } from '../program-base/program-base.component';
import { WorkoutService } from '../../../services';

@Component({
  selector: 'program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent extends ProgramBaseComponent {
  constructor(protected route: ActivatedRoute,
              protected programService: ProgramService,
              protected workoutService: WorkoutService) { 
                super(route, programService, workoutService) 
              }

  ngOnInit() {
    super.ngOnInit();
  }

  onRefresh() {
    console.log(this.program);
  }

}
