import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:  User[];
  displayedColumns: string[] = ['id','name', 'email', 'phone','action'];
  showpinner: boolean = true;
  noResponse: boolean = false;
  noUser: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUser();
  }

  onDelete(userId: string) {
    this.showpinner = true;
    this.userService.deleteUser(userId).subscribe((response: any)=>{
      this.spliceUserData(userId);
      this.fetchUser();
      this.showpinner = false;
    });
    return false;
  }

  private fetchUser() {
    this.userService.getUser().subscribe((data: any) => {
      if (data.data.length==0) {
        this.noUser = true;
      }
      this.users = data.data;
      this.showpinner = false;
      // console.log(this.users);
    },
    (errors: HttpErrorResponse) => {
      // console.log(errors);
      if(errors.status==0) {
        this.noResponse = true;
        this.showpinner = false;
      }
    }
  );
  }

  private spliceUserData(userId) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index]._id.toString() == userId.toString()) {
        this.users.splice(index, 1);
      }
    }
  }

}
