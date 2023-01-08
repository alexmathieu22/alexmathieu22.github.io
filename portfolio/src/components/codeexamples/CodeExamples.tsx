import { Project } from "../../data/projects";
import ProjectBox from "./ProjectBox";

export default function CodeExamples({ projects }: { projects: Project[] }) {
    return (
        <div className="w-screen min-h-screen flex flex-col gap-[5vh] items-center">
            <div className="mt-[5vh] w-[100%] text-center font-main h-fit flex flex-col items-center">
                <div className="text-[3vh]">I'M AIMING TO BE A</div>
                <div className="text-[10vh] mt-[-3vh] font-roboto">CLEAN</div>
                <div className="text-[10vh] mt-[-6vh] font-roboto">CODER</div>
                <img
                    src="/{.png"
                    alt="curlybracket"
                    className="h-[90vw] tablet:h-[50vw] laptop:h-[30vw] rotate-90 mt-[-30vw] mb-[-30vw] tablet:mt-[-20vw] tablet:mb-[-20vw] laptop:mt-[-10vw] laptop:mb-[-10vw]"
                />
            </div>
            <div className="w-[80%] flex flex-wrap justify-center items-center mb-[5vh]">
                {projects.map((project) => (
                    <ProjectBox key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
