import React from 'react';
import logo from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
        <button 
        type='button'
        onClick={()=>window.open('https://github.com')}
        className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles on the Go <br className='max-md:hidden' />
        <span className='orange_gradient'>with OpenAI!</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading and articles! We transform length articles to concise summaries!
        Keep your reading short and sweet!
      </h2>
    </header>
  )
}

export default Hero