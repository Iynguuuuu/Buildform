import { useState } from "react";
import { MdOutlineSubdirectoryArrowLeft, MdPeople } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div className="w-[100%] mt-4 py-5 px-8">
            <div><img src="../public/Images/logo.jpg" alt="logo" /></div>

            {!showForm ? (
                <div className="flex flex-row mt-[8rem]">
                    <div className="ml-[4rem] ">
                        <p className="text-4xl font-bold">Launch your Data Career in <br /> Weeks, not Years</p><br />
                        <p className="text-2xl text-gray-600">What to expect: <br />
                            - <span className="font-bold">Short-answer</span> questions & <span className="font-bold">No</span> cover letter <br />
                            - Takes 4 mins on average</p>

                        <div className="flex flex-row space-x-3 ">
                            <div>
                                <button
                                    className="mt-[2rem] px-4 py-1 rounded font-bold text-[28px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                    onClick={handleButtonClick}
                                >
                                    Start Your Journey
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <p className="mt-[44px] text-[11px]">press <span className="font-bold">Enter</span></p>
                                <MdOutlineSubdirectoryArrowLeft className="text-[10px] ml-[2px] mt-[47px]" />
                            </div>
                        </div>

                        <div className="flex flex-row space-x-3 mt-3">
                            <MdPeople className="text-[15px]" />
                            <p className="mt-[-5px]">45 people have filled this out</p>
                        </div>
                    </div>

                    <div className="mt-[-10rem] ml-[6rem] items-center">
                        <img width={800} height={500} src="../public/Images/home.jpg" alt="homeimg" />
                    </div>
                </div>
            ) : (
                <div className="mt-[8rem] mx-auto w-[60%]">

                    <p className="flex flex-row text-[24px] font-semibold"> <span className="flex flex-row text-[18px] text-[#d596ec]">1 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                        <span className="mt-[-4px] ml-[10px]">Before we start, what is your name?</span></p>
                    <form className="mt-[1rem] ml-[40px]">
                        <div className="mb-6">
                            <label className="block text-[#d596ec] text-[18px]  mb-2" htmlFor="firstName">
                                First name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2  text-[#d596ec] 
                                leading-tight focus:outline-none focus:border-[#aa56c9]  custom-placeholder text-[25px] font-semibold"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#d596ec] text-[18px] mb-2" htmlFor="lastName">
                                Last name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Smith"
                                className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2  text-[#d596ec] 
                                leading-tight focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                            />
                        </div>
                        <div className="flex flex-row space-x-3 ">
                            <div>
                                <button
                                    className="mt-[2rem] px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]">
                                    OK
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <p className="mt-[44px] text-[11px]">press <span className="font-bold">Enter</span></p>
                                <MdOutlineSubdirectoryArrowLeft className="text-[10px] ml-[2px] mt-[47px]" />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Home;
