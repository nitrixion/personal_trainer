import { TestBed, inject } from '@angular/core/testing';

import { MovementService } from './movement.service';
import { Exercise, Movement } from '../../model';
import { MovementServiceMock } from './movement.service.mock';

describe('MovementService', () => {
  const movement:Movement = new Movement();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: MovementService, useClass: MovementServiceMock}]
    });
    movement.id = "uid-123";
  });

  it('should be created', inject([MovementService], (service: MovementService) => {
    expect(service).toBeTruthy();
  }));

  it('should get at least 1 result from getAll', inject([MovementService], (service: MovementService) => {
    service.getAll().subscribe((movements) => {
      expect(movements.length).toBeGreaterThan(0);
    });
  }));

  it('should get 1 result from getById', inject([MovementService], (service: MovementService) => {
    service.getById("uid-123").subscribe((movement) => {
      expect(movement).toBeTruthy();
    });
  }));

  // NYI
  
  // it('should return the id of the saved exercise on save', inject([MovementService], (service: MovementService) => {
  //   service.save(this.movement).then((id) => {
  //     expect(id).toEqual(this.movement.id);
  //   });
  // }));

  // it('should return the id of the saved exercise on update', inject([MovementService], (service: MovementService) => {
  //   service.save(this.movement).then((id) => {
  //     expect(id).toEqual(this.movement.id);
  //   });
  // }));
});
