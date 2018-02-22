import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ProgramService } from './program.service';
import { ProgramServiceMock } from './program.service.mock';
import { Program } from '../../model';

describe('ProgramService', () => {
  const program:Program = new Program();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ProgramService, useClass: ProgramServiceMock}]
    });
    program.id = "uid-123";
  });

  it('should be created', inject([ProgramService], (service: ProgramService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([ProgramService], (service: ProgramService) => {
    expect(service).toBeTruthy();
  }));

  it('should get at least 1 result from getAll', inject([ProgramService], (service: ProgramService) => {
    service.getAll().subscribe((programs) => {
      expect(programs.length).toBeGreaterThan(0);
    });
  }));

  it('should get 1 result from getById', inject([ProgramService], (service: ProgramService) => {
    service.getById("uid-123").subscribe((program) => {
      expect(program).toBeTruthy();
    });
  }));

  it('should return the id of the saved workout on save', inject([ProgramService], (service: ProgramService) => {
    service.save(program).then((id) => {
      expect(id).toEqual(program.id);
    });
  }));

  it('should return the id of the saved workout on update', inject([ProgramService], (service: ProgramService) => {
    service.save(program).then((id) => {
      expect(id).toEqual(program.id);
    });
  }));
});
