import { Experience } from "../../data/experiences";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import JobBox from "./JobBox";

export default function Folder({ experiences }: { experiences: Experience[] }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) {
        return null;
    }

    const folder =
        currentTheme === "dark" ? (
            <img
                src="./folderDark.png"
                alt="folder"
                className="absolute left-0 w-[220vw] tablet:w-[100vw] h-[100%] max-w-none"
            />
        ) : (
            <img
                src="./folderLight.png"
                alt="folder"
                className="absolute left-0 w-[220vw] tablet:w-[100vw] h-[100%] max-w-none"
            />
        );

    return (
        <div className="relative h-screen min-h-screen w-screen flex justify-center overflow-x-hidden">
            <h1 className="absolute z-50 top-[4vw] tablet:top-[5vw] laptop:top-[2vw] desktop:top-[1vw] left-[7vw] tablet:left-[3vw] desktop:left-[7vw] font-main text-[11vw] tablet:text-[5vw] desktop:text-[3.5vw] text-darkMode dark:text-white">
                EXPERIENCES
            </h1>
            {folder}
            <div className="pt-[15vh] h-screen w-screen gap-[10vh] desktop:gap-[10vw] flex flex-col desktop:flex-row justify-center desktop:justify-center items-center">
                {experiences.map((experience) => (
                    <JobBox key={experience.id} experience={experience} />
                ))}
            </div>
        </div>
    );
}
