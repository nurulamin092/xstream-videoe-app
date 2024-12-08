import VideosList from "@/components/VideosList";
const HomePage = ({ params: { lang } }) => {
  return (
    <>
      <VideosList lang={lang} />
    </>
  );
};

export default HomePage;
