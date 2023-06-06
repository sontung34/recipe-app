import React from 'react'
import {HiMail} from "react-icons/hi";
import {AiFillGithub} from "react-icons/ai";
import tung from "../images/tung.jpg"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='pb-20 flex flex-col items-center'>
  <div className='flex items-center justify-center md:w-1/3 pt-6'>
    <img src={tung} alt="a man smiling" className='w-1/2 md:w-3/4 rounded-full border-4 border-white'/>
    <div className='ml-6'>
      <h1 className='font-bold mt-4 text-gray-900 text-4xl'>Tung Le</h1>
      <h3 className='font-bold mt-2 text-gray-900 text-2xl'>Chess Player</h3>
      <p className='mt-2 text-gray-600'>Email: sontung34@gmail.com</p>
      <div className='mt-4 flex items-center'>
        <Link href="mailto:sontung34@gmail.com" target="_blank " rel="noreferrer" className='text-gray-600 hover:text-gray-900 flex items-center'>
          <HiMail className='inline-block h-5 w-5 mr-2'/>
          <span className='text-sm'>Email</span>
        </Link>
        <Link href="https://github.com/sontung34" target="_blank" rel="noreferrer" className='ml-4 text-gray-600 hover:text-gray-900 flex items-center'>
          <AiFillGithub className='inline-block h-5 w-5 mr-2'/>
          <span className='text-sm'>GitHub</span>
        </Link>
      </div>
    </div>
  </div>
  <div className='flex flex-col justify-center md:w-2/3 mx-auto'>
    <div className='mt-8 px-4'>
      <h3 className='font-bold text-gray-900 text-2xl'>About me</h3>
      <p className='mt-2 text-gray-600 leading-relaxed text-xl'>I am a programmer who loves music, chess, and sports. I am passionate about coding and enjoy building web applications using React. 
      In my free time, you can find me listening to music, playing chess, or going for a run.
      </p>
    </div>
    <div className='mt-8 px-4'>
      <h3 className='font-bold text-gray-900 text-2xl'>Interests</h3>
      <p className='mt-2 text-gray-600 leading-relaxed text-xl'>I have a wide range of hobbies that keep me busy, including music, sports, running, and baking. But my true passion is chess - 
        I love the thrill of outwitting my opponents with cunning moves. When I'm not honing my chess skills, you might find me jogging around town or whipping up
      </p>
    </div>
  </div>
</div>
      
        


  );
}

export default About
