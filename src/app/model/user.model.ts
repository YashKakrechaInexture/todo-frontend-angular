export class User {
    id?: number;
    email?: String;
    password?: String;
    admin?: boolean;

    constructor(id: number, email: String, password: String, admin: boolean) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.admin = admin;
    }
}