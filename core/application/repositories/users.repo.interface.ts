import { UserModel } from "@/core/entities/models/user.model";


export interface IUserRepository {
    findUserById(userId: string): Promise<UserModel | null>;
    findByEmail(email:string): Promise<UserModel | null>;
}