import { Link } from "react-router-dom";
import TextModifier from "react-text-modifier";

const Card = ({ slider = {} }) => {
  const { bg, title } = slider;

  return (
    <div className=" bg-white">
      <div
        className="image-layer"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 85, 162, 0.9) 0%, rgba(0, 0, 0, 0) 100%), url(${bg})`,
          // backgroundImage: `linear-gradient(to top, rgba(0, 223, 255, 0.3) 50%, rgba(0, 223, 255, 0) 100%), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute text-center top-1/2 -translate-y-1/2  w-full   main-slider__details ">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-semibold text-center text-[white] text-sm md:text-4xl xxl:text-5xl"
          highlight={["SHDCL ", "HOUSING"]}
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500"
        />
        <p className=" mx-5 lg:text-lg lg:font-normal m-5 font-light text-[white] ">
          Lets start to dream your home with us, will make it real!
        </p>
        <Link
          to="/about"
          className=" lg:m-5 lg:p-4 p-2  text-white border rounded hover:bg-blue-700 hover:border-none"
        >
          Lets Go
        </Link>
      </div>
    </div>
  );
};

export default Card;
