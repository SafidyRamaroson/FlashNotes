"use client"

import { LayoutTemplate } from "@/components/templates";
import { LayoutProps } from "@/types";

export default function UsersLayout({ children }: LayoutProps) {
    return (
        <LayoutTemplate>
            {children}
        </LayoutTemplate>
    )
}