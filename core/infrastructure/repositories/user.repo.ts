import { prisma } from "@/configs/prisma.config";
import { IUserRepository } from "@/core/application/repositories/users.repo.interface";
import { UserModel } from "@/core/entities/models/user.model";

export class UserRepositoryImpl implements IUserRepository {
    async findByEmail(email: string): Promise<UserModel | null> {
        return await prisma.user.findFirst({
            where:{
                email
            }
        })
    }
    async findUserById(userId: string): Promise<UserModel | null> {
        return await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }
}