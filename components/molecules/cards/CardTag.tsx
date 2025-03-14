import { Button } from "@/components/ui/button"
import { ArrowRight, Trash2 } from "lucide-react"
import Link from "next/link"

export type TagProps = {
    name?: string;
    noteNumbersOfRelatedTag?: number;
}

function CardTag(){
    return(
        <div className="border p-2 rounded-md">
            <h2>Tag name</h2>
            <p className="text-base">25 Notes</p>
            <div className="flex flex-row justify-between items-center">
                <Link href="/notes/tags/Maths/12" className="flex flex-row items-center gap-3 text-primary hover:translate-x-2 transition-transform ease-linear duration-300">
                    Voir les notes
                    <ArrowRight />
                </Link>
                <Button
                    icon={<Trash2 className="text-white"/>}
                    iconPosition="center"
                    variant="destructive"
                    size="icon"
                    className="rounded-sm"
                    onClick={() => alert("Deleting ...")}
                />
            </div>
        </div>
    )
}

export { CardTag }