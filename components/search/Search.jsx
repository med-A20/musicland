import Image from "next/image";

export const Search = () => {
  return (
    <div className="sm:w-full sm:flex sm:flex-col w-full md:flex md:flex-row justify-center items-center py-3">
      <div className="sm:w-full md:w-1/2  relative">
        {/* <div className="absolute top-[150px] left-[-100px]">
          <Image
            width={"900px"}
            height={"500px"}
            src={"/img/backgraphics.png"}
          />
        </div>
        <div className="absolute top-[35px] left-[70px]">
          <Image
            width={"302px"}
            height={"600px"}
            src={"/img/d1.png"}
          />
        </div>
        <div className="absolute top-[160px] left-[100px] rotate-0">
          <Image 
          width={'109px'}
          height={'105px'}
          src={'/img/d2.png'}
          />
        </div>
        <div className="absolute top-[170px] left-[310px]">
          <Image 
          width={'126px'}
          height={'136px'}
          src={'/img/d3.png'}
          />
        </div>
        <div className="absolute top-[38%] left-[30px]">
          <Image 
          width={'320px'}
          height={'100px'}
          src={'/img/d4.png'}
          />
        </div> */}
        <div className="flex flex-row justify-center items-center">
          <Image
            className=""
            width={"500px"}
            height={"700px"}
            src={"/img/searchSvg1.svg"}
          />
        </div>
      </div>
      <div className="sm:w-full md:w-1/2 flex flex-col justify-center items-center">
        {/* search */}
        <div className="flex flex-row w-full justify-center md:justify-start items-center my-3">
          <input
            className="p-3 bg-dark2 rounded-xl mr-6 w-4/6 outline-none"
            type={"text"}
            placeholder={"Enter Keyword or URL"}
          />
          <div className="bg-gradient-to-r from-rose to-red p-2 rounded-2xl flex ">
            <Image
              src={"/img/search.png"}
              width={"30px"}
              height={"30px"}
            />
          </div>
        </div>
        <div className="items-center flex flex-col justify-center md:items-start">
          <div className="my-2">
            <Image src={"/img/Path 318.png"} width={"100px"} height={"20px"} />
          </div>
          <div className="items-center flex flex-col justify-center md:items-start">
            <p className="text-2xl text-gray-50">Search Music by</p>
            <p className="text-2xl font-bold my-2">Name or Direct URL</p>
            <p className="text-gray-100 font-medium text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus esse aspernatur adipisci earum quos mollitia ut, laborum
              sed quaerat dolorem. Perferendis, doloribus! Quis nobis inventore
              corporis asperiores cumque nulla numquam.
            </p>
          </div>
          <div>
            <Image
              className=""
              src={"/img/Draw(11).svg"}
              width={"500px"}
              height={"250px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
