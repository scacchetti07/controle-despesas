import React from 'react'

function Hero({children}) {
  return (
    <section className="w-full min-h-lvh bg-[url(../src/assets/heroImg1.jpg)] bg-slate-500 backdrop-brightness-50 bg-center bg-no-repeat bg-cover">
        {children}
        <div className='flex px-10 min-h-lvh items-center'>
            <h1 className='text-6xl text-white font-bold w-1/2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </section>
  )
}

export default Hero;