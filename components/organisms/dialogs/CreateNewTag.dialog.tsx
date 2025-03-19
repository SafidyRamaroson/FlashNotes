"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreateTagSchema, CreateTagType } from "@/schemas/tag/CreateTag.schema";
import { useDialogs } from "@/store/useDialogs";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTagForm } from "@/components/organisms/forms/CreateTag.form";


function CreateNewTagDialog() {
    const { dialogs, closeDialog } = useDialogs();
    const { isOpen } = dialogs.addTag;

    const onSubmit: SubmitHandler<CreateTagType> = (data) => {
        console.log("data", data)
    };

    return (
        <Dialog open={isOpen} onOpenChange={() => closeDialog("addTag")}>
            <DialogContent className="sm:max-w-[425px] max-h-[500px] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Formulaire d'ajout de nouveau tag </DialogTitle>
                    <DialogDescription>
                        Veuillez remplir le champ ci-dessous pour ajouter un nouveau tag
                    </DialogDescription>
                </DialogHeader>
                <CreateTagForm />
            </DialogContent>
        </Dialog>
    )
}

export { CreateNewTagDialog }