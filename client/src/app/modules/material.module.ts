import { NgModule } from '@angular/core';
import {
  MatSelectModule, MatOptionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule,
  MatChipsModule, MatIconModule, MatAutocompleteModule, MatCheckboxModule,
  MatListModule, MatStepperModule, MatRadioModule, MatSnackBarModule, MatGridListModule, MatCardModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule
  ],
})
export class MaterialModule { }
