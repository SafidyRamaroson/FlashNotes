"use client"

import { CreateFlashNotesForm } from "@/components/organisms/forms/CreateNotes.form"
import LayoutSectionHeader from "../molecules/shared/LayoutSectionHeader"
import { useBreadcrumbs } from "@/store/useBreadcrumb"
import { useActiveLink } from "@/store/useActiveLink";
import { useEffect } from "react";
import { NotepadText } from "lucide-react";

function CreateFlashNotesTTemplate() {

    const { set } = useBreadcrumbs();
    const { set: setActiveLink, mainLinks } = useActiveLink();

    useEffect(() => {
        set([{
            label: "Mes notes",
            url: "/notes/all",
            icon: NotepadText
        }, {
            label: "créer nouvelle flash notes"
        }])

        setActiveLink(mainLinks[0]);
    }, [])
    return (
        <div>
            <LayoutSectionHeader
                title="Création d'une flash notes"
                subtitle="Formulaire d'ajout de nouvelle flash notes"
            />
            <CreateFlashNotesForm
            />
        </div>
    )
}

export { CreateFlashNotesTTemplate }