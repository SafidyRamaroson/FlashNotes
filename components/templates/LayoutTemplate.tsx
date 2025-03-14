"use client"
import { LayoutProps } from "@/types";
import { AppSidebar } from "@/components/organisms/shared/AppSidebar";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { NotepadText, Tags, Star, PanelsTopLeft, PanelLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { string } from "zod";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AppHeader } from "@/components/organisms/shared/AppHeader";
import { useActiveLink } from "@/store/useActiveLink";
import { menuItems } from "@/data";

function LayoutTemplate({ children }: LayoutProps) {
    const { activeLink , set , mainLinks } = useActiveLink();
    const path = usePathname();
    useEffect(() => {
        const isMainLink = mainLinks.some((url) => url == path);
        if(isMainLink){
            set(path);
            return;
        }
    }, [path])
    return (
        <SidebarProvider>
            <AppSidebar menuItems={menuItems} onMouseEnter={() => alert("On Mouse enter")} />
            <main className="flex-1">
                <AppHeader />
                <div className="w-full min-h-[93.4%] px-4 pt-4">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export { LayoutTemplate }