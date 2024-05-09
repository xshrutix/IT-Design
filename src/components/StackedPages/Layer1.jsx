import "./styles.css";

function Vertical1() {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

        <div className="flex flex-col justify-center p-6 mr-4 sm:mr-8 lg:mr-20 text-center sm:text-left rounded-sm lg:max-w-md xl:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-none">
            Application <span className="text-[#2a9df4]">Development</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-6 text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl">
            We specialize in creating exceptional Android solutions with a team of skilled developers who have strong programming fundamentals.

            <br className="hidden md:inline lg:hidden" />
          </p>

        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
}

export default Vertical1;
