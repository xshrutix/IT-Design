export const HeroSection = () => {
    return (
        <div className="flex flex-row">
            <div className="w-full sm:w-3/5">
                <div className="container mx-auto sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-2xl font-bold">
                            About<span className="text-purple-700"> Company</span>
                        </div>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
                        </div>
                    </nav>
                    <header className="container px-4 py-8 lg:flex mt-10 items-center lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-3xl lg:text-4xl font-bold">Empowering <span className="text-purple-700">Innovation</span> and Excellence in IT Solutions</h1>
                            <div className="w-20 h-2 bg-green-700 my-4"></div>
                            <p className="text-md mb-10">VMS TECHS, a global leader in the IT industry, is dedicated to providing cutting-edge technology solutions that propel our clients' success. We continuously innovate across diverse domains and technologies, ensuring we stay ahead of the curve, with a relentless focus on excellence.
                                <br /><br />
                                We cultivate long-term relationships with our valued customers by working collaboratively towards long-term shared goals. We seamlessly integrate with our ecosystem partners to accelerate the development and delivery of their own intelligent products and services by leveraging the power of the latest technologies.
                                <br /><br />
                                Our passion is to provide tangible value to individuals, communities, and the global community. Through user-friendly interfaces, intelligent data management, and streamlined workflows, we strive to enhance lives, uplift communities, and transform spaces.
                                <br /><br />
                                Choose us as your trusted IT solution provider and experience the power of innovation, excellence, and value creation.</p>
                        </div>
                    </header>
                </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
                <img src="https://vmstechs.com/assets/images/resources/about-five-1-1.jpg" alt="Leafs" className="w-10/12 h-1/2" />
            </div>
        </div>
    )
}
