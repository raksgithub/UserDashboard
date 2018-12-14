import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Users } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  users: Users[] = this.usersService.getUsers();

  OnAddNewLicense() {
    console.log('License will be added');
  }

}
