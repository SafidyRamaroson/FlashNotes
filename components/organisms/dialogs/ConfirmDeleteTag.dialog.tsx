"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDialogs } from "@/store/useDialogs";

function ConfirmDeleteTag(){
    const { dialogs, closeDialog } = useDialogs();
    const { isOpen, data } = dialogs.confirmDeleteTag;
    const tagId = data?.id;


    return(
        <Dialog open={isOpen} onOpenChange={() => !isOpen && closeDialog("confirmDeleteCollection")}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Confirmer la suppression</DialogTitle>
                <DialogDescription>
                    Êtes-vous sûr de vouloir supprimer ce tag ?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button
                    label="Annuler"
                    variant="outline"
                    onClick={() => closeDialog("confirmDeleteTag")}
                />
                <Button
                    onClick={() => alert("Deleting tag ...")}
                    label="Confirmer"
                />
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}

export { ConfirmDeleteTag }