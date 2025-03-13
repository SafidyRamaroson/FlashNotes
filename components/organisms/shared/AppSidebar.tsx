"use client"

import { Logo } from "@/components/atoms";
import { InteractiveSidebarMenu } from "@/components/molecules/shared/InteractiveSidebarMenu";
import { Sidebar, SidebarContent, SidebarMenu, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { MenuItem } from "@/types/menuItem";
import { cn } from "@/utils/tailwind";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { NotepadText, Tags, Star, ArrowDown, ArrowUp } from "lucide-react";

type AppSidebarProps = {
  menuItems: MenuItem[],
  activeLink: string | null;
  onMouseEnter: () => void;
}
function AppSidebar({
  menuItems,
  activeLink,
  onMouseEnter
}: AppSidebarProps) {

  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex flex-row items-center gap-2 text-primary">
          <Logo />
          <span className={cn("font-bold", state === "collapsed" && "hidden")}> FlashNotes </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
            <InteractiveSidebarMenu items={menuItems} activeLink={activeLink} onMouseEnter={onMouseEnter} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
        <div className="py-2 flex flex-row gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn" />
            <AvatarFallback className="border p-1.5 rounded-full">SR</AvatarFallback>
          </Avatar>
          <div className={cn("mr-8",state === "collapsed" && "hidden")}>
            <h4 className="text-base font-bold">Safidy RAMAROSON</h4>
            <p className="text-wrap text-base text-ellipsis overflow-hidden">safidyrm@gmail.com</p>
          </div>
          <div className="hover:bg-sidebar-accent hover:cursor-pointer px-3 py-1.5 rounded-full">
            <ArrowUp size="12"/>
            <ArrowDown size="12"/>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export { AppSidebar }