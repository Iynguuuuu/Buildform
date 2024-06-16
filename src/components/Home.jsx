import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { MdPeople } from "react-icons/md";

const Home = () => {
  return (
    <div className=" w-[100%] mt-4 py-5 px-8">
    <div><img src="../public/Images/logo.jpg" alt="logo" /></div>

    <div className="flex flex-row mt-[8rem]">
      <div className="ml-[4rem] ">
        <p className="text-4xl font-bold">Launch your Data Career in <br /> Weeks, not Years</p><br />
        <p className="text-2xl text-gray-600">What to expect: <br />
          - <span className="font-bold">Short-answer</span> questions & <span className="font-bold">No</span> cover letter <br />
          - Takes 4 mins on average</p>

        <div className="flex flex-row space-x-3 ">
          <div><button className="mt-[2rem] px-4 py-1 rounded font-bold text-[28px] text-white bg-[#d596ec] hover:bg-[#daa7ed]">Start Your Journey</button></div>
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
  </div>
  )
}

export default Home