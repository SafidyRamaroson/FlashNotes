"use client";

import { NoteCTAs } from "@/components/organisms/NoteCTA";
import { useIsMobile } from "@/hooks/use-mobile";

function TabsNote() {
    return (
        <div className="shadow-sm h-fit">
            <h2 className="font-bold p-2 bg-gray-50">My flashcards</h2>
            <ul className="p-1 space-y-1">
                <li className="pl-2 py-2 text-base font-medium text-secondary-foreground cursor-pointer">ADN ?</li>
                <li className="pl-2 py-2 text-base font-medium cursor-pointer">Gellule ?</li>
                <li className="pl-2 py-2 text-base font-medium cursor-pointer">Squelette ?</li>
            </ul>
        </div>
    )
}

export { TabsNote }