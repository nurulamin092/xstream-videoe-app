import YouMakeLike from "./YouMakeLike";

const VideoDetails = ({ video, relatedVideos }) => {
  return (
    <>
      <main className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <div className="relative">
            <iframe
              src="https://www.youtube.com/embed/hecODa5ZgZM"
              title="YouTube video player"
              frameborder="0"
              className="w-full aspect-video h-[500px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex items-center space-x-4">
                <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
                <span className="text-sm">46:02</span>
                <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                  Donate
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">{video.title}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{video.description}</p>
            </div>
            <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">You may like</h2>
          {relatedVideos.map((video) => (
            <YouMakeLike key={video.videoId} video={video} />
          ))}
        </div>
      </main>
    </>
  );
};

export default VideoDetails;