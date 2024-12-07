import Image from "next/image";
const VideoCard = ({ video }) => {
  console.log("Video card data", video);
  return (
    <>
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
    </>
  );
};

export default VideoCard;
