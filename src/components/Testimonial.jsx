import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

const testimonialList = [
    {
        author: {
            fullName: "Julie Rosie",
            picture:
                "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1715191644~exp=1715195244~hmac=e70962fc603a681eb92a886e9325bbcff2c5c6df96f1ec74362fd105e0e880f5&w=996",
            designation: "Founder / CEO",
        },
        rating: 3.5,
        description:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
    },
    {
        author: {
            fullName: "Raima Sen",
            picture: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715126400&semt=sph",
            designation: "HR Manager",
        },
        rating: 4,
        description:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
    },
    {
        author: {
            fullName: "Julie Rosie",
            picture: "https://img.freepik.com/free-photo/young-woman-with-curly-hair-headphones_273609-10258.jpg?size=626&ext=jpg&ga=GA1.1.1317226149.1715192786&semt=sph",
            designation: "UI Designer",
        },
        rating: 5,
        description:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
    },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
    <p className={classNames("mb-6", className)} {...rest}>
        <span>
            {[...Array(5)].map((_, i) => {
                const index = i + 1;
                let content = "";
                if (index <= Math.floor(rating))
                    content = (
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                    );
                else if (rating > i && rating < index + 1)
                    content = (
                        <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
                    );
                else if (index > rating)
                    content = (
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-200 dark:text-opacity-20"
                        />
                    );

                return <Fragment key={i}>{content}</Fragment>;
            })}
        </span>
        {showLabel && <span>{rating.toFixed(1)}</span>}
    </p>
);

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
};

export const TestimonialSlider = () => {
    const [index, setIndex] = useState(0);
    const { author, description, rating } = testimonialList[index];

    const handleControl = (type) => {
        if (type === "prev") {
            setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
        } else if (type === "next") {
            setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
        }
    };
    return (
        <section className="ezy__testimonial13 relative py-14 md:py-24 bg-transparent text-white z-[1]">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center text-center mb-6 lg:mb-12">
                    <div className="max-w-md">
                        <h2 className="text-3xl leading-none md:text-[40px] font-bold mb-6">
                            Community <spna className="text-[#2a9df4]">Reviews</spna>
                        </h2>
                        <p className="">
                            Assumenda non repellendus distinctio nihil dicta sapiente,
                            quibusdam maiores, illum at qui.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-1"></div>
                    <div className="col-span-12 lg:col-span-5 text-center">
                        <img
                            src={author.picture}
                            alt={author.fullName}
                            className="max-w-full h-auto w-full rounded-2xl"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5" />
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5">
                        <div className="bg-[#2d195c] shadow-xl text-white mt-4 lg:-mt-[50%] p-6 md:py-12">
                            <div className="md:px-6">
                                <h3 className="text-3xl font-medium mb-2">{author.fullName}</h3>
                                <Rating rating={rating} showLabel={false} />
                                <p>{description}</p>
                            </div>
                            <div className="md:px-6 mt-12">
                                <button
                                    className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                                    onClick={() => handleControl("prev")}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button
                                    className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                    onClick={() => handleControl("next")}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};