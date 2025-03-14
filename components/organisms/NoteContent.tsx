"use client";

import Logo from "@/public/logo.webp";
import Image from "next/image";

function NoteContent(){
    return(
        <div className="h-fit md:col-span-2 p-3 border rounded-lg">
        <Image
            src={Logo}
            alt="Image note"
            className="w-full h-52 object-cover rounded-md mb-2"
        />
        <div>
            <h3 className="font-bold text-xl">Title</h3>
            <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea eos tempora temporibus labore fugit
                veniam voluptas quod ipsum repudiandae aut ullam odio pariatur tenetur, beatae rem ad quaerat iusto!
            </p>
            <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias incidunt ut maxime enim obcaecati, libero
                quod quo mollitia ea? Eius soluta, obcaecati qui dolor at aliquid eos enim sapiente corrupti.
            </p>
            <h5 className="font-semibold text-lg">Subtitle 1</h5>
            <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias incidunt ut maxime enim obcaecati, libero
                quod quo mollitia ea? Eius soluta, obcaecati qui dolor at aliquid eos enim sapiente corrupti.
            </p>
            <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias incidunt ut maxime enim obcaecati, libero
                quod quo mollitia ea? Eius soluta, obcaecati qui dolor at aliquid eos enim sapiente corrupti.
            </p>
            <h5 className="font-semibold text-lg">Subtitle 2</h5>
            <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias incidunt ut maxime enim obcaecati, libero
                quod quo mollitia ea? Eius soluta, obcaecati qui dolor at aliquid eos enim sapiente corrupti.
            </p>
        </div>
    </div>
    )
}

export { NoteContent }