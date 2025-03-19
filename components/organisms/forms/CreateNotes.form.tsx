import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader"
import { useDialogs } from "@/store/useDialogs";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateFlashNotesSchema, CreateFlashNotesType } from "@/schemas/notes/CreateFlashNotes.schema";
import FormField from "@/components/molecules/shared/FormField";
import { Button } from "@/components/ui/button";
import { NotepadText } from "lucide-react";

function CreateFlashNotesForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateFlashNotesType>({
        mode: "onSubmit",
        resolver: zodResolver(CreateFlashNotesSchema),
    });

    const { closeDialog } = useDialogs();

    const onSubmit: SubmitHandler<CreateFlashNotesType> = (data) => {
        console.log("data", data)
    };

    return (
        <form>
            <div className="mt-6 border p-4 rounded-md">
                <h2 className="font-semibold ">Créer le groupe des notes</h2>
                <FormField
                    htmlFor="groupNote.name"
                    label="Nom du groupe"
                    name="groupNote.name"
                    register={register}
                />
            </div>
            <div className="mt-6 border p-4 rounded-md">
                <h2 className="font-semibold ">Créer des notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                        htmlFor={`notes.${0}.term`}
                        label="Terme"
                        name={`notes.${0}.term`}
                        register={register}
                    />
                    <FormField
                        htmlFor={`notes.${0}.definition`}
                        label="Definition"
                        name={`notes.${0}.definition`}
                        register={register}
                    />
                      <FormField
                        htmlFor={`notes.${0}.image`}
                        label="Image"
                        name={`notes.${0}.image`}
                        register={register}
                    />
                </div>
            </div>
            <Button
                label="Créer flashNotes"
                icon={<NotepadText />}
                iconPosition="left"
                className="mt-4"
            />
        </form>
    )
}

export { CreateFlashNotesForm }
