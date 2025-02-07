"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BarChart , Bell, Bot, List, Settings, ClipboardList, Store } from "lucide-react";
import { ReactNode } from "react";


const  adminNavMainData = [
  {
    title: "Tableau de board",
    url: "#",
    icon: BarChart,
    isActive: true,
    items: [
      {
        title: "Statistiques",
        url: "/admin/tb",
      },
    ],
  },
  {
    title: "Clients",
    url: "#",
    icon: Bot,
    isActive: true,
    items: [
      {
        title: "Liste des clients",
        url: "/admin/customers",
      },
    ],
  },
  {
    title: "Produits",
    url: "#",
    icon: Store ,
    isActive: true,
    items: [
      {
        title: "Liste des produits",
        url: "/admin/products",
      },
      {
        title: "Out stock",
        url: "/admin/products/outOfStock"
      }
    ],
  },
  {
    title: "Collections",
    url: "#",
    icon: List,
    isActive: true,
    items: [
      {
        title: "Liste des collections",
        url: "/admin/products/categories",
      },
    ],
  },
  {
    title: "Commandes",
    url: "#",
    icon: ClipboardList,
    isActive: true,
    items: [
      {
        title: "Tout les commandes",
        url: "/admin/orders",
      },
      {
        title: "Commandes à livrer",
        url: "/admin/delivery",
      },
    ],
  },
  {
    title: "Paramètres",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Bon de commande",
        url: "/parametres/bc",
      },
      {
        title: "Bon de sortie",
        url: "/parametres/bs",
      },
    ],
  }
];

export default function ServiceLayout({
  children
}: {
  children: ReactNode;
}) {
  
  return (
    <SidebarProvider>
      <AppSidebar navMain={adminNavMainData}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 mb-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />  
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Tableau de board</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Statistiques</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-row items-center gap-2 mr-2">
            <Bell className="text-primary cursor-pointer"/>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min" >
             { children }
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
