import VideoDetails from '@/components/VideoDetails';
import videos from '@/data/videos.json';
import VideoNotFound from './not-found';

const VideosDetailPage = ({ params: { videosId } }) => {

    const videoFound = videos.find(video => video.videoId === videosId)
    if (!videoFound) {
        return <VideoNotFound videoId={videosId} />
    }
    return (
        <>
            <VideoDetails videoFound={videoFound} />
        </>
    );
};

export default VideosDetailPage;