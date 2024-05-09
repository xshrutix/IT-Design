import ButtonGradient from "./assets/svg/ButtonGradient"
import { HeroSection } from "./components/AboutUs/Banner"
import Cards from "./components/AboutUs/Cards"
import AboutHero from "./components/AboutUs/Hero"
import { MissionAndVisionCard } from "./components/AboutUs/MissionCard"


const About = () => {
    return (
        <>
            <div className="mt-[200px] sm:mt-28">
                <AboutHero />
                <Cards />

            </div>
            <ButtonGradient />
        </>

    )
}

export default About