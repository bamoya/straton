import config from "@/app/config/index.json";
import Link from "next/link";

const CTA = () => {
  const cta = config.cta;
  return (
    <section className="text-white relative bg-[url('/assets/images/hero.jpg')]  bg-cover bg-center body-font  ">
      <div className="absolute  inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-80 "></div>

      <div className="relative container px-5 py-5 md:py-16 mx-auto opacity-100 ">
        <div className="flex flex-col items-center text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            {cta.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
            {cta.description}
          </p>
          <Link
            href={cta.buttonAction.href}
            className=" mt-12 text-right w-fit font-semibold  text-gray-900 bg-white border-0  py-2 px-6 hover:bg-gray-900 hover:text-white focus:outline-none rounded text-lg shadow-sm"
          >
            {cta.buttonAction.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
