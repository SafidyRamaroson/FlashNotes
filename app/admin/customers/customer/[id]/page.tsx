"use client";

import { useParams } from "next/navigation";



export default function CustomerDetailPage(){
    const { id } = useParams<{ id:  string}>();
    return(
        <div>
            <h1>Détails d'un client { id }</h1>
            <div>Liste commandes passées </div>
        </div>
    )
}