import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiExpress, SiKubernetes, SiMongodb, SiPrisma } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';


export default function HeroCard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6"> Ziaual Hassain Shaik | Systems Engineer</h1>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        I'm Zia, a System Engineer at TCS with over 15 months of experience, specializing in ETL processes and leveraging
        <span className="font-semibold text-yellow-300"> Azure</span> and 
        <span className="font-semibold text-yellow-300"> MySQL</span> to design, optimize, and scale data solutions.
        With hands-on expertise across the
        <span className="font-semibold text-yellow-300"> MERN stack</span>,
        <span className="font-semibold text-yellow-300"> AWS</span>, <span className="font-semibold text-yellow-300"> Docker</span>, and <span className="font-semibold text-yellow-300"> Kubernetes</span>,
        I bring a versatile skill set that spans from development through to deployment.
      </p>

      <div className="mt-10">
      <a href=''> <button className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
          Resume
        </button>
      </a> 
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="overflow-hidden mt-10">
        <div className="flex animate-marquee space-x-8 text-2xl md:text-3xl">
          {/* Skill items with icons */}
          <div className="flex items-center space-x-2">
            <FaJs className="text-yellow-300" />
            <span className="font-semibold text-white">JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaReact className="text-blue-400" />
            <span className="font-semibold text-white">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiNextdotjs className="text-black" />
            <span className="font-semibold text-white">Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaNodeJs className="text-green-500" />
            <span className="font-semibold text-white">Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiExpress className="text-gray-700" />
            <span className="font-semibold text-white">Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaJava className="text-red-500" />
            <span className="font-semibold text-white">Java</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <FaAws className="text-orange-500" />
            <span className="font-semibold text-white">AWS</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiMysql className="text-blue-500" />
            <span className="font-semibold text-white">MySQL</span>
          </div>
          <div className="flex items-center space-x-2">
            <DiPostgresql className="text-blue-800" />
            <span className="font-semibold text-white">Postgres</span>
          </div>
          {/* <div className="flex items-center space-x-2">
            <SiMongodb className="text-green-600" />
            <span className="font-semibold text-white">MongoDB</span>
          </div> */}
          <div className="flex items-center space-x-2">
            <SiKubernetes className="text-blue-400" />
            <span className="font-semibold text-white">Kubernetes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaDocker className="text-blue-500" />
            <span className="font-semibold text-white">Docker</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiPrisma className="text-purple-600" />
            <span className="font-semibold text-white">Prisma</span>
          </div>

          {/* Repeat the items for infinite scroll */}
          <div className="flex items-center space-x-2">
            <FaJs className="text-yellow-300" />
            <span className="font-semibold text-white">JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaReact className="text-blue-400" />
            <span className="font-semibold text-white">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiNextdotjs className="text-black" />
            <span className="font-semibold text-white">Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaNodeJs className="text-green-500" />
            <span className="font-semibold text-white">Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiExpress className="text-gray-700" />
            <span className="font-semibold text-white">Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaJava className="text-red-500" />
            <span className="font-semibold text-white">Java</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <FaAws className="text-orange-500" />
            <span className="font-semibold text-white">AWS</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiMysql className="text-blue-500" />
            <span className="font-semibold text-white">MySQL</span>
          </div>
          <div className="flex items-center space-x-2">
            <DiPostgresql className="text-blue-800" />
            <span className="font-semibold text-white">Postgres</span>
          </div>
          {/* <div className="flex items-center space-x-2">
            <SiMongodb className="text-green-600" />
            <span className="font-semibold text-white">MongoDB</span>
          </div> */}
          <div className="flex items-center space-x-2">
            <SiKubernetes className="text-blue-400" />
            <span className="font-semibold text-white">Kubernetes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaDocker className="text-blue-500" />
            <span className="font-semibold text-white">Docker</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiPrisma className="text-purple-600" />
            <span className="font-semibold text-white">Prisma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
