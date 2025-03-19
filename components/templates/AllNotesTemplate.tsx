"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { Button } from "@/components/ui/button";
import { Filter, FilterXIcon, Plus, PrinterIcon } from "lucide-react";
import { CardNote } from "@/components/organisms/cards/CardNote";
import { InputSearch } from "@/components/molecules";
import { useState } from "react";

export default function AllNotesTemplate() {
  const cards = Array(12).fill(1);
  const [keyword, setKeyword] = useState<string | null>(null);
  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <LayoutSectionHeader
          title="Tous mes flash notes"
          subtitle="Vous avez 10 notes"
        />
       
      </div>
      <div className="flex flex-col sm:flex-row  items-center sm:gap-6 gap-4 mt-4">
        <InputSearch
        placeholder="Rechercher par nom du groupe , par terme ..."
        setValue={setKeyword}
        value={keyword}
        />
         <div className="flex flex-row gap-2">
           <Button
            icon={<Filter />}
            iconPosition="center"
            size="icon"
            variant="outline"
          />
           <Button
            label="Imprimer"
            icon={<PrinterIcon />}
            iconPosition="left"
            variant="secondary"
          />
          <Button
            label="Ajouter"
            icon={<Plus />}
            iconPosition="left"
            onClick={() => { window.location.href ="/notes/note/new"}}
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md">
        {cards?.map((v, idx) => <CardNote key={idx} />)}
      </div>
    </>
  )
}
