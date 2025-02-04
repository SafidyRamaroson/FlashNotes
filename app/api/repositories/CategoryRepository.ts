import { Prisma, Category } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import { prisma } from "@/lib/prisma";


class CategoryRepository extends BaseRepository<Partial<Category>, Prisma.CategoryCreateInput, Prisma.CategoryUpdateInput, Prisma.CategoryWhereInput, Prisma.CategorySelect> {
    constructor() {
        super(prisma.category);
    }
}

export default new CategoryRepository();