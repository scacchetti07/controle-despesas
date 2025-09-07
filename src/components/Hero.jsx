import React, { useState } from 'react'

function Hero({children}) {
  const [image, setImage] = useState({});

  async function callImages() {
    try {
      // Obtendo os dados da rota definida na api/hello
      const response = await fetch("http://localhost:3000/api/assets/hero")
      if (!response.ok)
        throw new Error("HTTP error: ", response.status)
      const data = await response.json();
      setImage(data)
    } 
    catch(error) {
      console.error(`Error message: ${error}`)
    }
  }

  callImages()
  const style = `w-full min-h-lvh bg-[url(../src/assets/HeroImages/${image[0]})] bg-slate-500 backdrop-brightness-50 bg-center bg-no-repeat bg-cover`
  return (
    <section className={style}>
        {children}
        <div className='flex px-10 min-h-lvh items-center'>
            <h1 className='text-6xl text-white font-bold w-1/2 '>título matéria</h1>
        </div>
    </section>
  )
}

export default Hero;