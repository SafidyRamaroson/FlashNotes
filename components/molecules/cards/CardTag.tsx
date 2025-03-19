import { ConfirmDeleteTag } from "@/components/organisms/dialogs/ConfirmDeleteTag.dialog";
import { Button } from "@/components/ui/button"
import { useDialogs } from "@/store/useDialogs";
import { ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";

export type TagProps = {
    name?: string;
    noteNumbersOfRelatedTag?: number;
}

function CardTag(){
    const { openDialog }= useDialogs();
    return(
        <div className="border p-2 rounded-md">
            <h2>Tag name</h2>
            <p className="text-base">25 Notes</p>
            <div className="flex flex-row justify-between items-center">
                <Link href="/notes/tags/Maths/12" className="flex flex-row items-center gap-3 text-primary hover:translate-x-2 transition-transform ease-linear duration-300">
                    Voir les notes
                    <ArrowRight />
                </Link>
                <ConfirmDeleteTag />
                <Button
                    icon={<Trash2 className="text-white"/>}
                    iconPosition="center"
                    variant="destructive"
                    size="icon"
                    className="rounded-sm"
                    onClick={() => openDialog("confirmDeleteTag", { tagId: "12"})}
                />
            </div>
        </div>
    )
}

export { CardTag }