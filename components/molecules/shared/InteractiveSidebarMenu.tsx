"use client"

import { SidebarMenuButton, SidebarMenuItem, SidebarMenu as SidebarMenuShadcn } from "@/components/ui/sidebar";
import { MenuItem } from "@/types/menuItem";
import { cn } from "@/utils/tailwind";
import Link from "next/link";


type SidebarMenuProps = {
  items: MenuItem[];
  activeLink: string | null;
  onMouseEnter?: () => void;
}

function InteractiveSidebarMenu({
  items,
  onMouseEnter,
  activeLink
}: SidebarMenuProps) {
  return (
    <SidebarMenuShadcn>
      {items.map((item) => (
        <Link href={item.url} className={cn("flex items-center gap-4 font-medium transition-all duration-400 ease-out", activeLink === item.url && "font-semibold")}>
          <SidebarMenuItem key={item.title} className="flex flex-row w-full">
            <SidebarMenuButton
              className={cn(
                "flex flex-row h-[38px] transition-all duration-400 ease-out",
                activeLink === item.url && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <item.icon size="20" />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      ))}
    </SidebarMenuShadcn>
  )
}

export { InteractiveSidebarMenu }