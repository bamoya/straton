"use client";
import config from "@/app/config/index.json";
import ContactCards from "./ContactCards";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";

type FormValues = {
  fullName: string;
  phone: number;
  email: string;
  projectName: string;
  projectType: string;
  // service: string;
  message: string;
};

const Contactus = () => {
  const contact = config.contact;
  const form = useForm<FormValues>();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const projectOptions = contact.projectInput.options.map((item) => {
    return { label: item, value: item };
  });

  const serivceOptions = contact.serviceInput.options.map((item) => {
    return { label: item, value: item };
  });

  const handleServicesChange = (options: any) => {
    setSelectedServices(options);
  };

  const handleProjectChange = (option: any) => {
    setSelectedProject(option.value);
  };

  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async ({ ...data }) => {
    console.log("subbmited", data);
    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const content = await rawResponse.json();

    // print to screen
    alert(content.data.tableRange);
  };
  return (
    <section
      id="contact"
      className="text-gray-600 bg-gray-100 body-font relative"
    >
      <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-bold  title-font mb-4 text-gray-900">
            {contact.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-lg text-base">
            {contact.description}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-4 rounded-lg shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center flex-wrap flex-row-reverse -m-2"
          >
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600">
                  الاسم الكامل
                </label> */}
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  id="fullName"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("fullName", {
                    required: " ادخل اسمك الكامل",
                  })}
                />
                {errors?.fullName && (
                  <p className="text-red-600 pt-2">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600 ">
                  الهاتف
                </label> */}
                <input
                  type="text"
                  placeholder="الهاتف"
                  id="phone"
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("phone", { required: "ادخل رقمك الخاص" })}
                />
                {errors?.phone && (
                  <p className="text-red-600 pt-2">{errors?.phone?.message}</p>
                )}
              </div>
            </div>

            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600 ">
                  الايميل
                </label> */}
                <input
                  type="email"
                  placeholder="الايميل"
                  id="email"
                  {...register("email", {
                    required: "ادخل ايميلك الخاص",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors?.email && (
                  <p className="text-red-600 pt-2">{errors?.email?.message}</p>
                )}
              </div>
            </div>

            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600">
                  اسم المشروع
                </label> */}
                <input
                  type="text"
                  placeholder="اسم المشروع"
                  id="projectName"
                  {...register("projectName", {
                    required: "أدخل اسم المشروع",
                  })}
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {errors?.projectName && (
                <p className="text-red-600 text-right pt-2">
                  {errors?.projectName?.message}
                </p>
              )}
            </div>

            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600">
                  {contact.projectInput.title}
                </label> */}
                <Select
                  id="projectType"
                  placeholder="اختر نوع المشروع"
                  options={projectOptions}
                  onChange={(value) => handleProjectChange(value)}
                  className="basic-multi-select"
                  styles={{
                    control: (styles, state) => ({
                      ...styles,
                      backgroundColor: "#fbf9f9",

                      border: state.isFocused
                        ? "1px solid rgb(249 115 22)"
                        : "",
                      outline: state.isFocused
                        ? "2px solid rgb(254 215 170)"
                        : "",
                      "&:hover": {
                        border: "default",
                      },
                    }),
                    placeholder: (defaultStyles) => {
                      return {
                        ...defaultStyles,
                        color: "rgb(156 163 175)",
                      };
                    },
                  }}
                  classNamePrefix="select"
                />

                {errors?.projectType && (
                  <p className="text-red-600 pt-2">
                    {errors?.projectType?.message}
                  </p>
                )}
              </div>
            </div>

            {/* <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                 <label className="leading-7 text-sm text-gray-600">
                  {contact.serviceInput.title}
                </label> 
                <select
                  id="service"
                  {...register("service", {
                    required: "اختر نوع الخدمة",
                  })}
                  className="h-10 w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option
                    className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value=""
                  >
                    {contact.serviceInput.title}
                  </option>
                  {contact.serviceInput.options.map((option, idx) => (
                    <option
                      className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      key={idx}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                {errors?.service && (
                  <p className="text-red-600 pt-2">
                    {errors?.service?.message}
                  </p>
                )}
              </div>
            </div> */}
            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <Select
                  isMulti
                  name="service"
                  placeholder="اختر نوع الحزمة"
                  options={serivceOptions}
                  onChange={handleServicesChange}
                  className="basic-multi-select text-right"
                  styles={{
                    control: (styles, state) => ({
                      ...styles,

                      backgroundColor: "#fbf9f9",

                      border: state.isFocused
                        ? "1px solid rgb(249 115 22)"
                        : "",
                      outline: state.isFocused
                        ? "2px solid rgb(254 215 170)"
                        : "",
                      "&:hover": {
                        border: "default",
                      },
                    }),
                    placeholder: (defaultStyles) => {
                      return {
                        ...defaultStyles,
                        color: "rgb(156 163 175)",
                      };
                    },

                    valueContainer: (defaultStyles) => {
                      return {
                        ...defaultStyles,
                        flexDirection: "row-reverse",
                        textAlign: "right",
                      };
                    },
                  }}
                  closeMenuOnSelect={false}
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div className="p-2 w-full max-w-sm sm:max-w-none">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600">
                  
                </label> */}
                <textarea
                  id="message"
                  placeholder="اخبرنا عن مشروعك"
                  {...register("message")}
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="my-2 flex text-xl font-bold  text-white bg-gradient-to-b from-orange-500	 hover:via-amber-500 hover:to-yellow-300   border-0 py-2 px-6 focus:outline-none hover:from-red-500	 via-orange-500 to-amber-500 rounded "
              >
                ارسال
              </button>
            </div>
          </form>
        </div>

        <ContactCards />
      </div>
      {/* <DevTool control={control} /> */}
    </section>
  );
};

export default Contactus;
