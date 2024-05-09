import Section from "./Section";
import Heading from "./Heading";
import { service1 } from "../../assets";
import Banner from "./Header";



const AboutHero = () => {
    return (
        <>
            <Banner />
            <Section id="how-to-use">
                <div className="container mt-[40px] sm:mt-[90px]">

                    <div className="relative">
                        <div className="relative z-1 flex items-center h-[50rem] mb-5 p-2   overflow-hidden lg:p-22 xl:h-[36rem]">
                            <div className="absolute top-0 left-0 w-full h-4/5 pointer-events-none md:w-3/5 xl:w-auto mt-2 mb-2">
                                <img
                                    className="w-full h-full object-cover md:object-right"
                                    width={400}
                                    alt="Smartest AI"
                                    height={500}
                                    src={service1}
                                />
                            </div>

                            <div className="relative z-1 max-w-[40rem] ml-auto">
                                <h4 className="h4 mb-4">About <span className="text-[#2a9df4]">Company</span> </h4>
                                <p className="body-2 text-[20px] mb-[3rem] text-n-3 lg:text-[16px]">
                                    The World’s IT Solution's Company
                                </p>
                                <p className="text-[14px] lg:text-[16px]  mb-10">
                                    Our state-of-the-art solutions make us your trusted technology partner. With a clientele across the globe, we tend to build futuristic Software products that help them overhaul their conventional & complex challenges. We have been accredited with many prestigious recognitions for our quality services in the IT industry. Our wide range of services includes mobile and web app development using the latest technologies and ensuring a smart, collaborative and systematic management of all human resources working towards the common and ultimate goal of our organization.
                                </p>

                            </div>


                        </div>


                    </div>
                </div>
            </Section>
        </>
    );
};

export default AboutHero;
