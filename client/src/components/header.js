import { Blog } from "./blog";
import { Content } from "./content";
import { Faq } from "./faq";
import { Feature } from "./feacture"
import { Pricing } from "./pricing";
import { Statistic } from "./statics";
import { Step } from "./step";
import { Team } from "./team";



export const Header = () => {

  
  return (
    <>
    <div className="relative">
      <img
        src="https://i.postimg.cc/9FWktF4b/group.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12  ">
              <div className="backdrop-blur-lg hover:backdrop-blur-lg rounded shadow-2xl p-7 sm:p-10 invisible lg:visible">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Book an Appointment
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Your Full Name
                    </label>
                    <input
                      placeholder="Name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                     Mobile number
                    </label>
                    <input
                      placeholder="+91"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Select Speciality
                    </label>
                     <select id='state' name='state' className="form-control flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" required>
                      <option selected>Choose...</option>
                        <option value="Home Eye Testing">Home Eye Testing</option>
                         <option value="Eye check Up">Eye check Up</option>
                            <option value="Cataract surgery">Cataract surgery</option>
                                                <option value="Lasik surgery">Lasik surgery</option>
                                                <option value="Cornea Transplant">Cornea Transplant</option>
                                                <option value="ICL Procedure">ICL Procedure</option>
                                                <option value="Glaucoma treatment">Glaucoma treatment</option>
                                                <option value="Retina treatment">Retina treatment</option>
                                                <option value="Dry Eye">Dry Eye</option>
                                                <option value="DCR">DCR</option>
                         <option value="Oculoplasty">Oculoplasty</option>



                     </select>
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Appointment Date
                    </label>
                    <input
                      placeholder="Message...."
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>


                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={() => alert(" Appointment booked!")}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none"
                    >
                      Book
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We will reach you very Soon. On date time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Feature/>
      <Content/>
      <Pricing/>
      <Team/>
      <Faq/>
      <Step/>
      
      <Blog/>
      <Statistic/>
    </div>
    </>
  );
};