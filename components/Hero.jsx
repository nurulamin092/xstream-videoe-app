import { getDictionary } from "@/app/[lang]/disctionaries";

const Hero = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  const {
    play,
    compete,
    follow,
    popular,
    streamers,
    heroDescription,
    videoDes,
    comingSoon,
    watchLater,
    duration,
    title,
    headLine,
  } = dictionary;
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {play}, {compete}
            <br />
            {follow}, {popular}
            <br />
            {streamers}
          </h1>
          <p className="text-gray-400 mb-8">{heroDescription}</p>
        </div>
        <div className="lg:col-span-2">
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0VtVPk7Zv9c"
              title="YouTube video player"
              frameBorder="0"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <div className="text-right">
                <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                  {comingSoon}
                </span>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{duration}</div>
                <p className="text-sm">{title}</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-400">{headLine}</p>
        </div>
      </main>
    </>
  );
};

export default Hero;
