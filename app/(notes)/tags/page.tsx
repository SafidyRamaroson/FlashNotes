"use client";

import React from "react";
import { useEffect } from "react";
import { TagsTemplate } from "@/components/templates/TagsTemplate";
import { useBreadcrumbs } from "@/store/useBreadcrumb";
import { Tags } from "lucide-react";


export default function tagsPage(){

    const { set } = useBreadcrumbs();

    useEffect(() => {
        set([{
            label: "Tags",
            url: "/tags",
            icon: Tags
        }])
    }, []);

    return(
        <>
           <TagsTemplate />
        </>
    )
}