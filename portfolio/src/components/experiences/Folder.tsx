import { useTheme } from "next-themes";

import JobBox from "./JobBox";

export default function Folder() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const folder =
        currentTheme === "dark" ? (
            <img
                src="/folderDark.png"
                alt="folder"
                className="absolute left-0 w-[220vw] tablet:w-[100vw] h-[100%] max-w-none"
            />
        ) : (
            <img
                src="/folderLight.png"
                alt="folder"
                className="absolute left-0 w-[220vw] tablet:w-[100vw] h-[100%] max-w-none"
            />
        );

    const logoUlavalPath =
        currentTheme === "dark" ? "/UL_logo_dark.png" : "/UL_logo_light.png";

    return (
        <div className="relative h-screen min-h-screen w-screen flex justify-center overflow-x-hidden">
            <h1 className="absolute z-50 top-[4vw] tablet:top-[5vw] laptop:top-[2vw] desktop:top-[1vw] left-[7vw] tablet:left-[3vw] desktop:left-[7vw] font-main text-[11vw] tablet:text-[5vw] desktop:text-[3.5vw] text-darkMode dark:text-white">
                EXPERIENCES
            </h1>
            {folder}
            <div className="pt-[10vh] h-screen w-screen gap-[10vh] desktop:gap-[10vw] flex flex-col desktop:flex-row justify-center desktop:justify-center items-center">
                <JobBox
                    imagePath={logoUlavalPath}
                    jobTitle={"Research Intern"}
                    jobDescription={
                        "Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant."
                    }
                />
                <JobBox
                    imagePath={"/EXFO_logo.png"}
                    jobTitle={"Scripting Intern"}
                    jobDescription={
                        "Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant. Voici une grosse description de qualite temporaire en attendant."
                    }
                />
            </div>
        </div>
    );
}
