import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="container mx-auto p-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <div>
                    <ProjectCard
                        title="Insighters"
                        desc="A one-stop destination for all insightful things, including news, articles, and networking opportunities."
                        image="src/assets/insights.png"
                        livehref="https://insighters.app"
                        githubhref="https://github.com/ziaualhassain"
                        target="_blank"
                        moreinfo="work in progress"
                    />
                </div>

                {/* Project 2 */}
                <div>
                    <ProjectCard
                        title="Decentralised Health info Hub"
                        desc="A new age health data storing web3 app for trust and security"
                        image="src/assets/react.svg"
                        href="https://chatgpt.com"
                        target="_blank"
                    />
                </div>

                {/* Project 3 */}
                <div>
                    <ProjectCard
                        title="Decentralised Hub"
                        desc="A new age health data storing web3 app for trust and security in a decentralised way built on top of ethereal block chain"
                        image="src/assets/react.svg"
                        href="https://chatgpt.com"
                        target="_blank"
                    />
                </div>

                {/* Project 3 */}
                <div>
                    <ProjectCard
                        title="Decentralised Hub"
                        desc="A new age health data storing web3 app for trust and security"
                        image="src/assets/react.svg"
                        href="https://chatgpt.com"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
}
