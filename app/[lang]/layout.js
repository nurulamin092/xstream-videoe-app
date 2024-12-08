import Header from "@/components/Header";
import Hero from "@/components/Hero";


const VideosLayout = ({ children, home, video }) => {
    return (
        <>
            <Header />
            <Hero />
            {children}
            {home}
            {video}

        </>
    );
};

export default VideosLayout;