import { Prisma, Order } from "@prisma/client";
import BaseRepository from "./BaseRepository";
import { prisma } from "@/lib/prisma";


class OrderRepository extends BaseRepository<Partial<Order>, Prisma.OrderCreateInput, Prisma.OrderUpdateInput, Prisma.OrderWhereInput, Prisma.OrderSelect> {
    constructor() {
        super(prisma.order);
    }
}

export default new OrderRepository();