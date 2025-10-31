import img1 from "../../../assets/images/Mission & Vision/mission.png";
import img2 from "../../../assets/images/Mission & Vision/vision.png";
import img3 from "../../../assets/images/Mission & Vision/values.png";
import ceo from "../../../assets/images/ceo.jpg";
import ceobg from "../../../assets/images/ceo-bg-1.png";
import "./AboutUs.css";
import CeoSpeech from "./components/CeoSpeech";
import MissionVission from "./components/MissionVission";
import HistoryAcheivemets from "./components/HistoryAcheivemets";
import MeetOurTeam from "../MeetOurTeam/MeetOurTeam";

const About = () => {
  return (
    <div className="">
      <div className="px-8  lg:px-52 py-6 lg:py-16">
        <h1 className="text-3xl  text-blue-800 text-center mb-10">About US</h1>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-xl text-blue-400 mb-3">About SHDCL</h2>
            <p className="text-justify">
              Welcome to SHANTO HOBBY DEVELOPEMENT & CONSTRUCTION LTD, At SHDCL,
              we are your trusted partners in consultancy & construction. With a
              wealth of experience and a commitment to excellence, we provide
              tailored solutions for your unique needs. Our expertise spans
              various industries, ensuring you receive top-tier advice and
              support. Discover more about us and how we can work together to
              achieve your goals. Welcome to a brighter future with SHANTO HOBBY
              DEVELOPMENT & CONSTRUCTION LTD.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              className="lg:w-[80%] rounded-xl mx-auto"
              src="/office-buildings.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <CeoSpeech></CeoSpeech>
      {/* <MeetOurTeam></MeetOurTeam> */}
      <MissionVission></MissionVission>
      <HistoryAcheivemets></HistoryAcheivemets>
      {/* <div className="flex items-center justify-center flex-wrap mt-16">
        <div className=" flex items-center justify-center">
          <div id="ceo-bg" className="absolute z-[-1] w-1/2">
            <img src={ceobg} className="rounded-lg rotate-[5deg]" alt="" />
          </div>
          <div className=" w-1/2">
            <img src={ceo} className=" rounded-lg" alt="" />
          </div>
        </div>
        <div className="px-8  lg:px-52">
          <h2 className=" text-2xl font-bold text-first">Message from CEO</h2>
          <hr className=" w-1/3 h-1 my-4 border-0 bg-first" />
          <p className=" w-80 h-80" style={{ textAlign: "justify" }}>
            Greetings, <br />

            We are thrilled to share our journey, history, and
            achievements as a construction firm dedicated to shaping a better
            future. SHDCL began its story with a vision to redefine
            construction, bringing innovation and sustainability to the
            forefront. Over the years, our dedication to excellence has driven
            us to new heights. Our milestones speak volumes: from landmark
            projects that have transformed skylines to our unwavering commitment
            to environmental responsibility, we've consistently delivered
            exceptional results. But our story is far from over. We are
            committed to pushing boundaries, embracing technology, and creating
            lasting legacies that impact communities positively. As we continue
            this remarkable journey, we invite you to be a part of our future
            success. Thank you for your trust in SHANTO HOBBY DEVELOPMENT &
            CONSTRUCTION LTD and for joining us on this exciting path of
            progress.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around lg:my-16 flex-wrap px-8  lg:px-52">
        <div className=" flex flex-col justify-center items-center">
          <img src={img2} alt="" className=" h-60" />
          <h2 className=" text-2xl font-bold text-[#00895F]">Our Mission</h2>
          <hr className=" w-1/3 h-1 my-4 border-0 bg-[#00895F]" />
          <p className=" w-80 h-80" style={{ textAlign: "justify" }}>
            Our mission is to deliver high-quality construction projects, on
            time and within budget, by leveraging our skilled workforce,
            advanced technologies, and a commitment to safety. We aim to exceed
            client expectations, foster strong partnerships, and contribute to
            the growth and prosperity of the communities we serve.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src={img1} alt="" className=" h-60" />
          <h2 className=" text-2xl font-bold text-[#C3391F]">Our Vision</h2>
          <hr className=" w-1/3 h-1 my-4 border-0 bg-[#C3391F]" />
          <p className=" w-80 h-80" style={{ textAlign: "justify" }}>
            To be a leading provider of innovative and sustainable construction
            solutions, known for excellence in quality, safety, and customer
            satisfaction, while contributing to the development of vibrant
            communities and a better future.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src={img3} alt="" className=" h-60" />
          <h2 className=" text-2xl font-bold text-[#0792B7]">Our Values</h2>
          <hr className=" w-1/3 h-1 my-4 border-0 bg-[#0792B7]" />
          <p className=" w-80 h-80" style={{ textAlign: "justify" }}>
            {" "}
            Include integrity, safety, quality, client focus, innovation,
            teamwork, community involvement, environmental responsibility,
            professionalism, and a commitment to continuous improvement.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
