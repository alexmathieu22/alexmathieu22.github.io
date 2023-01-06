import { Project } from "../../data/projects";
import ProjectBox from "./ProjectBox";

export default function CodeExamples({ projects }: { projects: Project[] }) {
    return (
        <div className="w-screen h-screen">
            <div className="mt-[5vh] w-[100%] text-center font-main h-fit flex flex-col">
                <div className="text-[3vh]">I'M AIMING TO BE A</div>
                <div className="text-[10vh]">CLEAN</div>
                <div className="text-[10vh]">CODER</div>
            </div>
            <div className="w-[80%] flex flex-wrap justify-center items-center">
                {" "}
                {projects.map((project) => (
                    <ProjectBox project={project} />
                ))}
            </div>
        </div>
    );
}
