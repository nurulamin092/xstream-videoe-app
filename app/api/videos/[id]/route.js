import videos from "@/data/videos.json"
import { NextResponse } from "next/server";

export async function GET(_req, { params: { id } }) {
    const videosId = videos.find(video => video.videoId === id);
    return Response.json(videosId)
}

export async function PATCH(req, { params: { id } }) {
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (videoIndex === -1) {
        return NextResponse.json({ error: "Video not found." }, { status: 404 });
    }

    let body;
    try {
        body = await req.json();
    } catch (error) {
        return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const { title, description, ...invalidFields } = body;

    if (Object.keys(invalidFields).length > 0) {
        return NextResponse.json(
            { error: "Only 'title' and 'description' fields can be updated." },
            { status: 400 }
        );
    }

    if (title !== undefined) {
        videos[videoIndex].title = title;
    }
    if (description !== undefined) {
        videos[videoIndex].description = description;
    }

    return NextResponse.json({ video: videos[videoIndex] }, { status: 200 });
}


export async function DELETE(_req, { params: { id } }) {
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (videoIndex === -1) {
        return NextResponse.json({ error: "Video not found." }, { status: 404 });
    }

    const deletedVideo = videos.splice(videoIndex, 1)[0];

    return NextResponse.json(
        { message: "Video deleted successfully.", video: deletedVideo },
        { status: 200 }
    );
}
