import Header from "@/components/Header";
import Hero from "@/components/Hero";


const VideosLayout = ({ children, home, video, params: { lang } }) => {
    return (
        <>
            <Header lang={lang} />
            <Hero lang={lang} />
            {children}
            {home}
            {video}

        </>
    );
};

export default VideosLayout;