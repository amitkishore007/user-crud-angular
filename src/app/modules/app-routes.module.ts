import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LoginComponent } from "../components/login/login.component";
import { UsersComponent } from "../components/users/users.component";
import { EditUserComponent } from "../components/users/edit-user/edit-user.component";
import { UserComponent } from "../components/users/user/user.component";
import { AddUserComponent } from "../components/users/add-user/add-user.component";

const routes:Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component:LoginComponent },
    { path: 'users', component: UsersComponent, children :[
        { path: 'create', component: AddUserComponent },
        { path: ':id', component: UserComponent },
        { path: 'edit/:id', component: EditUserComponent },
    ]}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutes {

}