import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaEnvelope,FaCloudDownloadAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiExpress, SiKubernetes, SiMongodb, SiPrisma, SiMicrosoftazure } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Projects from './Projects';

export default function HeroCard() {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center h-screen relative flex flex-col items-center justify-center">
      <div className="px-4 mb-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Ziaual Hassain Shaik | Systems Engineer</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            I'm Zia, a Part-time traveller & full-time SE@TCS with over 15 months of experience, specializing in ETL processes and leveraging
            <span className="font-semibold text-yellow-300"> Azure</span> and 
            <span className="font-semibold text-yellow-300"> MySQL</span> to design, optimize, and scale data solutions.
            With hands-on expertise across the
            <span className="font-semibold text-yellow-300"> MERN stack</span>,
            <span className="font-semibold text-yellow-300"> AWS</span>, <span className="font-semibold text-yellow-300"> Docker</span>, and <span className="font-semibold text-yellow-300"> Kubernetes</span>,
            I bring a versatile skill set that spans from development through to deployment.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a href="https://www.instagram.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-3xl hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://twitter.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-3xl hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/ziaualhassain/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://github.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-yellow-300 transition duration-300" />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6">
          <a href="https://github.com/user-attachments/files/17703959/Ziaual_Hassain_Shaik.pdf" target="_blank">
          <button className="flex items-center bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
              <FaCloudDownloadAlt className="mr-2" /> {/* Icon */}
              Resume
            </button>
          </a>
          <a href="mailto:ziaualhassain@gmail.com" target="_blank">
            <button className="flex items-center bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
              <FaEnvelope className="mr-2" /> {/* Icon */}
              Mail
            </button>
          </a>
        </div>

        {/* Marquee Section */}
        <div className="overflow-hidden absolute bottom-10 left-0 right-0 w-full mb-12">
          <div className="flex animate-marquee space-x-8 text-2xl md:text-3xl">
            {[
              { Icon: FaJs, label: 'JavaScript', color: 'text-yellow-300' },
              { Icon: FaReact, label: 'React', color: 'text-blue-400' },
              { Icon: SiNextdotjs, label: 'Next.js', color: 'text-black' },
              { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
              { Icon: SiExpress, label: 'Express', color: 'text-gray-700' },
              { Icon: FaJava, label: 'Java', color: 'text-red-500' },
              { Icon: FaAws, label: 'AWS', color: 'text-orange-500' },
              { Icon: SiMysql, label: 'MySQL', color: 'text-blue-500' },
              { Icon: DiPostgresql, label: 'Postgres', color: 'text-blue-800' },
              { Icon: SiKubernetes, label: 'Kubernetes', color: 'text-blue-400' },
              { Icon: FaDocker, label: 'Docker', color: 'text-blue-500' },
              { Icon: SiPrisma, label: 'Prisma', color: 'text-purple-600' },
              { Icon: SiMicrosoftazure, label: 'Azure', color: 'text-blue-600' },
            ].map(({ Icon, label, color }) => (
              <div className="flex items-center space-x-2" key={label}>
                <Icon className={color} />
                <span className="font-semibold text-white">{label}</span>
              </div>
            ))}

            {/* Repeat for infinite scroll */}
            {[
              { Icon: FaJs, label: 'JavaScript', color: 'text-yellow-300' },
              { Icon: FaReact, label: 'React', color: 'text-blue-400' },
              { Icon: SiNextdotjs, label: 'Next.js', color: 'text-black' },
              { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
              { Icon: SiExpress, label: 'Express', color: 'text-gray-700' },
              { Icon: FaJava, label: 'Java', color: 'text-red-500' },
              { Icon: FaAws, label: 'AWS', color: 'text-orange-500' },
              { Icon: SiMysql, label: 'MySQL', color: 'text-blue-500' },
              { Icon: DiPostgresql, label: 'Postgres', color: 'text-blue-800' },
              { Icon: SiKubernetes, label: 'Kubernetes', color: 'text-blue-400' },
              { Icon: FaDocker, label: 'Docker', color: 'text-blue-500' },
              { Icon: SiPrisma, label: 'Prisma', color: 'text-purple-600' },
              { Icon: SiMicrosoftazure, label: 'Azure', color: 'text-blue-600' },
            ].map(({ Icon, label, color }) => (
              <div className="flex items-center space-x-2" key={label}>
                <Icon className={color} />
                <span className="font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    </>
  );
}

