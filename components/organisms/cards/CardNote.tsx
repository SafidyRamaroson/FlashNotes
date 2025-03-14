"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.webp";
import { ArrowRight, DeleteIcon, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CardNote() {
    return (
        <div className="rounded-[20px] p-4 border-[1px] bg-white">
            <div className="flex flex-col gap-3">
                <Image alt="group-note-image" src={Logo} className="rounded-md size-20 w-full h-20 object-cover" />
                <div>
                    <h3 className="font-semibold">Group note name</h3>
                    <p className="text-base font-normal">crée le: 12 Mars 2025</p>
                </div>
            </div>
            <p className="text-base text-slate-500 line-clamp-4 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nostrum magnam, incidunt officia repellendus blanditiis aliquid vel quaerat. Voluptatibus sequi magni aut sunt mollitia unde odit libero ipsa, vel molestiae.</p>
            <div className="flex flex-row justify-between items-center">
                <Link href="/notes/biologique/1" className="flex flex-row items-center gap-3 text-primary hover:translate-x-2 transition-transform ease-linear duration-300">
                    Voir les cartes
                    <ArrowRight />
                </Link>
                <Button
                    icon={<Trash2 className="text-white"/>}
                    iconPosition="center"
                    variant="destructive"
                    size="icon"
                    className="rounded-sm"
                />
            </div>
        </div>
    )
}

export { CardNote }