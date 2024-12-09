const VideoNotFound = ({ videoId }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500">Video Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        This video with ID <span className="font-mono text-blue-500">{videoId ?? "unknown"}</span> was not found!
      </p>
    </div>
  );
};

export default VideoNotFound;
