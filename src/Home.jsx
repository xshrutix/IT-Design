import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import { CookieConsent } from "./components/CookieConsent";
import Hero from "./components/Hero";
import Stack from "./components/StackedPages/Stack";
import { Statistic } from "./components/Stat";
import TestimonialSection from "./components/Testimonials/Testimonials";
import { smallSphere, stars } from "./assets";
import { TestimonialSlider } from "./components/Testimonial";





const Home = () => {
    return (
        <>

            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden h-full">
                <CookieConsent />
                <Hero />
                <Benefits />
                <Statistic />
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        className="relative z-1"
                        width={255}
                        height={255}
                        alt="Sphere"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img
                            src={stars}
                            className="w-full"
                            width={950}
                            height={400}
                            alt="Stars"
                        />
                    </div>
                </div>

                <Stack />
                <div className="z-50 relative bg-black">
                    <TestimonialSlider />
                </div>

                {/* <TestimonialSection /> */}
            </div>

            <ButtonGradient />
        </>

    );
};

export default Home;
