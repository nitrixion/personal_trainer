import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { User, Role } from '../../model';
import { UserServiceMock } from './user.service.mock';

describe('UserService', () => {
  const mockUser: User = new User();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: UserService, useClass: UserServiceMock}]
    });
    mockUser.id = "uid-123";
    mockUser.username = "uname";
    mockUser.role = Role.trainer;
    mockUser.userIds = ["id1", "id2"];
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  // abstract login(username:string, password:string) : Promise<User>;
  it('should get a user on login', inject([UserService], (service: UserService) => {
    service.login("uname","password").then((user) => {
      expect(user).toBeTruthy();
      expect(user.username).toBe(mockUser.username);
    });
  }));
  //   abstract logout();
  it('should not throw on logout', inject([UserService], (service: UserService) => {
    service.logout();
    expect(true).toBeTruthy();
  }));
  //   abstract me() : Promise<User>;
  it('should get a user on me()', inject([UserService], (service: UserService) => {
    service.me().then((user) => {
      expect(user).toBeTruthy();
      expect(user.username).toBe(mockUser.username);
    });
  }));
  //   abstract getClients() : Promise<User[]>;
  it('should get atleast 1 user on getClients', inject([UserService], (service: UserService) => {
    service.getClients().then((users) => {
      expect(users.length).toBeGreaterThan(0);
    });
  }));
  //   abstract getUserById(id) : Observable<{}>;
  it('should get 1 user on getUserById', inject([UserService], (service: UserService) => {
    service.getUserById(mockUser.id).subscribe((user:User) => {
      expect(user.id).toEqual(mockUser.id);
    });
  }));
  //   abstract getUserByRole(role: Role) : Observable<{}[]>;
  it('should get at least 1 user on getUserByRole', inject([UserService], (service: UserService) => {
    service.getUserByRole(Role.trainer).subscribe((users:User[]) => {
      expect(users.length).toBeGreaterThan(0);
      expect(users[0].role).toEqual(Role.trainer);
    });
  }));
  //   abstract assignUser(clientUser);
  it('should not throw on logout', inject([UserService], (service: UserService) => {
    service.assignUser(mockUser);
    expect(true).toBeTruthy();
  }));
});
