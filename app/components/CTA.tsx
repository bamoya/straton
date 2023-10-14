import config from "@/app/config/index.json";
import Link from "next/link";

const CTA = () => {
  const cta = config.cta;
  return (
    <section className="text-white relative bg-[url('/assets/images/hero.jpg')]  bg-cover bg-center body-font">
      <div className="absolute  inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-80 "></div>

      <div className="relative container px-5 py-12  md:py-16 mx-auto opacity-100 ">
        <div className="flex flex-col items-center justify-center text-center w-full mb-0">
          <span className="text-xl sm:text-2xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
            {cta.subtitle}
          </span>

          <h1 className="sm:text-5xl text-4xl font-bold title-font my-4 sm:my-8">
            {cta.title}
          </h1>

          <Link
            href={cta.buttonAction.href}
            className=" text-right w-fit font-bold text-xl  text-gray-900 bg-white border-0  py-2 px-6 hover:bg-gray-900 hover:text-white focus:outline-none rounded shadow-sm"
          >
            {cta.buttonAction.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
