import Contact from "./components/Contact/Contact"
import './Contact.css'
import { MdLocationCity } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Banner from "./components/Contact/Header";


const ContactPage = () => {
    return (
        <div className="mt-[200px]  sm:mt-36">
            <Banner />
            <div className="text-4xl mt-[60px] sm:text-7xl text-center sm:mt-[130px]">
                Get in <span className="text-[#2a9df4]">Touch</span>
            </div>
            <div className="mx-4 flex  flex-col items-center py-8 sm:flex-row justify-between gap-8">
                <div className="contact-card">
                    <div className="card-c">
                        <div className="front-card">
                            <MdLocationCity className="text-5xl" />
                            <p className="front-heading">Visit Us Daily</p>
                            <p className="text-center">H-57, Floor 3, H Block, Sector 63, Noida, Uttar Pradesh 201301</p>
                        </div>
                        <div className="back-card">
                            <MdLocationCity className="text-5xl" />
                            <p className="front-heading">Visit Us Daily</p>
                            <p className="text-center">H-57, Floor 3, H Block, Sector 63, Noida, Uttar Pradesh 201301</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="card-c">
                        <div className="front-card">
                            <FiPhoneCall className="text-5xl" />
                            <p className="front-heading">Contact Us</p>
                            <p className="text-center">+ 1 008-345-6789
                                <br />
                                +1 800-789-4561</p>
                        </div>
                        <div className="back-card">
                            <FiPhoneCall className="text-5xl" />
                            <p className="front-heading">Contact Us</p>
                            <p className="text-center">+ 1 008-345-6789
                                <br />
                                +1 800-789-4561</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="card-c">
                        <div className="front-card">
                            <MdOutlineMail className="text-5xl" />
                            <p className="front-heading">Email Us</p>
                            <p className="text-center">Sotcoxinfo@example.com
                                <br />
                                Webyourinfo@gmail.com</p>
                        </div>
                        <div className="back-card">
                            <MdOutlineMail className="text-5xl" />
                            <p className="front-heading">Email Us</p>
                            <p className="text-center">Sotcoxinfo@example.com
                                <br />
                                Webyourinfo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


            <Contact />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.094498141348!2d77.37346377472659!3d28.626929775667804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffbf733c313%3A0x5182ce4e704229b5!2sVMS%20TECHS!5e0!3m2!1sen!2sin!4v1715104067509!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div >
    )
}

export default ContactPage