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


function LayoutTemplate({ children }: LayoutProps) {
    const menuItems = [
        {
            title: "Mes notes",
            url: "/",
            icon: NotepadText,
        },
        {
            title: "Tags",
            url: "/tags",
            icon: Tags
        },
        {
            title: "Revoir",
            url: "/review",
            icon: Star
        }
      ]
    
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const path = usePathname();

    useEffect(() => {
        setActiveLink(path);
    },[path])
    return (
        <SidebarProvider>
            <AppSidebar menuItems={menuItems} activeLink={activeLink as string} onMouseEnter={() => alert("On Mouse enter")}/>
            <main>
                <AppHeader />
                {children}
            </main>
        </SidebarProvider>
    )
}

export { LayoutTemplate }