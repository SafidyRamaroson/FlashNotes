"use client"

import { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { BreadcrumbItemType } from "@/types/breadcrumb";
import { Fragment } from "react";


export function CustomBreadcrumbItem({
    breadcrumbItem,
    isLast = false
}: {
    breadcrumbItem: BreadcrumbItemType,
    isLast?: boolean
}) {

    const { label, url, icon: Icon } = breadcrumbItem;
    return (
        <>
            {!isLast ? (
                <Fragment key={label}>
                    <BreadcrumbItem >
                        <BreadcrumbLink href={url} className="flex flex-row gap-4 items-center font-bold">
                            {Icon && <Icon size="24" className="text-sidebar-accent-foreground" />}
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </Fragment>
            ) : (
                <BreadcrumbItem key={label}>
                    <BreadcrumbPage className="flex flex-row gap-4 items-center font-bold">
                    {Icon && <Icon size="24" className="text-sidebar-accent-foreground" />}
                        {label}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            )
            }
        </>
    )
}