/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { MdOutlineSubdirectoryArrowLeft, MdPeople } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [formStep, setFormStep] = useState(1);
    const [countries, setCountries] = useState([
        "Sri Lanka", "USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "India", "China", "Brazil", "Russia"
    ]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phoneNumber: '',
        skills: []
    });
    const [countryInput, setCountryInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [phone, setPhone] = useState('');
    const [otherSkill, setOtherSkill] = useState('');

    const handleStartClick = () => {
        setShowForm(true);
    };

    const handleNextStep = () => {
        setFormStep(formStep + 1);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleCountryInputChange = (e) => {
        const userInput = e.target.value;
        setCountryInput(userInput);
        const filteredSuggestions = countries.filter(country =>
            country.toLowerCase().includes(userInput.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleCountrySelect = (country) => {
        setFormData({
            ...formData,
            country: country
        });
        setCountryInput('');
        handleNextStep();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleNextStep();
    };

    const handleSkillChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => {
            if (checked) {
                return { ...prevFormData, skills: [...prevFormData.skills, value] };
            } else {
                return { ...prevFormData, skills: prevFormData.skills.filter((skill) => skill !== value) };
            }
        });
    };

    const handleOtherSkillChange = (e) => {
        setOtherSkill(e.target.value);
    };

    const handleOtherSkillSubmit = (e) => {
        e.preventDefault();
        if (otherSkill.trim() !== '') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                skills: [...prevFormData.skills, otherSkill.trim()]
            }));
            setOtherSkill('');
        }
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
                                    onClick={handleStartClick}
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
                    {formStep === 1 ? (
                        <>
                            <p className="flex flex-row text-[24px] font-semibold">
                                <span className="flex flex-row text-[18px] text-[#d596ec]">1 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                                <span className="mt-[-4px] ml-[10px]">Before we start, what is your name?</span>
                            </p>
                            <form className="mt-[1rem] ml-[40px]" onSubmit={handleFormSubmit}>
                                <div className="mb-6">
                                    <label className="block text-[#d596ec] text-[18px] mb-2" htmlFor="firstName">
                                        First name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Jane"
                                        className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2 text-[#d596ec] leading-tight focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
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
                                        className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2 text-[#d596ec] leading-tight focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-row space-x-3 ">
                                    <div>
                                        <button
                                            type="submit"
                                            className="mt-[2rem] px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                        >
                                            OK
                                        </button>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="mt-[44px] text-[11px]">press <span className="font-bold">Enter</span></p>
                                        <MdOutlineSubdirectoryArrowLeft className="text-[10px] ml-[2px] mt-[47px]" />
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : formStep === 2 ? (
                        <>
                            <p className="flex flex-row text-[24px] font-semibold">
                                <span className="flex flex-row text-[18px] text-[#d596ec]">2 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                                <span className="mt-[-4px] ml-[10px]">What's your email address?</span>
                            </p>
                            <form className="mt-[1rem] ml-[40px]" onSubmit={handleFormSubmit}>
                                <div className="mb-6">
                                    <label className="block text-gray-600 text-[18px] mb-2" htmlFor="email">
                                        This is how we'll contact you.
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2 text-[#d596ec] leading-tight focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-row space-x-3 ">
                                    <div>
                                        <button
                                            type="submit"
                                            className="mt-[2rem] px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                        >
                                            OK
                                        </button>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="mt-[44px] text-[11px">press <span className="font-bold">Enter</span></p>
                                        <MdOutlineSubdirectoryArrowLeft className="text-[10px] ml-[2px] mt-[47px]" />
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : formStep === 3 ? (
                        <>
                            <p className="flex flex-row text-[24px] font-semibold">
                                <span className="flex flex-row text-[18px] text-[#d596ec]">3 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                                <span className="mt-[-4px] ml-[10px]">Which country are you from? 🏡🏡🏡</span>
                            </p>
                            <form className="mt-[1rem] ml-[40px]" onSubmit={handleFormSubmit}>
                                <div className="mb-6 relative">
                                    <input
                                        id="country"
                                        type="text"
                                        placeholder="Type or select an option"
                                        value={countryInput}
                                        onChange={handleCountryInputChange}
                                        className="appearance-none border-b-2 border-[#d596ec] w-[90%] py-2 text-[#d596ec] leading-tight focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                                    />
                                    {suggestions.length > 0 && (
                                        <ul className="absolute left-0 right-0 mt-2 bg-white border border-[#d596ec] z-[50]">
                                            {suggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 cursor-pointer hover:bg-[#d596ec] hover:text-white"
                                                    onClick={() => handleCountrySelect(suggestion)}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="flex flex-row space-x-3 ">
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : formStep === 4 ? (
                        <>
                            <p className="flex flex-row text-[24px] font-semibold">
                                <span className="flex flex-row text-[18px] text-[#d596ec]">4 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                                <span className="mt-[-4px] ml-[10px]">What is your phone number?</span>
                            </p>
                            <form className="mt-[1rem] ml-[40px]" onSubmit={handleFormSubmit}>
                                <div className="flex flex-row">
                                    <PhoneInput
                                        inputProps={{
                                            id: 'phoneNumber',
                                            name: 'phoneNumber',
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        country={'us'}
                                        value={phone}
                                        onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
                                        className="appearance-none border-b-2 border-[#d596ec] w-[50%]  text-[#d596ec]  focus:outline-none focus:border-[#aa56c9] custom-placeholder text-[25px] font-semibold"
                                    />
                                </div>
                                <div className="flex flex-row space-x-3 ">
                                    <div>
                                        <button
                                            type="submit"
                                            className="mt-[2rem] px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                        >
                                            OK
                                        </button>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="mt-[44px] text-[11px]">press <span className="font-bold">Enter</span></p>
                                        <MdOutlineSubdirectoryArrowLeft className="text-[10px] ml-[2px] mt-[47px]" />
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : formStep === 5 ? (
                        <>
                            <div className="mt-[-6rem]">
                                <p className="flex flex-row text-[24px] font-semibold">
                                    <span className="flex flex-row text-[18px] text-[#d596ec]">5 <FaArrowRight className="mt-[6px] ml-[5px]" /></span>
                                    <span className="mt-[-4px] ml-[10px]">What languages and frameworks are you familiar with?</span>
                                </p>
                                <p className="text-gray-600 text-[20px] ml-11">Select all the languages you know.</p>
                                <form className="mt-[2rem] ml-[44px]" onSubmit={handleFormSubmit}>
                                    <h3 className="mb-5 text-sm font-medium text-[#d596ec]">Choose as many as you like</h3>
                                    <ul className="grid w-full gap-6 md:grid-cols-3">
                                        {["Solidity", "Rust", "Node.js", "Typescript", "JavaScript", "C", "C++", "C#", "SQL", "Python", "Assembly Language", "Haskell", "R", ".NET"].map((skill, index) => (
                                            <li key={index}>
                                                <input
                                                    type="checkbox"
                                                    id={`${skill}-option`}
                                                    value={skill}
                                                    className="hidden peer"
                                                    onChange={handleSkillChange}
                                                />
                                                <label
                                                    htmlFor={`${skill}-option`}
                                                    className="inline-flex py-2 p-5 items-center justify-between w-full  text-[#d596ec] bg-[#deb3ee] border-[1.5px]  rounded cursor-pointer  dark:border-[#d596ec]  peer-checked:border-[3px] dark:text-[#d596ec] dark:bg-[#ede6f4] dark:hover:bg-[#e0cfe6]">
                                                    <div className="block">
                                                        <div className="w-full text-lg font-semibold">{skill}</div>
                                                    </div>
                                                </label>
                                            </li>
                                        ))}
                                        <li>
                                            <form onSubmit={handleOtherSkillSubmit}>
                                                <input
                                                    type="text"
                                                    placeholder="Other"
                                                    value={otherSkill}
                                                    onChange={handleOtherSkillChange}
                                                    className="w-full py-[10px] p-5  text-[#d596ec] bg-white border-2 border-gray-200 rounded focus:outline-none custom-placeholder1 border-[1.5px]  dark:border-[#d596ec]   dark:bg-[#ede6f4] dark:hover:bg-[#e0cfe6]"
                                                />
                                                <button type="submit" className="hidden">Add</button>
                                            </form>
                                        </li>
                                    </ul>
                                    <div className="flex flex-row space-x-3 mt-[-1rem] ">
                                        <div>
                                            <button
                                                type="submit"
                                                className="mt-[2rem] px-4 py-1 rounded font-bold text-[22px] text-white bg-[#d596ec] hover:bg-[#daa7ed]"
                                            >
                                                OK
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default Home;
