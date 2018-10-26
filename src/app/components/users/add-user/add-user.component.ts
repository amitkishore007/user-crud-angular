import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

  isSubmit:boolean = false;
  serverError: string;
  showpinner: boolean = false;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.createUserForm.valid) {
      this.showpinner = true;
      // perform save operation
      this.user.name = this.createUserForm.value.name;
      this.user.email = this.createUserForm.value.email;
      this.user.phone = this.createUserForm.value.phone;
      this.userService.createUser(this.user).subscribe((data:any)=>{
        this.showpinner = false;
        this.createUserForm.reset();
        this.router.navigate(['/']);
      },
        (errors: HttpErrorResponse) => {
          this.showpinner = false;
          if (errors.status==0) {
            // connection error
            this.serverError = 'Could not connect to server';

          } else if(errors.status==422) {
            const properties = errors.error.errors;
            if (properties.hasOwnProperty('name')) {
              this.serverError = properties.name.message;
            }
            if (properties.hasOwnProperty('phone')) {
              this.serverError = properties.phone.message;
            }
            if (properties.hasOwnProperty('email')) {
              this.serverError = properties.email.message;
            }
          }
      }
    );
    }
  }

}
