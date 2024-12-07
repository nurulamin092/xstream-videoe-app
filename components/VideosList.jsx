"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

const VideosList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await import("@/data/videos.json");
        setVideos(res.default);
      } catch (error) {
        console.error("Failed to load videos:", error);
      }
    };
    fetchVideos();
  }, []);
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
          {videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VideosList;
