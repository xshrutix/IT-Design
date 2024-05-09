import ClipPath from "../../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitImage2 } from "../../assets";




const benefits = [
    {
        id: "0",
        title: "Our Mission",
        text: "Our mission is to deliver client-centric solutions that bring maximum productivity with minimum resources while upholding service delivery principles. We aspire to bring in result-oriented strategies to carve product design and creation procedures.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Our Vision",
        text: "Our mission is to deliver client-centric solutions that bring maximum productivity with minimum resources while upholding service delivery principles. We aspire to bring in result-oriented strategies to carve product design and creation procedures.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },

];

const Cards = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row justify-center gap-10 mb-10">
            {benefits.map((item) => (
                <div
                    className="block relative max-w-[15rem] bg-no-repeat bg-[length:100%_100%] md:max-w-[28rem]"
                    style={{
                        backgroundImage: `url(${item.backgroundUrl})`,
                    }}
                    key={item.id}
                >
                    <div className="relative z-50 flex flex-col  py-[4.4rem] px-[1rem] pointer-events-none">
                        <h5 className="h5 mb-5">{item.title}</h5>
                        <p className="body-2  text-n-3">{item.text}</p>
                        {/* <a className="flex items-center mt-auto z-50">
                            <img
                                src={item.iconUrl}
                                width={48}
                                height={48}
                                alt={item.title}
                            />




                            <Arrow />
                        </a> */}
                    </div>




                    <div
                        className="absolute inset-0.5 bg-n-8"
                        style={{ clipPath: "url(#benefits)" }}
                    >
                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                            {item.imageUrl && (
                                <img
                                    src={item.imageUrl}
                                    width={300}
                                    height={362}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>

                    <ClipPath />
                </div>
            ))}
        </div>
    )
}

export default Cards
