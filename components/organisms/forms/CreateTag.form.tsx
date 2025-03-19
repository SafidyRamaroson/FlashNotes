"use client";

import FormField from "@/components/molecules/shared/FormField";
import { Button } from "@/components/ui/button";
import { CreateTagSchema, CreateTagType } from "@/schemas/tag/CreateTag.schema";
import { useDialogs } from "@/store/useDialogs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tag } from "lucide-react";
import { useForm } from "react-hook-form";


export function CreateTagForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateTagType>({
        mode: "onSubmit",
        resolver: zodResolver(CreateTagSchema),
    });

    const { closeDialog } = useDialogs();
    
    return (
        <form>
            <FormField
                htmlFor="name"
                label="Nom"
                name="name"
                register={register}
            />
            <div className="grid grid-cols-2 mt-6 gap-4">
                <Button
                    label="Annuler"
                    variant="outline"
                    onClick={() => closeDialog("addTag")}
                />
                <Button
                    label="Créer"
                    icon={<Tag />}
                    iconPosition="left"
                    onSubmit={() => alert("Création de nouvelle tag")}
                />
            </div>
        </form>
    )
}