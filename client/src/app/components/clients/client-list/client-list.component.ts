import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { User, Role } from '../../../model';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public clients: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.clients = [];
    this.userService.getUserByRole(Role.trainee).subscribe((clients) => {
      for(let client of clients){
        this.clients.push(Object.assign(new User(), client));
      }
      
    });
  }

  assign(client) {
    this.userService.assignUser(client);
  }
}
