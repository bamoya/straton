import Image from "next/image";
import config from "@/app/config/index.json";
import Link from "next/link";

const Hero = () => {
  const mainHero = config.mainHero;
  return (
    <section className="text-gray-600 body-font text-right ">
      <div className="container mx-auto flex px-5 py-5 md:py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imageSrc}
          /> */}
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={mainHero.img}
            width={"720"}
            height={"600"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-center  sm:text-5xl text-3xl mb-4 text-gray-900 w-full md:text-right">
            <span className="text-base  sm:text-xl mb-3 inline-block font-medium">
              {mainHero.title}
            </span>
            <br />
            {mainHero.subtitle}
          </h1>
          <p className="mb-8 text-center text-base sm:text-lg leading-relaxed md:text-right">
            {mainHero.description}
          </p>
          <div className="flex w-full justify-center md:justify-end">
            <Link
              href={mainHero.buttonAction.href}
              className="inline-flex font-meduim text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
            >
              {mainHero.buttonAction.text}
            </Link>
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
