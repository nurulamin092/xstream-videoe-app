import Image from "next/image";
import Link from "next/link";
const VideoCard = ({ video, lang }) => {
  console.log("Video card data", video);
  return (
    <>
      <Link href={`${lang}/videos/${video.videoId}`}>
        <div className="rounded-lg overflow-hidden bg-color-gray">
          <Image
            className="w-full h-40 object-cover"
            src={video.thumbnail}
            alt={video.title}
            width={100}
            height={100}
          />
          <div className="p-2">
            <p className="font-semibold">{video.title}</p>
            <p className="text-sm text-gray-400">{video.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
