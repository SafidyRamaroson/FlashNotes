"use client";

import AllNotesTemplate from "@/components/templates/AllNotesTemplate";
import { useBreadcrumbs } from "@/store/useBreadcrumb";
import { NotepadText } from "lucide-react";
import { useEffect } from "react";

export default function AllNotesPage() {

  const { set } = useBreadcrumbs();

  useEffect(() => {
    set([{
      label: "Mes notes",
      url: "/notes",
      icon: NotepadText
    }])
  }, []);
  return (
    <AllNotesTemplate />
  )
}
