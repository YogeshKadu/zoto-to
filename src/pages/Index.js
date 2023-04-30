import React from 'react';
import HeaderMin from './_components/HeaderMin';
import BGImage from '../assets/images/zoro-bg.jpg';
import ZoroImage from '../assets/images/zoro-min.png';
import ZoroLongImage from './../assets/images/logo.png';


const MostSearch = [
  {
    title:"Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    href:'www.google.com',
  },
  {
    title:"One Piece",
    href:'www.google.com',
  },
  {
    title:"Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    href:'www.google.com',
  },
  {
    title:"Naruto: Shippuden",
    href:'www.google.com',
  },
  {
    title:"Suzume's Door-Locking",
    href:'www.google.com',
  },
  {
    title:"Naruto",
    href:'www.google.com',
  },
  {
    title:"Demon Slayer: Entertainment District",
    href:'www.google.com',
  },
  {
    title:"Black Clover",
    href:'www.google.com',
  },
]
function HeroSection(){
  return (
    <div className='relative h-[400px] lg:h-[320px] xl:h-[450px] w-full flex'>
      <div className='absolute -z-0 bg h-full w-full'>
        <img src={BGImage} alt="bg" className='h-full w-full object-cover' />
      </div>
      <div className='z-10 h-full w-full bg-gradient-to-b from-zinc-800 to-transparent px-4'>
        <div className='container mx-auto max-w-6xl xl:max-w-7xl relative h-full'>
          <div className='relative h-full  sm:mx-8 lg:mx-0'>
            <img src={ZoroImage} alt="zoro avatar" className='absolute bottom-0 right-0 hidden md:block md:w-72 lg:w-[400px] xl:w-[600px]' />
            <div className='w-full h-full px-0 lg:px-8 py-12'>
              <div className='flex flex-col justify-center h-full gap-8 w-full md:w-[60%] xl:w-[50%] xl:ml-6'>
                <div className='flex sm:justify-start justify-center'>
                  <img src={ZoroLongImage} alt="long logo" className='w-48'/>
                </div>
                <form action={null} className='flex flex-row gap-2 w-full'>
                  <input type='text' placeholder='Search Anime...' className='flex-grow rounded-full px-6'/>
                  <button className='block aspect-square bg-lime-300 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-3">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
                <div className='w-full text-gray-400 font-thin text-sm tracking-wide space-x-3'>
                  <span className='font-montserrat-medium text-sm text-white'>Top Search:</span>
                  {
                    MostSearch.map((item,index)=> 
                      <a href={item.href} class="after:content-[','] hover:text-lime-300 overflow-hidden" key={index}>{item.title}</a>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function AboutSection(){
  return (
    <div className='relative sm:relative w-full bg-transparent -top-7 sm:top-0'>
      <div className='container mx-auto max-w-6xl px-4'>
        <button className='bg-lime-300 w-full flex gap-2 justify-center font-montserrat-medium text-lg items-center h-14 rounded-full sm:rounded-t-none sm:rounded-b-3xl mb-11'>
          <p>
            View Full Site 
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
          </svg>
        </button>
      {/* Share Zoro */}
      <div className='bg-black/60 p-4 rounded-lg line-clamp-none flex flex-row gap-4'>
        <span className='hidden md:block px-[2px] rounded-full bg-lime-300'></span>
        <div>
          <p className='text-lime-300 font-semibold mb-1 text-sm'>Share Zoro</p>
          <p className='text-gray-300 font-thin text-xs'>to your friends</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default function Index() {
  return (
    <div className='w-full font-montserrat-regular'>
      <HeaderMin />
      <section className=''>
        <HeroSection />
        <AboutSection />
      </section>
    </div>
  )
}
