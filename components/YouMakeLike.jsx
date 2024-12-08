import Image from "next/image";

const YouMakeLike = ({ video }) => {
  return (
    <>
      <div className="flex items-start space-x-4">
        <Image
          src={video.thumbnail}
          alt={video.title}
          height={20}
          width={30}
          className="w-30 h-20 rounded object-cover"
        />
        <div>
          <h3 className="font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-400">Blitz</p>
          <p className="text-sm text-gray-400">26,389M</p>
        </div>
      </div>
    </>
  );
};

export default YouMakeLike;
