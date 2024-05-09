// Banner.js


const Banner = () => {
    return (
        <div className="relative">
            <div
                className="absolute top-0 left-0 w-full h-[200px] bg-cover bg-center z-0 sm:h-[300px]"
                style={{
                    backgroundImage:
                        "url('https://t3.ftcdn.net/jpg/05/48/67/60/360_F_548676071_saIbSPi9WkNN2VlPSAtf5uZlAtCoZpaB.jpg')"
                }}
            />
            <div className="bg-transparent bg-opacity-75 absolute top-0 left-0 w-full h-full z-10" />

            <div className="container mx-auto relative z-20 flex flex-col items-center justify-center py-16 px-4">
                <h1 className="text-5xl font-bold text-center text-white mt-2">
                    Contact
                </h1>
                <nav className="mt-8" aria-label="Breadcrumb">
                    <ol className="list-none p-0 flex">
                        <li className="flex items-center">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Home
                            </a>
                            <svg
                                className="w-3 h-3 flex-shrink-0 fill-current text-gray-400 mx-2"
                                viewBox="0 0 448 512"
                            >
                                <path d="M168 442.7L12.686 287.314a23.997 23.997 0 0 1 0-34.03L168 69.333c7.59-7.575 20.005-7.575 27.6 0l155.314 155.314c9.373 9.373 9.373 24.569 0 33.941L195.6 442.7c-7.594 7.576-20.01 7.576-27.6 0z" />
                            </svg>
                        </li>
                        <li className="flex items-center">
                            <span className="text-white">Contact</span>
                        </li>
                    </ol>
                </nav>

            </div>
        </div>
    );
};

export default Banner;