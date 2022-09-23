import React from "react";
import Image from "next/image";

export const Experience = () => {
  const data = [
    {
      image: "/img/Group 2.png",
      title: "For Live Music",
      desc: "Lorem ipsum dolor sit amet, Quia natus assumenda eligendi totam reprehenderit.",
    },
    {
      image: "/img/music icon.png",
      title: "For Live Music",
      desc: "Lorem ipsum dolor sit amet, Quia natus assumenda eligendi totam reprehenderit.",
    },
    {
      image: "/img/Group 4.png",
      title: "For Live Music",
      desc: "Lorem ipsum dolor sit amet, Quia natus assumenda eligendi totam reprehenderit.",
    },
    {
      image: "/img/Group 4.png",
      title: "For Live Music",
      desc: "Lorem ipsum dolor sit amet, Quia natus assumenda eligendi totam reprehenderit.",
    }
  ]; 
  return (
    <div className="w-full flex flex-col items-center py-5" >
      <div className="flex flex-col items-center mb-16">
        <div>
          <Image src={"/img/Path 318.png"} width={'100px'} height={'20px'} 
                alt = {'test'} />
        </div>
        <p className="text-center text-2xl font-light text-white">
          Amazing App Can Change Your Daily Life
          <br />
          <span className="font-bold">Misic Experience</span>
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center item-center">
        {data.map((item, key)=>{
          return <div className="basis-[300px] flex flex-col justify-center items-center mb-10">
            <div
              className="bg-dark p-3 rounded-2xl">
              <Image
              width={50}
              height={50}
              src={item.image}
              
              alt = {'test'}
              />
            </div>
            <h2 className="text-xl font-medium my-2">
              {item.title}
            </h2>
            <p className="text-center italic mb-16 text-gray-100">
              {item.desc}
            </p>
            <p className="text-purple-900 cursor-pointer">
              Learn More
            </p>
          </div>
        })

        }
      </div>
    </div>
  );
};
