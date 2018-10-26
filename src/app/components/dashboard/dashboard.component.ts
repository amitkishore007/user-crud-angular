import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:  User[];
  displayedColumns: string[] = ['id','name', 'email', 'phone','action'];
  showpinner: boolean = true;

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
      this.users = data.data;
      this.showpinner = false;
      console.log(this.users);
    });
  }

  private spliceUserData(userId) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index]._id.toString() == userId.toString()) {
        this.users.splice(index, 1);
      }
    }
  }

}
