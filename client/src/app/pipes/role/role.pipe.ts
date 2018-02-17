import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../../model';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: Role): string {
    switch(value) {
      case Role.trainer:
        return "Trainer";
      case Role.trainee:
        return "Trainee";
      case Role.admin:
        return "Admin";
    }
  }

}
