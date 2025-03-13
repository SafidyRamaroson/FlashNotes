"use client"

import { HeaderBreadcrumb } from "@/components/organisms/shared/HeaderBreadcrumb";
import { Separator } from "@/components/ui/separator";
import { PanelLeft } from "lucide-react";

function AppHeader(){
    return(
        <div className="flex flex-row items-center mt-2 ml-2 gap-2">
            <PanelLeft className="text-gray-200"/>
            <span> | </span>
            <HeaderBreadcrumb />
        </div>
    )
}

export { AppHeader }