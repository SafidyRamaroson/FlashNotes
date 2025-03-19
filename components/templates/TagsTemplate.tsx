"use client"

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CardTag } from "@/components/molecules/cards/CardTag"
import { useDialogs } from "@/store/useDialogs"
import { CreateNewTagDialog } from "../organisms/dialogs/CreateNewTag.dialog"

function TagsTemplate() {
    const tags = Array(8).fill(0);
    const { openDialog } = useDialogs();
    return (
        <>
            <div className="flex flex-row justify-between items-start">
                <LayoutSectionHeader
                    title="Gestion des tags"
                    subtitle="Vous avez 4 tags"
                />
                <Button
                    label="Ajouter"
                    icon={<Plus />}
                    iconPosition="left"
                    onClick={() => openDialog("addTag", {})}
                />
            </div>
            <CreateNewTagDialog />
            {/* List of tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {tags.map((tag, idx) => <CardTag key={idx}/>)}
            </div>
        </>
    )
}

export { TagsTemplate }