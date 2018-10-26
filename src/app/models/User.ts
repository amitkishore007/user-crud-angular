import { Post } from "./Post";

export interface User {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    posts?: Post[];
}