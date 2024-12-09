import Hero from "./Hero";
import YouMakeLike from "./YouMakeLike";

const VideoDetails = ({ video, relatedVideos = [] }) => {
  if (!video) {
    return <p className="text-red-500">Video details are unavailable.</p>;
  }
  return (
    <>
      <main className="flex flex-col lg:flex-row gap-6">
        <Hero />
        <div className="lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">You may like</h2>
          {relatedVideos.length > 0 ? (
            relatedVideos.map((video) => (
              <YouMakeLike key={video.videoId} video={video} />
            ))
          ) : (
            <p className="text-gray-500">No related videos found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default VideoDetails;
