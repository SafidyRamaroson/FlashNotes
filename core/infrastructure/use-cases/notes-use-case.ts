import { INoteGroupRepository } from "@/core/application/repositories/noteGroup.repo.interface.ts";
import { INotesRepository } from "@/core/application/repositories/notes.repo.interface";
import { ISharedNoteRepository } from "@/core/application/repositories/sharedNote.repo.interface";
import { IUserRepository } from "@/core/application/repositories/users.repo.interface";
import { INotesUseCase } from "@/core/application/use-cases/notes.use-case";
import { ConflictError, NotFoundError } from "@/core/entities/errors/common";
import { NoteCreateType, NoteModel } from "@/core/entities/models/note.model";
import { NoteGroupCreateType, NoteGroupModel } from "@/core/entities/models/noteGroup.model";
import { ShareNoteGroupModel } from "@/core/entities/models/sharedNote";

//TODO: change this class to extends INotesUseCase
export class NotesUseCaseImpl implements INotesUseCase {
    private _notesRepository: INotesRepository;
    private _userRepository: IUserRepository;
    private _noteGroupRepository: INoteGroupRepository;
    private _sharedNoteRepository: ISharedNoteRepository;

    constructor(notesRepository: INotesRepository, userRepository: IUserRepository, noteGroupRepository: INoteGroupRepository, sharedNoteRepository: ISharedNoteRepository) {
        this._notesRepository = notesRepository;
        this._userRepository = userRepository;
        this._noteGroupRepository = noteGroupRepository;
        this._sharedNoteRepository = sharedNoteRepository;
    }
   
    async createNoteGroupAndInsertLinkedNotes(input: { noteGroup: NoteGroupCreateType; linkedNotes: NoteCreateType[]; }, userId: string): Promise<any> {
        const { noteGroup, linkedNotes } = input;
        const { name } = noteGroup;
        const foundUser = await this._userRepository.findUserById(userId);

        if (!foundUser) {
            throw new NotFoundError("Cannot create notes , cause : user note found in the database")
        }

        const foundNoteGroup = await this._noteGroupRepository.findNoteGroupByNameAndUserId(name, userId);

        if (foundNoteGroup) {
            throw new ConflictError("Note group already exists in the database for this user");
        }

        const createdGroupNote = await this._noteGroupRepository.create({
            noteGroup: noteGroup
        }, userId);

        return await this._notesRepository.createMany({
            noteGroupId: createdGroupNote.id,
            linkedNotes: linkedNotes
        }, userId);
    }

    async deleteNoteGroupAndLinkedNotes(groupNoteId: string, userId: string): Promise<NoteGroupModel> {
        const foundNoteGroup = await this._noteGroupRepository.findNoteGroupById(groupNoteId);
        if (!foundNoteGroup) {
            throw new NotFoundError("Note group not found")
        }
        return await this._noteGroupRepository.delete(groupNoteId);
    }

    async shareNoteGroupWithUsers(noteGroupId: string, input: { shareToUsersId: string[]; }): Promise<void> {
        const { shareToUsersId } = input;

        const checkExistenceNote = await this._noteGroupRepository.findNoteGroupById(noteGroupId);

        if (!checkExistenceNote) {
            throw new NotFoundError("Note Group to share is not found")
        }

        await this._sharedNoteRepository.shareNoteGroupWithUsers(noteGroupId, shareToUsersId);
    }

    async getNoteGroupsAndLinkedNotesForUser(userId: string): Promise<({ notes: NoteModel[]; } & NoteGroupModel)[] | []> {
        return this._notesRepository.getNotesForUser(userId); //TODO: change name of this function
    }

    async getNoteGroupAndLinkedNotesFavoritesForUser(userId: string): Promise<({ notes: NoteModel[]; } & NoteGroupModel)[] | []> {
        return this._notesRepository.getFavoritesNotesForUser(userId);
    }

    async getSharedNotesForUser(userId: string): Promise<({
        noteGroup: {
            notes: NoteModel[];
        } & NoteGroupModel;
    })[]> {
        return this._sharedNoteRepository.getSharedNotesForUser(userId)
    }
}