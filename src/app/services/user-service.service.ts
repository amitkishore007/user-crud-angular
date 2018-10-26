import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../models/User";
import { catchError } from 'rxjs/operators' ;
import { throwError } from "rxjs";

@Injectable()
export class UserService{

    constructor(private http: HttpClient) {}

    getUser() {
        return this.http.get(environment.user.all);
    }
    
    createUser(user: User) {
        return this.http.post(environment.user.create, user);
    }

    getUserDetails(userID: string) {
        return this.http.get(environment.user.get + '/' + userID).pipe(catchError((error) => {
            return throwError(error);
        }));
    }

    update(user: User, userId:string) {
        return this.http.put(environment.user.update + '/' + userId, user).pipe(catchError((error) => {
            return throwError(error);
        }));
    }

    deleteUser(userId: string) {
        return this.http.delete(environment.user.delete + '/' + userId).pipe(catchError((error) => {
            return throwError(error);
        }));
    }
}