import React from "react";
import * as motion from "motion/react-client";
import herobanner from "../src/assets/Images/herobanner.png";
import ourvision from "../src/assets/Images/ourvision.png";
import ourvision1 from "../src/assets/Images/ourservicestwo.webp";
import ourvision2 from "../src/assets/Images/ourservicesone.png";
import staffingprocess from "../src/assets/Images/staffingprocess.png";
import worklifecycle1 from "../src/assets/Images/worklifecycle1.png";
import worklifecycle2 from "../src/assets/Images/worklifecycle2.jpg";
import worklifecycle3 from "../src/assets/Images/worklifecycle3.jpg";
import worklifecycle4 from "../src/assets/Images/worklifecycle4.jpeg";
import worklifecycle5 from "../src/assets/Images/worklifecycle5.jpg";
import connectus from "../src/assets/Images/conenectus.jpg";
import introduction from "../src/assets/Images/introduction.webp";
import contentoftable from "../src/assets/Images/contentoftable.png";
import ourstrategy from "../src/assets/Images/ourstrategy.webp";
import logo from "../src/assets/Images/logo.png";
import marketoverview from "../src/assets/Images/marketoverview.webp";
import { MdAddIcCall } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import ourvisiontwo from "../src/assets/Images/ourvision2.webp";
import aboutcompany from "../src/assets/Images/aboutcompany.jpg";
import second from "../src/assets/Images/second.jpg";

