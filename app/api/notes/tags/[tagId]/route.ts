import { getInjection } from "@/core/di/container";
import { TagUpdateType } from "@/core/entities/models/tag.model";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ tagId: string }> }) => {
    try {
        const tagsUseCase = getInjection("TagsUseCase");

        const tagId = (await params)?.tagId;
        console.log('tagId',tagId);
        const deletedTag = await tagsUseCase.deleteTagUseCase({ tagId },"user1");

        if (deletedTag) {
            return NextResponse.json({
                succss: true,
                message: "Tag deleted successfully",
                data: deletedTag
            }, {
                status: 200
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error
        }, {
            status: 500
        })
    }
}