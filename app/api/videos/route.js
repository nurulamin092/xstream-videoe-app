
import videos from "@/data/videos"

const GET = async () => {
    return Response.json(videos)
}


export { GET }
