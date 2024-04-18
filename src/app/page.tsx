'use client';

import Image from "next/image";
import {useState} from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import code from '../../public/code.png'
import design from '../../public/design.png'
import consulting from '../../public/full.png'
import PdfQABot from '../../public/PDFQAGen.jpeg'
import oldPortfolio from '../../public/oldPortfolio.png'
import movieLand from '../../public/MovieLand.png'
import web01 from '../../public/web01.png'
import tamZhi from '../../public/TamZhi.png'
import web02 from '../../public/web02.png'
import merrn from '../../public/merrn.png'
import tail from '../../public/tail.png'
import python from '../../public/python.png'
import code1 from '../../public/code1.png'
import design1 from '../../public/api.png'

import anu1 from '../../public/anu1.png'


export default function Home() {
  const [darkMode, setDark] = useState(false);
  return (
    <>
    
  <div className={darkMode ? 'dark' : '' }>

    <main className="bg-white px-10 md:px-20 lg:px-50 dark:bg-black dark:text-white">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons md:text-2xl lg:text-2xl">Anuja&apos;s Portfolio</h1>
          <ul className="flex items-center gap-8">

            <li><BsFillMoonStarsFill onClick={() => setDark(!darkMode)}
             className="cursor-pointer text-2xl"/> {' '}
            </li>
            <a target="_blank" href="https://drive.google.com/file/d/1xlm9ZwUQEXGkqMjpM-4DXjBfVjG2-isy/view?usp=sharing" >
              <li className="text-xl text-black-600 hover:text-red-600 cursor-pointer">
              Resume</li></a>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl text-teal-600 py-5">Anuja Herath</h2>
          <h3 className="text-2xl py-5">FullStack Developer</h3>
          <p  className="text-md py-5 text-gray-500 font-medium leading-8">
              Hello, I&apos;m Anuja. I&apos;m a full-stack developer currently pursuing a Master&apos;s degree in Data Science and Analytics. With over two years of experience, I specialize in backend development and data science, boasting proven expertise in Java, Python, Django, React.js, and front-end technologies. I enjoy building sites and apps and am currently learning the MERN stack. My focus areas are React (Next.js) and Data Science.

          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-gray-600 hover:cursor-pointer ">
  

          <a target="_blank" href="https://github.com/AnujaDilrukshiHerath" ><AiFillGithub /> </a>
          <a target="_blank" href="https://www.linkedin.com/in/anuja-herath/"><AiFillLinkedin /> </a> 
          <a target="_blank" href="https://www.instagram.com/anuja_dilrukshi/?img_index=1"><AiFillInstagram /> </a>
        </div>

        <div className="w-50 h-50  mx-auto object-cover block-relative mt-20 pt-10 md:w-96 md:h-96 flex items-center justify-center overflow-hidden">
          <Image src={anu1} className="object-cover w-96 h-96" alt=""/>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-700 md:text-2xl"> 
            As a dedicated FullStack Developer with a passion for data and 
            a knack for creating seamless user experiences, I offer a range of 
            services that bridge the gap between data science and front-end magic. 
            Here&apos;s how I can help bring your projects to life:
          </p>
          <p className="text-md py-2 leading-8 text-gray-700 md:text-2xl">
          
          </p>
        
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="m-auto" src={code1} alt=""/>
            <h3 className="text-lg font-md"><b>Backend Development and API Integration </b></h3>
            <p className="py-2 md:text-2xl">
              Crafting robust backend systems with Java and Python.
              API development with Django Rest Framework for seamless front-to-back integration.
              Implementing authentication, authorization, and secure data handling.

            </p>
            <h4 className="py-4 text-teal-500">The tools I use</h4>
            <p className="text-gray-600 py">Python</p>
            <p className="text-gray-600 py">Django</p>
            <p className="text-gray-600 py">Java</p>
            <p className="text-gray-600 py">Springboot</p>

          </div>


          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            
  
            <Image className="m-auto" src={design1} alt=""/>
            <h3 className="text-lg font-md"> <b>Web Application Development</b></h3>
            <p className="py-2 md:text-2xl">
              Building responsive and dynamic single-page applications (SPAs) 
              with React.js.
              Server-side rendering with Next.js for SEO-friendly 
              and performance-optimized web pages.
              Integrating RESTful APIs and developing custom 
              backend services with Node.js and Express.
                          </p>
            <h4 className="py-4 text-teal-500">The tools I use</h4>
            <p className="text-gray-600 py">React.js</p>
            <p className="text-gray-600 py">Next.js</p>
            <p className="text-gray-600 py">Express</p>
          </div>


          <div className="text-center shadow-lg p-20 rounded-xl my-10">
            <Image className="m-auto" src={consulting} alt=""/>
            <h3 className="text-lg font-md"><b>FullStack Development with MERN Stack </b></h3>
            <p className="py-2 md:text-2xl">
                Leveraging the MERN (MongoDB, Express.js, React.js, Node.js) 
                stack for fullstack application development.
                Creating end-to-end solutions that are scalable, 
                maintainable, and user-friendly.
            </p>
            <h4 className="py-4 text-teal-500">The tools I use</h4>
            <p className="text-gray-600 py">MongoDb</p>
            <p className="text-gray-600 py">Express.js</p>
            <p className="text-gray-600 py">React.js</p>
            <p className="text-gray-600 py">Node.js</p>

          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl py-1">Portfolio</h3>
                  <p className="text-md py-2 leading-8 text-gray-700 md:text-2xl"> 

        {/* <p className="text-md py-2 leading-8 text-gray-800"> */}
       
          Designing and managing database schemas with a focus on efficiency and scalability.
          Backend optimization for improved performance.
          Implementing server-side logic and functionality.
          Ensuring application robustness and reliability. </p>
                    <p className="text-md py-2 leading-8 text-gray-700 md:text-2xl"> 

          Conducting thorough data analysis to drive decision-making and insights.
          Designing and implementing machine learning models to solve complex problems.
          Data visualization to help communicate complex datasets in an understandable manner.
          Providing strategic recommendations based on data-driven insights. </p>
       
                 <p className="text-md py-5 leading-8 text-gray-700 md:text-2xl">
</p>
        <div className="flex flex-col gap-8 lg:flex-wrap lg:flex-row">
          <div className="basis-1/3 flex-1">
            <Image src={PdfQABot} alt=""/>
          </div> 


        <div className="basis-1/3 flex-1">
            <a target="_blank" href="https://anujadilrukshiherath.github.io/" >

            <Image src={tamZhi} alt=""/>
            </a>
          </div>

          <div className="basis-1/3 flex-1">
            <a target="_blank" href="https://anujadilrukshiherath.github.io/" >

            <Image src={oldPortfolio} alt=""/>
            </a>
          </div>

          <div className="basis-1/3 flex-1">
          <a target="_blank" href="https://movie-land-react-js.vercel.app/" >
            <Image src={movieLand} alt=""/>
            </a>
          </div>

          <div className="basis-1/3 flex-1">
            <a target="_blank" href="https://w1790023.users.ecs.westminster.ac.uk/hillcountry.html" >
              <Image src={web01} alt=""/>
              </a>
            
          </div>

          <div className="basis-1/3 flex-1">
            <a target="_blank" href="https://w1790023.users.ecs.westminster.ac.uk/hillcountry.html" >
            <Image src={web02} alt=""/>
            </a>
          </div>

          

        </div>
      </section>


</main>
  </div>
</>
  );
}
