import Image from "next/image";

export const Footer = () => {
    const sytle = {
        anchor : "text-sm md:text-xl font-semibold mx-[15px]",
      }
  return (
    <div>
      <div className= "flex flex-col justify-evenly items-center h-80">
        <div>
          {/* Links */}
          <ul className="flex flex-row flex-wrap justify-center content-center items-center">
            <li>
              <a href="#" className={sytle.anchor}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={sytle.anchor}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={sytle.anchor}>
                Preformer
              </a>
            </li>
            <li>
              <a href="#" className={sytle.anchor}>
                Event Shedule
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-evenly items-center">
            {/* icons */}
            <div className="mr-6">
                <Image src='/img/Facebook-1.png' 
                width={'50px'}
                height={'50px'}
                
                alt = {'test'}
                />
            </div>
            <div className="mr-6">
                <Image src='/img/Instagram-1.png' 
                width={'50px'}
                height={'50px'}
                
                alt = {'test'}
                />
            </div>
            <div className="mr-6">
                <Image src='/img/Linkedin-1.png' 
                width={'50px'}
                height={'50px'}
                alt = {'test'}
                />
            </div>
            <div className="mr-6">
                <Image src='/img/Spotify-1.png' 
                width={'50px'}
                height={'50px'}
                alt = {'test'}
                />
            </div>
            <div className="mr-6">
                <Image src='/img/Whatsapp-1.png' 
                width={'50px'}
                height={'50px'}
                alt = {'test'}
                />
            </div>
        </div>
        <div className="sm:w-full md:w-3/6">
          <p className="text-gray-100 font-medium text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            ullam voluptate consectetur, corporis soluta in inventore laboriosam
            eaque ex! Qui, perferendis est repellat quo natus rem animi! Et, ex
            earum!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-8 h-[45px]">
        <p className=" text-center text-sm md:text-base">CopyRight &copy; 2022-2023</p>
        <div>
          <Image
            src="/img/Muziclogo.png"
            className="cursor-pointer"
            alt="test"
            width={"40px"}
            height={"40px"}
          />
        </div>
        <p className=" text-center text-sm md:text-base">
            Music All Right Reserverd
        </p>
      </div>
    </div>
  );
};
