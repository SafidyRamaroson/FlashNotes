import { prisma } from "@/configs/prisma.config";
import { ISharedNoteRepository } from "@/core/application/repositories/sharedNote.repo.interface";
import { NoteModel } from "@/core/entities/models/note.model";
import { NoteGroupModel } from "@/core/entities/models/noteGroup.model";
import { ShareNoteGroupModel } from "@/core/entities/models/sharedNote";
import { Prisma } from "@prisma/client";


export class SharedNoteRepository implements ISharedNoteRepository {
    async getSharedNotesForUser(userId: string): Promise<({ noteGroup: { notes: NoteModel[]; } & NoteGroupModel; })[]> {
        const sharedNotesForUser = await prisma.shareNoteGroup.findMany({
            where: {
                sharedWithUserId: userId
            },
            include: {
                noteGroup: {
                    include: {
                        notes: true
                    }
                }
            }
        });
        return sharedNotesForUser
    }

    async shareNoteGroupWithUsers(noteGroupId: string, shareToUsersId: string[]): Promise<void> {
        const shareNoteGroupData = shareToUsersId.map((userId) => ({
            groupNoteId: noteGroupId,
            sharedWithUserId: userId
        }));
        
        await prisma.shareNoteGroup.createMany({
            data: shareNoteGroupData
        });
    }
}