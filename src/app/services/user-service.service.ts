import { Injectable } from "@angular/core";
import { ResponseData } from "../models/ResponseData";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../models/User";

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
        return this.http.get(environment.user.get+'/'+userID);
    }

    update(user: User, userId:string) {
        return this.http.put(environment.user.update + '/' + userId, user);
    }

    deleteUser(userId: string) {
        return this.http.delete(environment.user.delete+'/'+userId);
    }
}