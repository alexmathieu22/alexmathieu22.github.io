import { Experience } from "../../data/experiences";
import JobBoxPopUp from "./JobBoxPopUp";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function JobBox({ experience }: { experience: Experience }) {
    const currentTheme = getCurrentTheme();

    const [open, setOpen] = useState(false);

    function jobBoxPopUp() {
        return (
            <JobBoxPopUp
                experience={experience}
                currentTheme={currentTheme}
                setOpen={setOpen}
                open={open}
            />
        );
    }

    return (
        <div className="relative w-[60vw] h-[60vw] tablet:w-[35vh] tablet:h-[35vh] desktop:w-[50vh] desktop:h-[50vh] flex flex-col justify-center items-center gap-[5%]">
            {open ? jobBoxPopUp() : null}
            <div
                className="hover:cursor-pointer bg-lightMode hover:bg-lightMode2 dark:bg-darkMode dark:hover:bg-darkMode2 w-[70%] h-[70%] flex items-center justify-center rounded-[25%] tablet:rounded-[25%]"
                onClick={() => setOpen(!open)}
            >
                <img
                    src={
                        currentTheme === "dark"
                            ? experience.imageDark.src
                            : experience.image.src
                    }
                    alt="jobLogo"
                    className="w-[90%] max-h-[90%] object-cover"
                />
            </div>
            <div className="h-[25%] w-[100%] flex justify-center items-center">
                <h1 className="select-none font-main text-center h-[100%] w-[45%] text-[2.5vh] tablet:text-[3vh] desktop:text-[4vh]">
                    {experience.title}
                </h1>
            </div>
        </div>
    );
}

function getCurrentTheme() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    return currentTheme === undefined ? "theme" : currentTheme;
}
