import Image from "next/image";
import config from "@/app/config/index.json";

const Hero = () => {
  const mainHero = config.mainHero;
  const title = mainHero.title;
  const description = mainHero.description;
  const button = mainHero.buttonAction;
  const imageSrc = mainHero.img;
  return (
    <section className="text-gray-600 body-font text-right">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imageSrc}
          /> */}
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={imageSrc}
            width={"720"}
            height={"600"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-meduim text-gray-900 w-full md:text-right">
            {title}
            {/* <br className="hidden lg:inline-block" />
            readymade gluten */}
          </h1>
          <p className="mb-8 text-center leading-relaxed md:text-right">
            {description}
          </p>
          <div className="flex w-full justify-center md:justify-end">
            <button className="inline-flex font-meduim text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              {button.text}
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
