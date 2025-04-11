"use client";

import FormField from "@/components/molecules/shared/FormField";
import { Button } from "@/components/ui/button";
import { TagCreateSchema, TagCreateType } from "@/core/entities/models/tag.model";
import { toast } from "@/hooks/use-toast";
import { useMutationApi } from "@/hooks/useMutation";
import { useDialogs } from "@/store/useDialogs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tag } from "lucide-react";
import { revalidatePath } from "next/cache";
import { SubmitHandler, useForm } from "react-hook-form";



export function CreateTagForm() {
    const {
        register,
        handleSubmit,
    } = useForm<TagCreateType>({
        mode: "onSubmit",
        resolver: zodResolver(TagCreateSchema),
    });

    const { closeDialog } = useDialogs();
    const { mutateAsync: createTag, isPending } = useMutationApi({
        endpoint: "/api/notes/tags",
        method: "POST",
        queryKeyToInvalidate: 'tagsUser'
    });

    const onSubmit: SubmitHandler<TagCreateType> = async (data) => {
        await createTag(data);
        toast({
            title: "Tag crée",
            description: "Le tag crée avec succès.",
        });
        closeDialog("addTag");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    disabled={isPending}
                    onSubmit={() => handleSubmit(onSubmit)}
                />
            </div>
        </form>
    )
}