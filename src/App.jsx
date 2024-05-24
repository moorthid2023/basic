import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <div className='h-[100vh]'>
   
       <header>
        <ul className='flex justify-end bg-green-400'>
          <li className='py-5 lg:py-10'><a className='p-5 sm:p-10 hover:bg-slate-400' href="">Home</a></li>
          <li className='py-5 lg:py-10'><a className='p-5 sm:p-10 hover:bg-slate-400' href="">About</a></li>
          <li className='py-5 lg:py-10'><a className='p-5 sm:p-10 hover:bg-slate-400' href="">Contact</a></li>
        </ul>
       </header>
       <main></main>
       <footer></footer>
    </div>
  )
}

export default App
