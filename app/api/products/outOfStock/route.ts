import { ProductDTOMapper } from "@/utils/DTOMapper";
import { NextRequest, NextResponse } from "next/server";
import type { ProductDTO } from "@/utils/DTOMapper";
import { RepositoryProvider } from "@/providers";
import { prisma } from "@/lib/prisma/prisma";
import { createResponse } from "@/utils/responseUtils";
import { handleError } from "@/utils/errors/handler";

export const GET = async (req: NextRequest) => {
    try {
        // Get only products having stock < minimumThreshold
        const lowStockProducts = await RepositoryProvider.productRepository.findMany({
            where: {
                stock: {
                    lt: prisma.product.fields.minimumThreshold
                }
            }
        })

        // Format low stock products to ProductDTO
        const lowStockProductsDTO: ProductDTO[] = ProductDTOMapper.fromProducts(lowStockProducts);

        return NextResponse.json(createResponse(lowStockProductsDTO, "Produits en faible stock récupérés avec succès"), {
            status: 200,
        });
    } catch (error) {
        return handleError(error);
    }
}