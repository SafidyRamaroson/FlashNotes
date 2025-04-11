import { getInjection } from "@/core/di/container";
import { SYMBOLS } from "@/core/di/di.types";
import { UnauthorizedError } from "@/core/entities/errors/auth";
import { NotFoundError } from "@/core/entities/errors/common";
import { TagCreateType } from "@/core/entities/models/tag.model";
import { TagsUseCaseImpl } from "@/core/infrastructure/use-cases/tags-use-case";
import { serializeUseCacheCacheStore } from "next/dist/server/resume-data-cache/cache-store";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        //use session to check the current user
        const userId = "user1"
        const { name } = await req.json();
        const tagsUseCase = getInjection("TagsUseCase")

        if (!userId) {
            throw new UnauthorizedError("Unauthorized error for creating tag , cause : undefined user")
        }

        const newTag = await tagsUseCase.createTagForUserUsecase({
            tag: {
                name
            }
        }, userId);

        return NextResponse.json({
            message: "Tag created successfully",
            data: newTag
        }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({
            sucess: false,
            message: error
        }, {
            status: 500
        })
    }
}


export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const tagsUseCase = getInjection("TagsUseCase");
        const userId = req.nextUrl.searchParams.get("userId");

        if (!userId) {
            throw new NotFoundError("User not found")
        }

        const tags = await tagsUseCase.getTagsWithNotesCountForUserUseCase(userId);
        return NextResponse.json({
            sucess: true,
            message: "All tags for user",
            data: tags
        }, {
            status: 200
        });

    } catch (error) {
        //TODO: Create an Error handler
        return NextResponse.json({
            sucess: false,
            message: error
        }, {
            status: 500
        })
    }
}
