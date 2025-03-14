"use client"

import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb"
import { useBreadcrumbs } from "@/store/useBreadcrumb"
import { CustomBreadcrumbItem } from "@/components/molecules/shared/CustomBreadcrumbItem";


function HeaderBreadcrumb() {
    const { breadcrumbsList } = useBreadcrumbs();

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    breadcrumbsList?.map((breadcrumbItem, idx) => (
                        <CustomBreadcrumbItem breadcrumbItem={breadcrumbItem} isLast={idx == breadcrumbsList.length - 1} key={idx} />
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb >
    )
}

export { HeaderBreadcrumb }

