'use client';

import { useParams } from "next/navigation";


export default function ProductDetailPage(){
    const { id } = useParams<{id:string}>();

    return(
        <div>
            <h1>Détail d'un produit { id }</h1>
        </div>
    )
}