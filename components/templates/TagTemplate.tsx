import { useEffect } from "react";
import LayoutSectionHeader from "../molecules/shared/LayoutSectionHeader";
import { NoteContainer } from "../organisms/NoteContainer";
import { NoteContent } from "../organisms/NoteContent";
import { NoteCTAs } from "../organisms/NoteCTA";
import { TabsNote } from "../organisms/TabsNote";
import { useBreadcrumbs } from "@/store/useBreadcrumb";
import { TagsIcon } from "lucide-react";
import { useActiveLink } from "@/store/useActiveLink";


export type TagTemplateProps = {
    tagName: string;
    tagId: number;
}

function TagTemplate({
    tagName,
    tagId
}: TagTemplateProps ){
    const { set } = useBreadcrumbs();
    const { set: setActiveLink, mainLinks } = useActiveLink();
    useEffect(() => {
        set([
            {
                label: "Tags",
                url: "/notes/tags",
                icon: TagsIcon,
            },
            {
                label: tagName,
            },
            {
                label: tagId.toString(),
            },
        ]);

        setActiveLink(mainLinks[1]);
    }, []);
    return(
        <>
            <LayoutSectionHeader
                title={`Nom du Tag : ${tagName}`}
                subtitle="44 notes"
            />
            <NoteContainer>
                <TabsNote />
                <NoteContent />
                <NoteCTAs
                    onDownload={() => alert("downloading ...")}
                    onPrint={() => alert("Printing ...")}
                    onShare={() => alert("Sharing ...")}
                />

            </NoteContainer>
        </>
    )
}

export { TagTemplate }