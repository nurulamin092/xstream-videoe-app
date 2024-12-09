import Link from "next/link";
import VideoCard from "./VideoCard";
const videos = () =>
  import("@/data/videos.json")
    .then((res) => res.default)
    .catch((err) => console.log(err));
const VideosList = async ({ lang }) => {
  const data = await videos();
  return (
    <>
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Streams of the day</h2>
          <Link
            href="/"
            classNameName="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((video) => (
            <VideoCard key={video.videoId} video={video} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VideosList;
