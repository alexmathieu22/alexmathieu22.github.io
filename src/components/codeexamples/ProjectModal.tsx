import { useEffect } from "react";

import { Project } from "../../data/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ProjectModal({
    project,
    open,
    setOpen,
}: {
    project: Project;
    open: boolean;
    setOpen: Function;
}) {
    useEffect(() => {
        // on mount
        document.body.style.overflow = "hidden";
        return () => {
            // on unmount
            document.body.style.overflow = "unset";
        };
    }, []);
    return (
        <div className="fixed z-50 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-lightMode dark:bg-darkMode drop-shadow-[0_5vh_5vw_rgba(0,0,0,1)] w-[90vw] h-[90vh] rounded-[5vh] flex flex-col items-center justify-center gap-[1vh]">
            <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute left-[7%] top-[7%] h-[7%] tablet:left-[10vh] tablet:top-[8vh] tablet:h-[8vh] object-cover hover:cursor-pointer text-darkMode hover:text-lightMode2 dark:text-white hover:dark:text-darkMode3"
                onClick={() => setOpen(!open)}
            />
            <h1 className="absolute top-[10%] h-[10%] text-[4.5vh] max-w-[80%] font-main">
                {project.title}
            </h1>
            {project.hasVideo && (
                <iframe
                    className="absolute top-[20%] h-[25%] w-[50%] laptop:h-[35%]"
                    src={project.videoLink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                ></iframe>
            )}
            {!project.hasVideo && (
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="absolute top-[20%] h-[25%] w-[50%] laptop:h-[35%] object-contain"
                />
            )}
            <div className="absolute top-[50%] laptop:top-[62%] h-[50%] w-[100%] laptop:h-[38%] flex flex-col justify-center items-center gap-[5%]">
                <hr className="w-[85%] laptop:w-[50%] border-b-[0.8vh] rounded-[1vh] border-darkMode dark:border-white" />
                <div className="w-[80%] h-[20%] flex flex-wrap justify-center items-center gap-[5vw]">
                    {project.technos.map((techno) => (
                        <div key={techno} className="font-main text-[3vh]">
                            {techno}
                        </div>
                    ))}
                </div>
                <p className="w-[80%] pb-[5%] flex-1 tablet:text-[2.5vh] font-main overflow-auto text-justify">
                    {project.hasRepository && (
                        <a
                            href={project.repositoryLink}
                            className="underline underline-offset-2 hover:text-lightMode2 dark:hover:text-darkMode3 mr-[1vw]"
                        >
                            GitHub repository.
                        </a>
                    )}
                    {project.description}
                </p>
            </div>
        </div>
    );
}
