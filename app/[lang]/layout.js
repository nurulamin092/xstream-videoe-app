import Header from "@/components/Header";
import Hero from "@/components/Hero";


const VideosLayout = ({ children, home }) => {
    return (
        <>
            <Header />
            <Hero />
            {children}
            {home}
        </>
    );
};

export default VideosLayout;