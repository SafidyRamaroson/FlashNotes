"use client"
import { LayoutProps } from "@/types";
import { AppSidebar } from "@/components/organisms/shared/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NotepadText, Tags, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { string } from "zod";
import { usePathname } from "next/navigation";



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
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export { LayoutTemplate }