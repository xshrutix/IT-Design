import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css"; // Import the CSS file

const TestimonialSection = () => {
    useEffect(() => {
        // No need for OwlCarousel initialization here in React
    }, []);

    return (
        <section className="testimonial-section bg-black z-30">
            <div className="large-container">
                <div className="sec-title text-center text-4xl">
                    <span className="title text-[#2a9df4]">Testimonial</span>
                    <h2>What Our core client say <span className="text-[#2a9df4]">?</span></h2>
                </div>

                <OwlCarousel
                    className="testimonial-carousel owl-carousel owl-theme"
                    items={1}
                    loop={true}
                    nav={true}
                    smartSpeed={300}
                    autoplay={true}
                    autoplayTimeout={7000}
                    navText={['<span class="arrow-left"></span>', '<span class="arrow-right"></span>']}
                >
                    <div className="testimonial-block">
                        <div className="inner-box ">
                            <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team</div>
                            <div className="info-box">
                                <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
                                <h4 className="name text-violet-200">U & S</h4>
                                <span className="designation">Ui Designer & CEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team</div>
                            <div className="info-box">
                                <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
                                <h4 className="name text-violet-200">U & S</h4>
                                <span className="designation">Ui Designer & CEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team</div>
                            <div className="info-box">
                                <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
                                <h4 className="name text-violet-200">U & S</h4>
                                <span className="designation">Ui Designer & CEO</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

                <div className="thumb-layer paroller">
                    <figure className="image"><img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt="" /></figure>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
