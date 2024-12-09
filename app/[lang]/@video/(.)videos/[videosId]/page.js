import Modal from '@/components/Modal';
import ModalO from '@/components/ModalO';
import VideoDetails from '@/components/VideoDetails';
const videos = () => import("@/data/videos.json").then((res) => res.default)
    .catch((err) => console.log(err));

const VideosDetailPage = async ({ params: { videosId } }) => {
    const data = await videos()

    const videoFound = data.find(video => video.videoId === videosId);

    const relatedVideos = data.filter(video => video.videoId !== videosId)
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