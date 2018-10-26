import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { PostsComponent } from './components/posts/posts.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostsComponent } from './components/posts/add-posts/add-posts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutes } from './modules/app-routes.module';
import { UserService } from './services/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { UserComponent } from './components/users/user/user.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    PostsComponent,
    EditPostComponent,
    LoginComponent,
    AddPostsComponent,
    DashboardComponent,
    UserComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
