import { loginUtente } from "./loginUtente";

export class AdminLogin implements loginUtente{
    email: string = 'admin';
    password: string = '111111';
}
