"use client";
import { contact } from "@/app/config/index.json";

const Contactus = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
            {contact.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {contact.description}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex justify-center flex-wrap flex-row-reverse -m-2">
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600 ">
                  الهاتف
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600 ">
                  الايميل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600">
                  اسم المشروع
                </label>
                <input
                  type="text"
                  id="projectNamme"
                  name="projectNamme"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600">
                  {contact.projectInput.title}
                </label>
                <select className="h-10 w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  {contact.projectInput.options.map((option, idx) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600">
                  {contact.serviceInput.title}
                </label>
                <select className="h-10 w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  {contact.serviceInput.options.map((option, idx) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-2 w-full max-w-sm sm:max-w-none">
              <div className="relative text-right">
                <label className="leading-7 text-sm text-gray-600">
                  اخبرنا عن مشروعك
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;