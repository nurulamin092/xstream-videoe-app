import VideoNotFound from '@/app/[lang]/videos/[videosId]/not-found';
import Modal from '@/components/Modal';
import VideoDetails from '@/components/VideoDetails';

const videos = () =>
    import("@/data/videos.json")
        .then((res) => res.default)
        .catch((err) => {
            console.error("Error loading videos:", err);
            return [];
        });



const VideosDetailPage = async ({ params: { videosId } }) => {
    const data = await videos();
    const videoFound = data.find((video) => video.videoId === videosId);

    if (!videoFound) {
        return (
            <Modal>
                <VideoNotFound videoId={videosId} />
            </Modal>
        );
    }

    const relatedVideos = data.filter((video) => video.videoId !== videosId)
        .sort(() => Math.random() - 0.5).slice(0, 3)

    return (
        <>
            <Modal>
                <VideoDetails video={videoFound} relatedVideos={relatedVideos} />
            </Modal>
        </>
    );
};

export default VideosDetailPage;