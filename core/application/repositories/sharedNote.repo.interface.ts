import { NoteModel } from "@/core/entities/models/note.model";
import { NoteGroupModel } from "@/core/entities/models/noteGroup.model";
import { ShareNoteGroupModel } from "@/core/entities/models/sharedNote";


export interface ISharedNoteRepository {
    getSharedNotesForUser(userId: string): Promise<({ noteGroup: { notes: NoteModel[]; } & NoteGroupModel; })[]>;
    shareNoteGroupWithUsers(noteGroupId: string, shareToUsersId: string[]): Promise<void>;
}