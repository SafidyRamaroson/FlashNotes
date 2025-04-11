import { IUserRepository } from "@/core/application/repositories/users.repo.interface";
import { IUsersUseCase } from "@/core/application/use-cases/user.use-case";
import { UserModel } from "@/core/entities/models/user.model";


export class UsersUseCaseImpl implements IUsersUseCase {
    private _IUserRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this._IUserRepository = userRepository
    }

    findUserByEmail(input: { email: string; }): Promise<UserModel | null> {
        return this._IUserRepository.findByEmail(input.email);
    }
}