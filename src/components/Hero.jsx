import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

export default function Hero() {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth > 760 ? heroVideo : smallHeroVideo
    );

    const handleVideoSrc = () => {
        if (window.innerWidth > 760) {
            setVideoSrc(heroVideo);
        } else {
            setVideoSrc(smallHeroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrc);

        return () => {
            window.removeEventListener("resize", handleVideoSrc);
        };
    }, []);

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 1.5,
        });

        gsap.to("#cta", {
            opacity: 1,
            y: -50,
            delay: 1.5,
        });
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    Iphone 15 pro
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}
                        className="pointer-events-none"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <button className="btn cursor-pointer">Buy</button>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    );
}
