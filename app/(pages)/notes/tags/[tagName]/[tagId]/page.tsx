"use client";

import { TagTemplate } from "@/components/templates/TagTemplate";
import { useParams } from "next/navigation";

export default function NotePage() {
    const { tagName, tagId } = useParams<{ tagName: string, tagId: string }>();

    return (
        <TagTemplate
            tagId={Number(tagId)}
            tagName={tagName}
        />
    );
}