"use client"

import { useBreadcrumbs } from "@/store/useBreadcrumb";
import { Star } from "lucide-react";
import { useEffect } from "react";

export default function ReviewsPage() {
    const { set } = useBreadcrumbs();

    useEffect(() => {
        set([{
            label: "Revoir",
            url: "/review",
            icon: Star
        }])
    }, []);
    return (
        <div>
            Review note
        </div>
    )
}

