import { useState } from 'react'
import bg from './assets/8401.jpg'
import './App.css'

function App() {
 

  return (
    <div className='h-[100vh]'>
   
       <header>
        <ul className='py-5 sm:text-lg lg:py-10 flex justify-end bg-[#3C8F7D]'>
          <li className=' hover:bg-[#08345B] hover:text-white'><a className='p-5 sm:p-10 ' href="">Home</a></li>
          <li className=' hover:bg-[#08345B] hover:text-white'><a className='p-5 sm:p-10 ' href="">About</a></li>
          <li className=' hover:bg-[#08345B] hover:text-white'><a className='p-5 sm:p-10 ' href="">Contact</a></li>
        </ul>
       </header>
       <main className='flex flex-wrap'>
        <div className="content w-full sm:w-1/2 order-2 sm:order-1">
          <h1 className='text-3xl text-center sm:text-left p-4 sm:p-6 sm:text-5xl text-[#F57359] font-bold'>Some headings</h1>
          <p className='text-lg p-2 sm:p-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis iste! Quod ratione enim tempora, perspiciatis magnam vel corporis harum rerum atque laudantium, optio, consequatur cumque deserunt laborum dolor! Accusantium.
          </p>
        </div>
        <img className='p-2 w-full sm:w-1/2 order-1 sm:order-2' src={bg} alt="" />
       </main>
       <footer></footer>
    </div>
  )
}

export default App
