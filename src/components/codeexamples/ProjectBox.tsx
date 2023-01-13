import { Project } from "../../data/projects";
import ProjectModal from "./ProjectModal";

import { useState } from "react";

export default function ProjectBox({ project }: { project: Project }) {
    const [open, setOpen] = useState(false);
    function projectModal() {
        return <ProjectModal project={project} open={open} setOpen={setOpen} />;
    }

    return (
        <div className="relative w-[60vw] h-[60vw] tablet:w-[35vh] tablet:h-[35vh] desktop:w-[50vh] desktop:h-[50vh] flex flex-col justify-center items-center gap-[5%]">
            {open ? projectModal() : null}
            <div
                className="hover:cursor-pointer hover:scale-105 ease-out duration-300 bg-lightMode2 dark:bg-darkMode2 w-[70%] h-[70%] flex items-center justify-center rounded-[25%] tablet:rounded-[25%] overflow-hidden"
                onClick={() => setOpen(!open)}
            >
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="min-w-[100%] min-h-[100%] object-cover hover:opacity-40"
                />
            </div>
            <div className="h-[25%] w-[100%] flex justify-center items-center">
                <h1 className="select-none font-main text-center h-[100%] w-[45%] text-[2.5vh] tablet:text-[3vh] desktop:text-[4vh]">
                    {project.title}
                </h1>
            </div>
        </div>
    );
}
