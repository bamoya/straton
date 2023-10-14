import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import config from "@/app/config/index.json";

const ContactCards = () => {
  const contactinfo = config.contact.contactinfo;
  return (
    <div className="flex flex-wrap py-12 -m-4 text-left justify-center">
      <div className="p-4 max-w-xs lg:max-w-sm lg:w-1/4  w-full ">
        <div className="border-2 bg-white shadow-sm border-gray-200 hover:border-orange-500 px-4 py-6 flex gap-4 rounded-lg">
          <HiOutlineMail className="text-orange-500 w-10 h-10  mb-3 inline-block" />
          <div>
            <h2 className="title-font font-medium text-xl text-gray-900">
              Email
            </h2>
            <p className="leading-relaxed">{contactinfo.email}</p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-xs lg:max-w-sm lg:w-1/4  w-full">
        <div className="border-2 bg-white shadow-sm border-gray-200 hover:border-orange-500 px-4 py-6 flex gap-4 rounded-lg">
          <HiOutlinePhone className="text-orange-500 w-10 h-10  mb-3 inline-block" />
          <div>
            <h2 className="title-font font-medium text-xl text-gray-900">
              Phone
            </h2>
            <p className="leading-relaxed">{contactinfo.phone}</p>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-xs lg:max-w-sm lg:w-1/4 w-full">
        <div className="border-2 bg-white shadow-sm border-gray-200 hover:border-orange-500 px-4 py-6 flex gap-4 rounded-lg">
          <BiMap className="text-orange-500 w-10 h-10  mb-3 inline-block" />
          <div>
            <h2 className="title-font font-medium text-xl text-gray-900">
              Location
            </h2>
            <p className="leading-relaxed">{contactinfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
