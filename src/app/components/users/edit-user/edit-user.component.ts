import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  userId: string;
  showpinner: boolean = false;
  @ViewChild('editUserForm') editUserForm: NgForm;

  constructor(
              private userService: UserService, 
              private route: ActivatedRoute, 
              private router: Router
            ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserDetails(this.userId).subscribe((response:any)=>{
      this.user = response.data;
      this.editUserForm.form.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      });
    });
  }

  onUpdate() {
    if(this.editUserForm.valid) {
      this.showpinner = true;
      this.user.name = this.editUserForm.value.name;
      this.user.email = this.editUserForm.value.email;
      this.user.phone = this.editUserForm.value.phone;
      this.userService.update(this.user, this.userId).subscribe((response:any)=>{
        this.showpinner = false;
        this.router.navigate(['/']);
      });
    }
    console.log(this.editUserForm);
  }

}
