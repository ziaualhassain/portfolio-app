import githubLogo from "./assets/images/github.svg"
import linkLogo from "./assets/images/link.svg"

const CenterContent = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);

export default function ProjectCard({ image, title, desc, livehref, githubhref, target , techStack}) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-80 p-4 hover:shadow-2xl transition-shadow duration-300">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover rounded-t-lg mb-4" 
            />
            <div className="flex flex-col space-y-2">
                <CenterContent>
                    <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                </CenterContent>
                
                <CenterContent>
                    <p className="text-sm text-gray-600">{desc}</p>
                </CenterContent>
                
                <CenterContent>
                    <p className="text-sm text-gray-600">{techStack}</p>
                </CenterContent>
                
                <div className="flex justify-center space-x-6 mt-4">
                    <a href={livehref} target={target} className="text-blue-500 hover:text-blue-700 transition-colors">
                        <img src={linkLogo} alt="Link icon" className="w-6 h-6"/>
                    </a>
                    <a href={githubhref} target={target} className="text-gray-800 hover:text-gray-600 transition-colors">
                        <img src={githubLogo} alt="GitHub icon" className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