const App = () => {
  // let contactEmail=()=>{
  //   window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&t`
  // }

  return (
    <div className="bg-white text-black font-sans  h-auto overflow-hidden mx-0.5">
      {/* hero-section-start */}

      <div
        className="min-h-screen w-full bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${herobanner})`,
        }}
      >
        <header className="w-full h-full">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col justify-center items-start px-4 sm:px-10 py-10 mt-10 sm:mt-20">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white sm:text-black mb-2">
                WORKLEAF
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white sm:text-black">
                SOLUTIONS PVT LTD
              </h2>
              <p className=" sm:text-black mt-4 text-base sm:text-xl lg:text-2xl font-bold w-full sm:w-[80%] lg:w-[60%]">
                DELIVERING THE BEST IN EVERY MANPOWER SOLUTION—TAILORED TO YOUR
                NEEDS.
              </p>

              <div className="w-full mt-10 sm:mt-[20%] flex justify-between items-center flex-col sm:flex-row">
                <div className="mb-6 sm:mb-0">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] sm:ml-10"
                  />
                </div>

                <div className="space-y-1 flex flex-col text-black text-center sm:text-right sm:items-end sm:mr-10">
                  <p className="text-sm sm:text-lg xl:text-xl">
                    +91 7975206742 | +91 8073974663
                  </p>
                  <p className="text-sm sm:text-lg xl:text-xl">
                    www.workleaf.com
                  </p>
                  <p className="text-sm sm:text-lg xl:text-xl">
                    info@workleaf.in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </header>
      </div>

      <div className="h-4 w-full bg-black overflow-visible"></div>

      {/* Table of content */}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mb-2 mt-10 px-4">
        {/* Left Side Bar (Yellow Bar) */}
        <div className="hidden lg:flex w-[5%] items-end justify-end">
          <div className="h-[110px] w-full bg-amber-300"></div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[95%] flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-[40%]">
            <div className="flex justify-center lg:justify-start">
              <img
                src={logo}
                alt=""
                className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
              />
            </div>

            <div className="mt-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Table Of Content
              </h1>
            </div>

            <div className="mt-10 h-[250px] sm:h-[330px] bg-cover bg-center">
              <img
                src={contentoftable}
                alt=""
                className="h-full w-full object-cover shadow-xl"
              />
            </div>

            <div className="flex justify-center lg:justify-start w-full">
              <h1 className="my-10 text-blue-900 text-sm sm:text-lg underline">
                <a
                  href="https://www.workleaf.vercel.app/
                "
                >
                  www.workleaf.com
                </a>
              </h1>
            </div>
          </div>

          {/* Right Section - Black Box */}
          <div className="w-full lg:w-[60%] bg-black flex items-center justify-center mt-10 lg:mt-40 px-4">
            <div className="w-full sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              {[
                "Introduction",
                "About company",
                "Our vision and Mission",
                "Our services",
                "Our strategy",
                "SWOT Analysis",
                "Market Overview",
                "Contact Information",
              ].map((title, index) => (
                <div key={index} className="p-3">
                  <p>
                    <span className="text-2xl sm:text-4xl text-amber-300 border-r-2 border-amber-300 pr-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-lg sm:text-2xl ml-3">
                      {title}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction section starts here */}

      <div className="h-4 w-full bg-black"></div>

      <div className="h-auto w-full">
        {/* Top amber bar section */}
        <div className="h-auto w-full flex flex-col sm:flex-row">
          <div className="h-auto w-full sm:w-[95%] py-4 px-2">
            <div className="h-auto w-[50%] border-b-4 border-amber-400"></div>
            <div className="h-auto w-[50%] border-b-4 border-amber-400 mt-2 sm:mt-0"></div>
          </div>
          <div className="h-auto w-full sm:w-[5%] py-4 bg-amber-200"></div>
        </div>

        {/* Main content */}
        <div className="h-auto w-full ml-3">
          <div className="h-auto w-full flex flex-col sm:flex-row">
            <div className="h-auto w-full sm:w-[95%] flex flex-col lg:flex-row">
              {/* Left Section */}
              <div className="h-auto w-full lg:w-[70%]">
                <div className="flex flex-col sm:flex-row-reverse">
                  <div className="h-[200px] w-[90%] border-b-4 border-none flex items-center justify-end mx-auto">
                    <img
                      src={logo}
                      alt=""
                      className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] mr-[120px]"
                    />
                  </div>

                  <div className="h-auto w-[90%] border-b-4 border-none flex items-center mb-6  mt-1 ml-8">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black pl-4">
                      Introduction
                    </h1>
                  </div>
                </div>

                <div className="w-full border-b-4 bg-black py-10 px-4 mx-auto mb-2 h-[430px] ">
                  <h1 className="text-xl sm:text-2xl font-normal text-white leading-relaxed text-center max-w-4xl mx-auto">
                    Workleaf Manpower Solution is a leading provider of staffing
                    and manpower solutions, specializing in the construction
                    sector. Founded on a foundation of excellence, we are
                    dedicated to understanding and meeting the unique demands of
                    the industry. Our commitment to delivering top-tier talent
                    ensures that our clients receive the right workforce
                    solution, tailored to their specific needs—whether for
                    short-term projects or long-term engagements.
                  </h1>
                </div>
              </div>

              {/* Right Section - Image */}
              <div className="h-[100%] w-full lg:w-[30%] flex items-center justify-center mt-6 lg:mt-0 mb-2">
                <img
                  src={introduction}
                  alt=""
                  className="w-[90%]  h-[90%] shadow-2xl"
                />
              </div>
            </div>

            <div className="h-auto w-[5%] hidden sm:block"></div>
          </div>
        </div>
      </div>

      <div className="h-4 w-full bg-black"></div>
      {/* About Our Company */}

      <div className="relative h-auto w-full flex items-center justify-center flex-col mt-20">
        <div className="h-auto w-[90%] flex items-center justify-center z-10">
          <div className="h-auto w-full lg:flex z-10 bg-white">
            <div className="h-auto w-full lg:w-[50%] flex flex-col">
              <div className="mb-10 mt-7 ml-10 flex flex-col-reverse sm:flex-row-reverse justify-center gap-3">
                <div className="w-full sm:w-[270px]">
                  <h2 className="md:text-5xl text-3xl font-bold mb-5 leading-tight tracking-wide">
                    About Our Company
                  </h2>
                </div>
                <div className="w-[40%] sm:w-[20%] flex justify-center items-center">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-[130px] w-[130px]"
                  />
                </div>
              </div>

              <div className="h-auto w-full flex items-center justify-center mb-10">
                <img
                  src={aboutcompany}
                  alt="About Company"
                  className="h-[240px] w-[90%] sm:h-[200px] md:h-[240px] shadow-xl"
                />
              </div>
            </div>

            <div className="h-auto lg:w-[50%] w-full flex items-center justify-center flex-col">
              <div className="m-4">
                <span className="py-1 w-2 bg-amber-400 text-amber-400">
                  abc
                </span>
                <span className="md:text-2xl text-sm ml-10 font-bold">
                  A Brief Story About The Company
                </span>

                <h1 className="mt-4 ml-0 sm:ml-8 md:text-2xl text-sm font-base">
                  Workleaf Manpower Solution was established to address the
                  growing need for specialized manpower in the construction
                  industry. Our journey began with a vision to bridge the gap
                  between skilled labor demand and supply. Over the years, we
                  have expanded our operations, building a reputation for
                  reliability, efficiency, and excellence.
                </h1>
              </div>

              <div className="m-5">
                <span className="py-1 w-2 bg-amber-400 text-amber-400">
                  aej
                </span>
                <span className="md:text-2xl text-sm ml-10 font-bold">
                  Core Value
                </span>

                <h1 className="mt-4 ml-0 sm:ml-8 md:text-2xl text-sm font-base">
                  Integrity: We uphold the highest standards of honesty and
                  integrity in all our actions. Reliability: Our clients count
                  on us to deliver the right workforce solutions every time.
                  Client Satisfaction: We strive to exceed our clients'
                  expectations in all aspects of our services.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[400px] h-[600px] w-full flex items-end justify-start bg-black absolute lg:top-[70%] top-[60%]">
          <div className="w-full h-auto ml-30 mb-10">
            <span className="text-white text-xl ">www.workleaf.com</span>
            {/* <span className="ml-40 h-1px bg-amber-400 text-[1px] text-amber-400 border-2 border-white hidden md:inline">
              kjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjklkjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjklkjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjklkjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjklkjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjklkjhgkjhgfghjkljhgfdghjkljhgfdghjkljhgfdghjklkjhgfhjkl;kjhghjkljhgfhjklkjhgfhjklkjhgfhjkl;kjhgfhjkl;kjhgfhjklfdsghjkljhgfdghjkljhgfdghjkljhgfghjkl.kjhgfhjkl
            </span> */}
          </div>
        </div>
      </div>

      {/* our vision section */}
      <div className="h-4 w-full bg-black "></div>

      <div className="h-auto w-full flex lg:mt-60 md:mt-110 sm:mt-120 mt-110 flex-col lg:flex-row">
        <div className="h-full w-full lg:flex">
          <div className="lg:w-[35%] w-full h-auto relative">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold border-b-4 border-amber-400 w-[250px] sm:w-[300px] pb-8 text-center">
                Our Vision
              </h1>
            </div>
            <div className="h-[300px] w-full mb-20 border-b-12 border-black">
              <img
                src={ourvision}
                alt="Our Vision"
                className="h-full w-full object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:w-[65%] w-full h-auto">
            <div className="w-full h-auto md:pl-40 pl-10 mt-10">
              <h1 className="md:text-4xl text-2xl font-bold">Vision</h1>
              <p className="md:text-2xl text-xl mt-5 w-[90%]">
                To be the leading provider of specialized manpower solutions in
                the construction industry, recognized for our quality,
                reliability, and innovative approach.
              </p>
            </div>

            <div className="w-full h-auto mt-10 flex mb-18 flex-col md:flex-row">
              <div className="none md:block h-[70px] w-[140px] ml-7 mb-5 md:mb-0">
                <img
                  src={herobanner}
                  alt="Hero Banner"
                  className="w-full h-full"
                />
              </div>
              <div className="md:ml-21 ml-10">
                <h1 className="md:text-4xl text-2xl font-bold">Mission</h1>
                <p className="md:text-2xl text-xl mt-5 mr-20">
                  Our mission is to connect skilled professionals with
                  construction projects, ensuring that our clients achieve their
                  objectives efficiently and effectively. We are committed to
                  providing exceptional service, fostering long-term
                  relationships, and contributing to the success of our clients
                  and candidates alike.
                </p>
              </div>
            </div>

            <div className="h-[250px] w-full bg-black flex items-start justify-end relative mb-2 ">
              <img
                src={ourvisiontwo}
                alt="Our Vision"
                className="h-[130px] w-[50%] absolute top-[-60px] shadow-xl"
              />

              {/* Add a wrapper div with higher z-index to ensure visibility */}
              <div className="flex justify-end items-end mt-25 mr-10 relative z-10">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-[130px] w-[130px] bg-amber-50 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 w-full bg-black ww"></div>
      {/* Our Services */}

      {/* logo pending */}

      <div className="h-auto w-full  mt-20 xl:flex items-center justify-center">
        <div className="sm:h-[800px] h-[550px] xl:w-[30%] w-[60%]  flex items-center justify-center flex-col bg-black relative ">
          <div className="sm:h-[600px] h-[460px] w-full flex   flex-col bg-amber-400 absolute sm:left-40 left-20">
            <div className="sm:ml-20 ml-5">
              <h3 className="sm:text-6xl text-4xl mb-10 mt-20 font-base text-white w-[60%] border-b-8 border-white pb-6">
                Our Services
              </h3>
            </div>
            <div className="h-auto sm:mb-30 ml-8">
              <h1 className=" sm:text-xl text-sm font-bold text-white mb-2">
                <span className="mr-5">i.</span>CONTIGENCY RECRUITMENT
              </h1>
              <h1 className=" sm:text-xl text-sm font-bold text-white mb-2">
                <span className="mr-3">ii.</span>TRANSITION MANAGEMENT PROGRAM
              </h1>
              <h1 className=" sm:text-xl text-sm font-bold text-white mb-2">
                <span className="mr-2">iii.</span>TURKEY STAFFING PROGRAM
              </h1>
              <h1 className=" sm:text-xl text-sm font-bold text-white mb-2">
                <span className="mr-1">iv.</span>CROSS-BORDER RECRUITMENT
                PROGRAM
              </h1>
            </div>
          </div>
        </div>

        <div className="h-auto xl:w-[70%] w-[100%]   flex items-start justify-end flex-col sm:flex-row">
          <div className="h-full sm:w-[20%] w-[100%] flex  items-start justify-center    mt-10 sm:mt-0">
            <img src={logo} alt="" className="h-[100px] w-[100px]" />
          </div>
          <div className="xl:w-[80%] w-[100%] h-auto ">
            <div className="flex gap-6 items-center justify-center sm:flex-row flex-col mt-5">
              <img
                src={ourvision1}
                alt=""
                className="md:h-[400px] 2xl:w-[400px] md:w-[280px] w-[230px] h-[200px] shadow-xl"
              />
              <img
                src={ourvision2}
                alt=""
                className="md:h-[400px] 2xl:w-[400px] md:w-[280px] w-[230px] h-[200px] shadow-xl"
              />
            </div>

            <div className="h-auto w-full  flex 2xl:flex border-b-4 flex-col sm:flex-row gap-[-10px] border-amber-400 mt-5">
              <div className="h-80 2xl:w-[40%] w-[90%]  flex flex-col items-center justify-center">
                <h1 className="bg-amber-400 rounded-3xl font-bold text-white sm:text-xl text-sm text-center py-3 my-1 sm:w-[250px] w-[150px]">
                  Manpower Supply
                </h1>
                <h1 className="bg-amber-400 rounded-3xl font-bold text-white sm:text-xl text-sm text-center py-3 my-1 sm:w-[300px] w-[200px]">
                  Construction Sector
                </h1>
                <h1 className="bg-amber-400 rounded-3xl font-bold text-white sm:text-xl text-sm text-center py-3 my-1 sm:w-[330px] w-[250px]">
                  Accommodation Service
                </h1>
              </div>
              <div className="h-auto 2xl:w-[60%] 2xl:pl-2 w-[90%] sm:pl-30  mt-6 ml-4 mb-10">
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-5">i.</span>WAREHOUSE MANAGEMENT &
                  LOGISTICS
                </h5>
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-3">ii.</span>ENGINEERING, MANUFACTURING, &
                  INFRASTRUCTURE
                </h5>
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-2">iii.</span>INFORMATION TECHNOLOGY
                </h5>
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-1">iv.</span>HEALTHCARE & HOSPITALITY
                </h5>
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-1">iv.</span>BANKING & FINANCIAL SERVICES
                </h5>
                <h5 className=" sm:text-xl text-sm font-bold mb-2">
                  <span className="mr-1">iv.</span>TRAVEL & TOURISM
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our strategy */}
      <br />
      <div className="h-4 w-full bg-black"></div>

      <div className="h-auto w-full mt-10  ">
        <div className="h-auto w-full sm:flex justify-end">
          <div className="h-auto w-[93%]  sm:flex">
            <div className="h-auto sm:w-[50%] w-[100%] ">
              <div className="h-auto w-full  sm:mt-30 mt-6">
                <h1 className="2xl:text-8xl text-4xl  font-bold">
                  <span className="border-b-10 border-amber-400 py-7 pl-4">
                    Our{" "}
                  </span>
                  <span>Strategy</span>
                </h1>
              </div>

              <div className="h-auto w-full  border-t-2 mt-27 pl-4 pb-8 border-l-10 border-amber-400 pt-7 pr-4">
                <h1 className="2xl:text-4xl md:text-2xl font-bold text-amber-400 mb-3">
                  Client-Centric Approach
                </h1>
                <h2 className="2xl:text-4xl md:text-2xl font-old ">
                  We work closely with our clients to understand their specific
                  needs and provide tailored solutions. Whether it's for a
                  single project or ongoing staffing support, we ensure that our
                  clients receive the most suitable candidates for their
                  requirements.
                </h2>
              </div>

              <div className="h-auto w-full border-l-10 border-t-2  border-amber-400 pt-7 pl-4 pb-8 pr-4">
                <h1 className="2xl:text-4xl md:text-2xl font-bold text-amber-400 mb-3">
                  Quality Assurance
                </h1>
                <h2 className="2xl:text-4xl md:text-2xl font-old ">
                  Our rigorous selection and vetting processes ensure that only
                  the best candidates are presented to our clients. We
                  prioritize quality in all aspects of our service, from
                  recruitment to ongoing support.
                </h2>
              </div>
            </div>
            <div className="h-auto sm:w-[50%] w-[100%]  ">
              <div className="h-auto w-[90%]  m-4 rounded-2xl shadow-lg">
                <img
                  src={ourstrategy}
                  alt=""
                  className="h-[480px] w-full rounded-2xl shadow-lg bg-center"
                />
              </div>

              <div className="h-auto w-[90%]  m-4 rounded-2xl shadow-lg">
                <img
                  src={second}
                  alt=""
                  className="h-[480px] w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-full   bg-black text-white flex justify-end mb-2">
          <div className="h-auto w-[95%] sm:flex">
            <div className="h-auto sm:w-[70%] w-[90%] border-l-10 border-t-2 border-r-10 border-b-2  border-amber-400 pt-7 pl-4 pb-8 md:ml-32 mt-1">
              <h1 className="2xl:text-4xl md:text-2xl font-bold text-amber-400 mb-3 ">
                Continuous Improvement
              </h1>
              <h2 className="2xl:text-4xl md:text-2xl font-old  ">
                We are committed to continuously improving our services by
                staying updated with industry trends, investing in our team, and
                incorporating feedback from our clients.
              </h2>
            </div>

            <div className="h-auto sm:w-[30%] w-[100%] pt-7 pl-4 pb-8 sm:ml-32  ">
              <img
                src={logo}
                alt=""
                className="sm:h-[200px] sm:w-[200px] h-[100px] w-[100px] ml-12 bg-white rounded "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 w-full bg-black"></div>
      {/* market overview */}

      <div className="h-auto w-full flex">
        <div className="h-auto w-[5%]  flex items-center ">
          <div className="h-[80%] w-full bg-amber-400"></div>
        </div>

        <div className="h-[90%] w-[95%]  sm:flex">
          <div className="h-auto sm:w-[50%] w-[100%]  ">
            <div className="h-auto w-full  sm:mt-30 mt-6">
              <h1 className="2xl:text-7xl text-4xl  font-bold">
                <span className="border-b-10 border-amber-400 py-7 pl-4 ml-2">
                  Market{" "}
                </span>
                <span>Overview</span>
              </h1>
            </div>

            <div className="h-auto w-full   mt-27 pl-4 pb-8   pt-7 pr-4">
              <h1 className="2xl:text-3xl md:text-2xl font-bold text-amber-400 mb-3">
                Client-Centric Approach
              </h1>
              <h2 className="2xl:text-3xl md:text-2xl font-old ">
                We work closely with our clients to understand their specific
                needs and provide tailored solutions. Whether it's for a single
                project or ongoing staffing support, we ensure that our clients
                receive the most suitable candidates for their requirements.
              </h2>
            </div>

            <div className="h-auto w-full  pt-7 pl-4 pb-8 pr-4">
              <h1 className="2xl:text-3xl md:text-2xl font-bold text-amber-400 mb-3">
                Client-Centric Approach
              </h1>
              <h2 className="2xl:text-3xl md:text-2xl font-old ">
                We work closely with our clients to understand their specific
                needs and provide tailored solutions. Whether it's for a single
                project or ongoing staffing support, we ensure that our clients
                receive the most suitable candidates for their requirements.
              </h2>
            </div>
          </div>

          <div className="h-auto sm:w-[50%] w-[100%] flex items-center justify-center ">
            <div className="h-auto w-[90%]  m-4 rounded-2xl shadow-2xl">
              <img
                src={marketoverview}
                alt=""
                className="sm:h-[680px] h-[450px] w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Staffing Process Flow */}
      <div className="h-4 w-full bg-black"></div>

      <div className="h-auto w-full  flex justify-center mt-25">
        <div className="h-auto w-[90%] lg:flex">
          <div className="h-auto lg:w-[45%] w-[90%]  flex items-center justify-evenly flex-col  pb-8 ">
            <img src={logo} alt="" className="h-[20%] w-[20%] " />
            <img
              src={staffingprocess}
              alt=""
              className="h-[50%] w-[90%]  shadow-2xl"
            />
          </div>

          <div className="h-auto lg:w-[45%] w-[90%]  flex  flex-col md:ml-15 sm:pb-20 pb-4">
            <h1 className="md:text-5xl  sm:text-3xl text-2xl font-bold py-6 mb-10 ">
              <span className="border-4 border-white border-b-amber-400 py-7 ">
                Staff
              </span>
              ing Process Flow
            </h1>
            <h2 className=" my-1  mt-7">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                01
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Client Needs Assessment
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl  font-bold mr-8  text-amber-400">
                02
              </span>
              <span className="text-sm sm:text-xl font-bold">
                {" "}
                Sourcing Candidates
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                03
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Screening and Shortlisting
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                04
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Client Interview Coordination
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                05
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Selection and Offer
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                06
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Onboarding and Placement
              </span>
            </h2>
            <h2 className=" my-1">
              <span className="text-sm sm:text-xl font-bold mr-8 text-amber-400">
                07
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Post-Placement Follow-Up
              </span>
            </h2>
            <h2 className=" my-1 mb-20">
              <span className=" sm:text-xl text-sm font-bold mr-8 text-amber-400">
                08
              </span>
              <span className="text-sm sm:text-xl font-bold">
                Continuous Improvement
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="h-4 w-full bg-black"></div>
      {/* The Working Life Cycle */}

      <div className="h-auto w-full  flex items-center justify-center">
        <div className="h-auto w-[95%]  sm:my-30 my-8">
          <div className="h-auto w-full  mb-8">
            <img
              src={logo}
              alt=""
              className="sm:h-[100px] sm:w-[100px] h-[100px] w-[100px] ml-16 sm:ml-0"
            />
          </div>

          <div className="h-auto w-full  mb-8">
            <h1 className="sm:text-5xl text-2xl font-bold pb-4">
              <span className="pb-4   border-b-4 border-amber-400">The Wo</span>
              rker Life Cycle
            </h1>
          </div>

          <div className="h-auto w-full  grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
            <div className=" h-[400px] border-amber-400 border-b-4 shadow-xl">
              <div className="h-[60%] w-full ">
                <img src={worklifecycle1} alt="" className="h-full w-full" />
              </div>

              <div className="h-[40%] w-full  flex items-end pb-7">
                <h1 className=" h-[60px]  flex">
                  <h1 className="sm:text-4xl text-2xl font-bold mr-5 h-full ">
                    01
                  </h1>
                  <h1 className="sm:text-2xl text-lg  h-full font-bold ">
                    Training & Development
                  </h1>
                </h1>
              </div>
            </div>

            <div className=" h-[400px] border-amber-400 border-b-4 shadow-xl">
              <div className="h-[60%] w-full ">
                <img src={worklifecycle2} alt="" className="h-full w-full" />
              </div>

              <div className="h-[40%] w-full  flex items-end pb-7">
                <h1 className=" h-[60px]  flex">
                  <h1 className="sm:text-4xl text-2xl font-bold mr-5 h-full ">
                    02
                  </h1>
                  <h1 className="sm:text-2xl text-lg  h-full font-bold ">
                    Career Transition
                  </h1>
                </h1>
              </div>
            </div>

            <div className=" h-[400px] border-amber-400 border-b-4 shadow-xl">
              <div className="h-[60%] w-full ">
                <img src={worklifecycle3} alt="" className="h-full w-full" />
              </div>

              <div className="h-[40%] w-full  flex items-end pb-7">
                <h1 className=" h-[60px]  flex">
                  <h1 className="sm:text-4xl text-2xl font-bold mr-5 h-full ">
                    03
                  </h1>
                  <h1 className="sm:text-2xl text-lg h-full font-bold ">
                    Temporary Employment
                  </h1>
                </h1>
              </div>
            </div>

            <div className=" h-[400px] border-amber-400 border-b-4 shadow-xl">
              <div className="h-[60%] w-full ">
                <img src={worklifecycle4} alt="" className="h-full w-full" />
              </div>

              <div className="h-[40%] w-full  flex items-end pb-7">
                <h1 className=" h-[60px]  flex">
                  <h1 className="sm:text-4xl text-2xl  font-bold mr-5 h-full ">
                    04
                  </h1>
                  <h1 className="sm:text-2xl text-lg  h-full font-bold ">
                    Secondment Employment
                  </h1>
                </h1>
              </div>
            </div>

            <div className=" h-[400px] border-amber-400 border-b-4 shadow-xl">
              <div className="h-[60%] w-full ">
                <img src={worklifecycle5} alt="" className="h-full w-full" />
              </div>

              <div className="h-[40%] w-full  flex items-end pb-7">
                <h1 className=" h-[60px]  flex">
                  <h1 className="sm:text-4xl text-2xl  font-bold mr-5 h-full ">
                    05
                  </h1>
                  <h1 className="sm:text-2xl text-lg h-full font-bold ">
                    Permanent Employment
                  </h1>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 w-full bg-black"></div>
      {/* Lets connect with us */}
      <div className="h-auto w-full flex items-end justify-start mt-5">
        <div className="h-auto w-[94%] lg:flex mt-8 flex-col sm:flex-row">
          {/* Left Section */}
          <div className="h-auto lg:w-[50%] w-full flex items-center justify-center">
            <div className="sm:h-[700px] h-[450px] w-[80%] sm:w-[80%]">
              <div className="h-[60%] w-full">
                <h1 className="lg:text-5xl md:text-4xl text-3xl lg:ml-14 ml-4 w-[80%] font-bold pb-20 text-center sm:text-left">
                  <span className="border-amber-400 border-b-4 pb-4">
                    Let`s
                  </span>
                  <br />
                  <span>Connect With Us!</span>
                </h1>
              </div>
              <div className="h-[40%] w-full bg-amber-400"></div>
            </div>
            <div className="sm:h-[600px] h-[350px] w-[100%] relative shadow-2xl">
              <img
                src={connectus}
                alt="Connect with Us"
                className="h-full lg:w-full sm:w-[90%] absolute top-0 left-0 shadow-2xl"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="h-auto lg:w-[50%] w-full bg-black flex flex-col justify-center items-center">
            <div className="h-auto w-[80%] text-white mb-3 mt-3 flex justify-center items-center">
              <div className="bg-white rounded">
                <img src={logo} alt="Logo" className="h-[100px] w-[100px] " />
              </div>
            </div>

            {/* Phone Section */}
            <div className="h-auto w-[80%] text-white mb-6 flex sm:flex-row flex-col justify-start items-center">
              <div className="h-[50px] w-[20%] flex justify-center items-center">
                <BiSolidPhoneCall className="h-full w-full" />
              </div>
              <div className="h-[100px] w-[80%] text-lg flex justify-start flex-col pl-6 sm:text-2xl">
                <h1>+91 7975206742</h1>
                <h1>+91 8073974663</h1>
              </div>
            </div>

            {/* Email Section */}
            <div className="h-auto w-[80%] text-white mb-6 flex sm:flex-row flex-col justify-start items-center">
              <div className="h-[50px] w-[20%] flex justify-center items-center">
                <FiMail className="h-full w-full" />
              </div>
              <div className="h-[100px] w-[80%] text-lg flex justify-start flex-col pl-6 sm:text-2xl">
                <h1 className="font-bold">Mail</h1>
                <h1 className="text-lg sm:text-2xl">
                  <a
                    href="mailto:swathi@workleaf.in"
                    target="_blank"
                    className="text-blue-800 underline"
                  >
                    Swathi@workleaf.in
                  </a>
                </h1>
              </div>
            </div>

            {/* Website Section */}
            <div className="h-auto w-[80%] text-white mb-6 flex sm:flex-row flex-col justify-start items-center">
              <div className="h-[50px] w-[20%] flex justify-center items-center">
                <TfiWorld className="h-full w-full" />
              </div>
              <div className="h-[100px] w-[80%] text-lg flex justify-start flex-col pl-6 sm:text-2xl">
                <h1 className="font-bold">Website</h1>
                <h1 className="text-lg sm:text-2xl">
                  <a
                    href="https://workleaf.vercel.app/"
                    target="_blank"
                    className="text-blue-800 underline"
                  >
                    www.workleaf.com
                  </a>
                </h1>
              </div>
            </div>

            {/* Address Section */}
            <div className="h-auto w-[80%] text-white mb-6 flex sm:flex-row flex-col justify-start items-center">
              <div className="h-[100px] w-[20%] flex justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/fSwzUW4YKbt171yZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLocationOutline className="h-[50px] w-full" />
                </a>
              </div>
              <div className="h-[130px] w-[80%] text-lg flex justify-start flex-col pl-6 sm:text-2xl">
                <h1 className="font-bold">Address</h1>
                <p className="text-sm sm:text-xl">
                  #663 Lakshmi Nilaya K R Puram,
                </p>
                <p className="text-sm sm:text-xl">
                  Bangalore, Karnataka-560036
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
