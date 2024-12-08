import VideoDetails from '@/components/VideoDetails';
import videos from '@/data/videos.json';

const VideosDetailPage = ({ params: { videosId } }) => {

    const videoFound = videos.find(video => video.videoId === videosId)
    return (
        <>
            <VideoDetails videoFound={videoFound} />
        </>
    );
};

export default VideosDetailPage;