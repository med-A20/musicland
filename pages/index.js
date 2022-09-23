import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/hero/Hero";
import { Experience } from "../components/exprience/Experience";
import { Search } from "../components/search/Search";
import { Download } from "../components/download/Download";
import { Footer } from "../components/Footer";

export default function Home() {
  const style = {
    container: "max-w-[1200px] m-auto  p-[1rem]",
  };
  return (
    <>
    <div id="hero">
      <div className="h-fit bg-dark text-light rounded-b-[50px] overflow-hidden">
        <div className={style.container}>
          <Hero />
        </div>
      </div>
    </div>
    <div id='experince'>
      <div className="h-fit bg-dark2 text-light rounded-b-[50px] overflow-hidden">
        <div className={style.container + ` bg-dark2`}>
          <Experience />
        </div>
      </div>
    </div>
    <div id='search'>
      <div className="h-fit bg-dark text-light rounded-b-[50px] overflow-hidden">
        <div className={style.container + ` bg-dark`}>
          <Search />
        </div>
      </div>
    </div>
    <div id='download'>
      <div className="h-fit bg-dark2 text-light rounded-b-[50px] overflow-hidden">
        <div className={style.container + ` bg-dark2`}>
          <Download />
        </div>
      </div>
    </div>
    <div id='footer'>
      <div className="h-fit bg-dark text-light overflow-hidden relative">
        <span className="block absolute h-[1px] bg-red right-0 left-0 bottom-[85px] bg-gradient-to-r from-rose to-red"></span>
        <div className={style.container + ` bg-dark`}>
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
}
