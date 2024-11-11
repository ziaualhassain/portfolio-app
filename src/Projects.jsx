import ProjectCard from "./ProjectCard";
import insighterHomepage from "./assets/images/insights.png"
import reactLogo from "./assets/images/react.svg"
import dhihLogo from "./assets/images/dhih.png"
import portfolioLogo from "./assets/images/portfolio.png"
import DSALogo from "./assets/images/DSA.png"
import leadTracker from "./assets/images/leadTracker.png"
import fundRiser from "./assets/images/fundriser.png"

export default function Projects() {
    return (
        <div className="container mx-auto p-4">
             <div className="text-center py-4">
                <h2 className="text-2xl font-semibold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 insighters*/}
                <div>
                    <ProjectCard
                        title="Insighters (In-Progress)"
                        desc="A one-stop destination for all insightful things, including news, articles, and networking opportunities."
                        image={insighterHomepage}
                        livehref="https://insighters.app"
                        githubhref="https://github.com/ziaualhassain"
                        target="_blank"
                        techStack="NextJS | Prisma | Postgres | Tailwind"
                    />
                </div>

                {/* Project 2 PORTFOLIO*/}
                <div>
                    <ProjectCard
                        title="Personal Portfolio"
                        desc = "A dynamic personal portfolio showcasing my skills, projects, and experience as a proof of work. Connect with me on my socials."
                        image={portfolioLogo}
                        livehref="https://zia.codes"
                        githubhref = "https://github.com/ziaualhassain/portfolio-app"
                        target="_blank"
                        techStack="ReactJS | Github Actions | Tailwind CSS"
                    />
                </div>

                {/* Project 3 */}
                <div>
                    <ProjectCard
                        title="Decentralised Health info Hub"
                        desc = "A modern Web3 application for secure and trustworthy health data storage (Developed as part of the engineering curriculum)."
                        image={dhihLogo}
                        livehref="https://drive.google.com/file/d/1fHHQuWP5htWCFfrSFf9JYIpItVwHkSJm/view?usp=sharing"
                        githubhref = "https://drive.google.com/file/d/1fHHQuWP5htWCFfrSFf9JYIpItVwHkSJm/view?usp=sharing"
                        target="_blank"
                        techStack="ReactJS | Solidity | Ethers.js | CSS"
                    />
                </div>

                {/* Decentralised Crowdfunding */}
                <div>
                    <ProjectCard
                        title="Rewardbased Fundrising"
                        desc="A Web3 app on the Ethereum blockchain where users can invest and claim an NFT once funding is complete."
                        image={fundRiser}
                        livehref="https://github.com/ziaualhassain/FundriserV2/files/9856931/Decentralized_RewardBased_Fundraiser_Finaldocs.pdf"
                        githubhref="https://github.com/ziaualhassain/FundriserV2"
                        target="_blank"
                        techStack="ReactJS | Solidity | Ethers.js | IPFS"
                    />
                </div>

                {/* Project 4 Sorting Visualiser */}
                <div>
                    <ProjectCard
                        title="Sorting Algorithm Visusalizer"
                        desc="It is an interactive tool that animates the process of sorting algorithms which helps user to understand their behavior and efficiency."
                        image={DSALogo}
                        livehref="https://ziaualhassain.github.io/Sorting_Visualiser/"
                        githubhref="https://github.com/ziaualhassain/Sorting_Visualiser"
                        target="_blank"
                        techStack="HTML | CSS | Javascript | DSA"
                    />
                </div>

                {/* Project 5 */}
                <div>
                    <ProjectCard
                        title="Lead Tracker"
                        desc="Built this Chrome extension while learning JS on Scrimba, a fantastic platform for anyone interested in frontend development."
                        image={leadTracker}
                        livehref="https://github.com/ziaualhassain/chrome-Extension.github.io"
                        githubhref="https://github.com/ziaualhassain/chrome-Extension.github.io"
                        target="_blank"
                        techStack="HTML | CSS | Javascript"
                    />
                </div>
            </div>
        </div>
    );
}
