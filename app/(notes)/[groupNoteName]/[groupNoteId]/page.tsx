"use client";

import { NoteTemplate } from "@/components/templates/NoteTemplate";
import { useParams } from "next/navigation";
import React from "react";

export default function NotePage() {
    const { groupNoteName, groupNoteId } = useParams<{ groupNoteName: string, groupNoteId: string }>();

    return (
        <NoteTemplate
            groupNoteName={groupNoteName}
            groupNoteId={groupNoteId}
        />
    );
}