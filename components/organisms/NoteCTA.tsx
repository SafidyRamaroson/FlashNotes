"use client"

import { Share, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

type NoteCTAsProps = {
    onShare: () => void;
    onDownload: () => void;
    onPrint: () => void;
}

function NoteCTAs({
    onShare, onDownload, onPrint
}: NoteCTAsProps){
    return(
        <div className="flex flex-col gap-2 pl-2 pb-2 mt-3">
        <Button
            label="Partager"
            icon={<Share />}
            iconPosition="left"
            variant="outline"
            className="max-md:mr-1"
            onClick={() => onShare()}
        />
        <Button
            label="Telecharger"
            icon={<Download />}
            iconPosition="left"
            variant="outline"
            className="max-md:mr-1 max-sm:mt-1"
            onClick={() => onDownload()}
        />
        <Button
            label="Imprimer"
            icon={<Printer />}
            iconPosition="left"
            variant="outline"
            className="max-md:mt-1"
            onClick={() => onPrint()}
        />
    </div>
    )
}

export { NoteCTAs }