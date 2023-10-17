import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen font-messiri text-right">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h1 className="text-4xl text-right mb-4 font-bold">
              شكرا لك على ثقتك بنا
            </h1>
          </div>
          <div> سنقوم بالاتصال بك لاحقا</div>
          <div>
            <Link
              href="/"
              className="mt-6 flex items-center px-4 py-2 text-white bg-orange-500 border border-orange-500  rounded-full hover:bg-orange-600 hover:cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-sm font-medium">الرئيسية</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
