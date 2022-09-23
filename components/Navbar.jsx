import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
  const sytle = {
    anchor : "text-xl font-semibold mx-[15px]",
    button : "ml-[0.5rem] px-[15px] py-1 rounded-[50px] font-semibold"
  }
  return (
    <nav className='w-full flex justify-between items-center rounded '>
        <Image src='/img/MuzicLogo.png' className='cursor-pointer' alt="test" width={'40px'} height={'40px'}/>
        <ul className='hidden md:flex'>
            <li><a href="#" className={sytle.anchor}>Home</a></li>
            <li><a href="#" className={sytle.anchor}>About</a></li>
            <li><a href="#" className={sytle.anchor}>Preformer</a></li>
            <li><a href="#" className={sytle.anchor}>Event Shedule</a></li>
        </ul>
        <div className="button flex">
            <button className={sytle.button}>Sign Up</button>
            <button className={sytle.button + ` border-[1px] hover:bg-dark2 hover:border-none hover:px-[16px]`}>Log in</button>
        </div>
    </nav>
  )
}

