import { Prisma, User } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import { prisma } from "@/lib/prisma";


class UserRepository extends BaseRepository<Partial<User>, Prisma.UserCreateInput, Prisma.UserUpdateInput, Prisma.UserWhereInput, Prisma.UserSelect, typeof prisma.user> {
    constructor() {
        super(prisma.user);
    }
}

export default new UserRepository();
