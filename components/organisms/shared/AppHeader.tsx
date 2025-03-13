"use client"

import { HeaderBreadcrumb } from "@/components/organisms/shared/HeaderBreadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PanelLeft } from "lucide-react";

function AppHeader(){
    return(
        <div className="flex flex-row items-center py-2 pl-2 gap-2">
            <SidebarTrigger />
            <span> | </span>
            <HeaderBreadcrumb />
        </div>
    )
}

export { AppHeader }