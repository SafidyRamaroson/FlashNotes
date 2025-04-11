import { NoteModel } from '@/core/entities/models/note.model';
import { NoteGroupModel } from '@/core/entities/models/noteGroup.model';
import { mainLinks as mainLinksData } from '@/data';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


type UseNotesProps = {
    //use DTO for typed this groups note
    groupsNoteWithNotes: ({ notes: NoteModel[]; } & NoteGroupModel)[],
    currentGroupNoteAndLinkedNotes: { notes: NoteModel[]; } & NoteGroupModel,
    currentNote: NoteModel,
    setGroupsNoteWithNotes: (groupsNoteWithNotes: ({ notes: NoteModel[]; } & NoteGroupModel)[]) => void;
    setCurrentGroupNoteAndLinkedNotes: (groupNoteId: string) => void;
    setCurrentNote: (noteId: string) => void;
}

export const useNotes = create(persist<UseNotesProps>(
    (set) => ({
        groupsNoteWithNotes: [],
        currentGroupNoteAndLinkedNotes: {
            id: "",
            name: "",
            favorite: false,
            createdAt: new Date('2025-04-06T19:40:40.059Z'),
            updatedAt: new Date('2025-04-06T19:40:40.059Z'),
            userId: "",
            notes: [],
        },
        currentNote: {
            id: "",
            term: "",
            definition: "",
            image: "",
            noteGroupId: "",
            createdAt: new Date('2025-04-06T19:40:40.059Z'),
            updatedAt: new Date('2025-04-06T19:40:40.059Z'),
        },
        setGroupsNoteWithNotes: (groupsNoteWithNotes: ({ notes: NoteModel[]; } & NoteGroupModel)[]) => set((state) => ({
            groupsNoteWithNotes: groupsNoteWithNotes
        })),
        setCurrentGroupNoteAndLinkedNotes: (groupNoteId: string) => set((state) => {
            const groupNoteFound = state.groupsNoteWithNotes.find((groupNote) => groupNote.id === groupNoteId);
            return {
                currentGroupNoteAndLinkedNotes: groupNoteFound ?? {
                    id: "",
                    name: "",
                    favorite: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    userId: "",
                    notes: [],
                }
            }
        }),
        setCurrentNote: (noteId: string) => set((state) => ({
            currentNote: state.currentGroupNoteAndLinkedNotes.notes.find((note) => note.id === noteId)
        })),
    }),{
    name: 'notes',
}));

