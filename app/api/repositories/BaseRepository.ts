import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BaseRepository<T, CreateInput, UpdateInput, WhereInput, SelectOutput> {
    private model: any;

    constructor(model: any) {
        this.model = model;
    }

    async findAll(where?: WhereInput, select?: SelectOutput, skip?: number, take?: number): Promise<T[]> {
        return this.model.findMany({ where, select, skip, take });
    }

    async findOne(where: WhereInput, select?: SelectOutput): Promise<T | null> {
        return this.model.findFirst({ where, select });
    }

    async createOne(data: CreateInput, select?: SelectOutput): Promise<T> {
        return this.model.create({ data, select });
    }

    async updateOne(where: WhereInput, data: UpdateInput, select?: SelectOutput): Promise<T> {
        return this.model.update({
            where,
            data,
            select,
        });
    }

    async deleteOne(where: WhereInput, select?: SelectOutput): Promise<T> {
        return this.model.delete({
            where,
            select,
        });
    }
}

export default BaseRepository;
