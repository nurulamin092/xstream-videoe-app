import Link from "next/link";
const VideosList = () => {
    return (
        <>
            <section class="mt-12">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-semibold">Streams of the day</h2>
                    <Link href="/" className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full">View all</Link>
                </div>
            </section>
        </>
    );
};

export default VideosList;