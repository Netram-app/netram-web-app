export const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our</span>
            </span>{' '}
             Locations
          </h2>
          
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-800 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-800 origin-left transform scale-x-0 bg-green-700 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-800 origin-bottom transform scale-y-0 bg-green-700 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-800 origin-right transform scale-x-0 bg-green-700 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-800 origin-top transform scale-y-0 bg-green-700 group-hover:scale-y-100" />
          <div className="relative flex flex-col items-center h-full py-10 duration-800 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-green-700 sm:text-5xl">
              Delhi
              </h6>
              <p className="text-center md:text-base">
              I -1791, C R Park, near IDBI Bank.
Delhi 110019, Delhi
              </p>
            </div>
            <div className="w-56 h-1 transition duration-800 transform bg-green-800 rounded-full group-hover:bg-green-700 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-green-700 sm:text-5xl">
                106.5K
              </h6>
              <p className="text-center md:text-base">
                Lorem ipsum elit consectetur sit amet, adipiscing dolor.
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  };