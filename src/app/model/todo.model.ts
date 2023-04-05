import { User } from "./user.model";

export class Todo {
    id?: number;
    title: String;
    description: String;
    status?: String;
    user?: User;

    constructor(id: number, title: String, description: String, status: String, user: User) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.user = user;
    }
}