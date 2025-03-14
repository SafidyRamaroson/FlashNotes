"use client";

import { LayoutProps } from "@/types";


function NoteContainer({ children }: LayoutProps){
    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-4">
            { children }
        </div>
    )
}

export { NoteContainer }