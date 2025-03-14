"use client"

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CardTag } from "@/components/molecules/cards/CardTag"

function TagsTemplate() {
    const tags = Array(8).fill(0)
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
                />
            </div>
            {/* List of tags */}
            <div className="grid grid-cols-4 gap-4 mt-4">
                {tags.map((tag, idx) => <CardTag key={idx}/>)}
            </div>
        </>
    )
}

export { TagsTemplate }