import { Prisma, Cart } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import { prisma } from "@/lib/prisma";


class CartRepository extends BaseRepository<Partial<Cart>, Prisma.CartCreateInput, Prisma.CartUpdateInput, Prisma.CartWhereInput, Prisma.CartSelect, typeof prisma.cart> {
    constructor() {
        super(prisma.cart);
    }
}

export default new CartRepository();