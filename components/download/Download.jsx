import React from "react";
import Image from "next/image";

export const Download = () => {
  return (
    <div className="py-4 flex flex-col justify-center items-center w-4/6 m-auto">
      <div>
        <Image src={"/img/Path 318.png"} width={"100px"} height={"20px"} />
      </div>
      <p className = 'text-2xl font-bold my-2'>Download The Best Music</p>
      <p className="font-bold text-center md:text-left">App Now</p>
      <p className="text-gray-100 font-medium text-center my-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non excepturi
        repellat quod, asperiores odit perspiciatis nihil optio incidunt
        dolores! Quas sunt nobis animi possimus amet. Alias ea dolorem rem
        aperiam.
      </p>
      <div>
        <Image
        src='/img/download.svg'
        width='500px'
        height='300px'
        
        alt = {'test'}
        />
      </div>
    </div>
  );
};
