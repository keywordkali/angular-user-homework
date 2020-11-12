import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user.class';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
tableStyle: string = "table table-sm";
users: user [] = [];

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {console.log(res);
        this.users = res as user[];
       },
       err => { console.error(err);}
     );
      }
  


}
