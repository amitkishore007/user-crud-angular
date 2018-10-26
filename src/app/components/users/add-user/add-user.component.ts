import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('createUserForm') createUserForm: NgForm;
  
  user: User = {
    name: '',
    email: '',
    phone: ''
  };

  showpinner: boolean = false;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      this.showpinner = true;
      // perform save operation
      this.user.name = this.createUserForm.value.name;
      this.user.email = this.createUserForm.value.email;
      this.user.phone = this.createUserForm.value.phone;
      this.userService.createUser(this.user).subscribe((data:any)=>{
        // console.log(data);
        this.showpinner = false;
        this.createUserForm.reset();
        this.router.navigate(['/']);
      });
    }
    console.log(this.createUserForm);
  }

}
