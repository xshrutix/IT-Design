import { CareerPage } from '../CareerPage/Career';
import Banner from './Banner';
import './Career.css';
import SurveyComponent from './Form';

const Career = () => {
    return (
        <div className='mt-[200px]  sm:mt-36'>

            <div className='mt-0'>
                <Banner />

                <div className='mt-12 sm:mt-36'>
                    <div className='mb-6'>
                        <div className='text-xl text-center '>
                            We Hire People Who Think Creatively Hence
                        </div>
                        <div className='text-center text-5xl mt-4  text-white'>
                            We are <span className='text-[#2a9df4]'>Hiring</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">

                        <SurveyComponent />

                    </div>


                </div>

            </div>
            {/* <CareerPage /> */}
        </div>
    );
};

export default Career;
