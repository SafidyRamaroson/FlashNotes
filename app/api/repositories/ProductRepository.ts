import { Prisma, Product } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import { prisma } from "@/lib/prisma";


class ProductRepository extends BaseRepository<Partial<Product>, Prisma.ProductCreateInput, Prisma.ProductUpdateInput, Prisma.ProductWhereInput, Prisma.ProductSelect> {
    constructor() {
        super(prisma.product);
    }
}

export default new ProductRepository();