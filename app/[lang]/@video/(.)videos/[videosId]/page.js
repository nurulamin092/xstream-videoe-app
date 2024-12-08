

import Modal from '@/components/Modal';
import VideoDetails from '@/components/VideoDetails';
import videos from '@/data/videos.json';

const VideosDetailPage = ({ params: { videosId } }) => {

    const videoFound = videos.find(video => video.videoId === videosId);

    const relatedVideos = videos.filter(video => video.videoId !== videosId)
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