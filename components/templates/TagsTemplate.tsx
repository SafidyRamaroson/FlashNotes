"use client"

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CardTag } from "@/components/molecules/cards/CardTag"
import { useDialogs } from "@/store/useDialogs"
import { CreateNewTagDialog } from "../organisms/dialogs/CreateNewTag.dialog"
import { useGet } from "@/hooks/useGet"
import { useEffect, useState } from "react"

function TagsTemplate() {
    const tags = Array(8).fill(0);
    const { openDialog } = useDialogs();
    const [tagsUser, setTagsUser] = useState<any>(); 
    const { data: responseData, isFetched } = useGet({
        endpoint: "/api/notes/tags",
        queryKey: "tagsUser",
        where: {
          userId: "user1"
        }
      });

    useEffect(() => {
        if(responseData){
            setTagsUser(responseData.data)
        }
    }, [isFetched])
    return (
        <>
            <div className="flex flex-row justify-between items-start">
                <LayoutSectionHeader
                    title="Gestion des tags"
                    subtitle={`Vous avez ${tagsUser?.length ?? 0}  tags`}
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
                { tagsUser?.map((tag) => <CardTag key={tag.id} id={tag.id} name={tag.name} notesCountOfRelatedTag={tag.notes.count}/>) }
            </div>
        </>
    )
}

export { TagsTemplate }