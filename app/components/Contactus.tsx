"use client";
import config from "@/app/config/index.json";
import ContactCards from "./ContactCards";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
  fullName: string;
  phone: number;
  email: string;
  projectName: string;
  projectType: string;
  service: string;
  message: string;
};

const Contactus = () => {
  const contact = config.contact;
  const form = useForm<FormValues>();

  const projectOptions = contact.projectInput.options.map((item) => {
    return { label: item, value: item };
  });

  const serivceOptions = contact.serviceInput.options.map((item) => {
    return { label: item, value: item };
  });

  // ----------------------------------
  const { register, control, handleSubmit, formState } = form;
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "no-cors",
      });

      if (response.ok) {
        // const responseData = await response.json();
        router.push("/thank-you");
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data:", response.status);
      }
    } catch (error) {
      console.error("Error saving data catch", error);
    }
    setIsLoading(false);
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                <Controller
                  name="projectType"
                  control={control}
                  rules={{
                    required: "اختر نوع المشروع",
                  }}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      isDisabled={isLoading}
                      ref={ref}
                      placeholder="اختر نوع المشروع"
                      options={projectOptions}
                      value={projectOptions.filter((c) => value === c.value)}
                      onChange={(val) => onChange(val?.value)}
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
                  )}
                />

                {errors?.projectType && (
                  <p className="text-red-600 pt-2">
                    {errors?.projectType?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="p-2 w-full sm:w-1/2 max-w-sm">
              <div className="relative text-right">
                <Controller
                  name="service"
                  control={control}
                  rules={{
                    required: "اختر نوع الحزمة",
                  }}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      isDisabled={isLoading}
                      ref={ref}
                      isMulti
                      name="service"
                      placeholder="اختر نوع الحزمة"
                      options={serivceOptions}
                      value={serivceOptions.find((obj) => obj.value === value)}
                      onChange={(list) =>
                        onChange(list.map((item) => item.value))
                      }
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
                  )}
                />

                {errors?.service && (
                  <p className="text-red-600 pt-2">
                    {errors?.service?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="p-2 w-full max-w-sm sm:max-w-none">
              <div className="relative text-right">
                {/* <label className="leading-7 text-sm text-gray-600">
                  
                </label> */}
                <textarea
                  disabled={isLoading}
                  id="message"
                  placeholder="اخبرنا عن مشروعك"
                  {...register("message", {})}
                  className="w-full text-right bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className={
                  "my-2 flex text-xl font-bold border-0 py-2 px-6 focus:outline-none text-white  rounded " +
                  (isLoading
                    ? "hover:cursor-default  bg-gray-500 hover:bg-gray-500"
                    : "bg-gradient-to-b from-orange-500	 hover:via-amber-500 hover:to-yellow-300    hover:from-red-500	 via-orange-500 to-amber-500")
                }
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
