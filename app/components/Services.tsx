import config from "@/app/config/index.json";

const Services = () => {
  const services = config.services;
  return (
    <section id="services" className="text-gray-700  bg-gray-100  body-font">
      <div className="container px-5 py-12  md:py-24 mx-auto">
        <div className="text-center  mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold  title-font text-gray-900 mb-4">
            {services.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            {services.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:-m-4 -mx-4 md:-mb-10 -mt-4 gap-4 px-4 sm:px-0 md:space-y-0 mb-2">
          {services.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 bg-white shadow-sm  md:w-1/4 flex flex-col text-center items-center hover:cursor-pointer hover:scale-105 ease-in-out duration-150 hover:border-orange-500"
            >
              <div className="w-24 h-24 inline-flex p-2 items-center justify-center rounded-full bg-orange-100 mb-5 flex-shrink-0">
                <img src={item.icon} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl font-semibold title-font mb-3">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
};

export default Services;
