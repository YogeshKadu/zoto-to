import React from 'react';

export default function HeaderMin() {
  return (
    <div className='block mt-3 lg:mt-14'>
      <div className='container max-w-6xl xl:max-w-7xl mx-auto text-white px-4'>
        <div className='md:hidden pl-3'>
          <button className='flex h-16 items-center p-3 gap-2 text-xs'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu
          </button>
        </div>
        <div className='hidden md:block px-8'>
          <div className='flex h-16 items-center gap-10 text-sm font-montserrat-medium'>
            <button>Home</button>
            <button>Movies</button>
            <button>TV Series</button>
            <button>Most Popular</button>
            <button>Top Airing</button>
          </div>
        </div>
      </div>
    </div>
  )
}
