import Image from "next/image";
import { Navbar } from "../Navbar";

export const Hero = () => {
  const style = {
    span: "text-5xl p-0 block",
  };
  return (
    <>
      <Navbar />
      <section className="w-full py-[2rem] flex flex-col md:flex-row rounded-b-md">
        {/* Left */}
        <div className="w-full md:w-1/2 order-1 ">
          <div className="flex flex-col justify-center items-center md:items-start md:mt-40">
            <span className={style.span + ` text-center md:text-left`}>Experience</span>
            <span className={style.span + ` font-bold text-center md:text-left`}>
              <br />
              With Best Qualities
            </span>
            <br />
            <p className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              itaque par. Odio aperiam est ipsa
            </p>
            <p className="text-xl font-semibold block mt-6">
              {" "}
              Dowload now on IOS and Andriod
            </p>
            <div className=" w-full mt-3 flex justify-evenly">
              <Image
                src={"/img/Google Play.png"}
                className=""
                width="170px"
                height={"48px"}
              />
              <Image
                src={"/img/App Store.png"}
                className=""
                width="170px"
                height={"48px"}
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" w-full md:w-1/2 md:order-1">
          <Image
            width={2000}
            height={2000}
            src={"/img/heroSvg.svg"}
          />
        </div>
      </section>
    </>
  );
};
