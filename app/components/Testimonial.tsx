import config from "@/app/config/index.json";

const Testimonial = () => {
  const testimonial = config.testimonial;
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-5 md:py-24  mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900 mb-4">
            {testimonial.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            {testimonial.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-0 -m-4">
          {testimonial.items.map((item, idx) => (
            <div
              key={idx}
              className="lg:w-1/4 lg:mb-0 mb-6 p-4 rounded-lg border-2 border-gray-100  shadow-sm"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-50 bg-orange-100"
                  src={item.img}
                />
                <p className="leading-relaxed">{item.description}</p>
                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {item.name}
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
