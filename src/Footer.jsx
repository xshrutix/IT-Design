import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-12 z-48 absolute  w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
                    {/* Logo and Company Info */}
                    <div className="flex flex-col items-start">
                        <img src="https://vmstechs.com/assets/images/oldlogo-dark.png" alt="Logo" className="w-24 mb-4" />
                        <p className="text-sm">We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-2 sm:ml-8">
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Home</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">About</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Career</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Contact</a>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Teams</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Terms & Conditions</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 block">Help</a>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 flex items-center"><FaMapMarkerAlt className="mr-2 text-[22px] sm:text-xl" /> H-57, 3rd Floor, H Block, Sector 63, Noida, UP</p>
                        <p className="text-gray-400 flex items-center"><FaEnvelope className="mr-2" /> info@vmstechs.com</p>
                        <p className="text-gray-400 flex items-center"><FaPhone className="mr-2" /> +01 234 567 88</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-slate-900 py-4 mt-8">
                <div className="container mx-auto text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Your Company. All Rights Reserved.
                    <span className="block">Designed  by <a href="#" className="text-gray-400 hover:text-gray-200">VMS Techs</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
