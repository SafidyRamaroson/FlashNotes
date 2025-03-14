
import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { Button } from "@/components/ui/button";
import { useBreadcrumbs } from "@/store/useBreadcrumb";
import { Download, NotepadText, Printer, Share } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Logo from "@/public/logo.webp";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NoteCTAs } from "@/components/organisms/NoteCTA";
import { TabsNote } from "@/components/organisms/TabsNote";
import { NoteContent } from "@/components/organisms/NoteContent";
import { NoteContainer } from "@/components/organisms/NoteContainer";
import { useActiveLink } from "@/store/useActiveLink";

type NoteTemplateProps = {
    groupNoteName: string;
    groupNoteId: string
}

function NoteTemplate({
    groupNoteName,
    groupNoteId
}: NoteTemplateProps){
    const { set } = useBreadcrumbs();
    const { set: setActiveLink, mainLinks } = useActiveLink();

    useEffect(() => {
        set([
            {
                label: "Mes notes",
                url: "/",
                icon: NotepadText,
            },
            {
                label: groupNoteName,
            },
            {
                label: groupNoteId,
            },
        ]);
        setActiveLink(mainLinks[0]);
    }, []);

    return (
        <>
            <LayoutSectionHeader
                title={groupNoteName.charAt(0).toLocaleUpperCase() + groupNoteName.slice(1)}
                subtitle="Crée le 12 Mars 2025"
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
    );
}

export { NoteTemplate }