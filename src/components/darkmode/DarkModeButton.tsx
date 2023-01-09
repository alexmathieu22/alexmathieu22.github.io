import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkModeButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) {
        return null;
    }

    if (currentTheme === "dark") {
        return (
            <FontAwesomeIcon
                icon={faSun}
                onClick={() => setTheme("light")}
                className="hover:cursor-pointer hover:scale-105 ease-out duration-300 hover:dark:text-lightMode3 absolute top-[5vh] right-[50%] translate-x-[50%] desktop:translate-x-[0%] desktop:right-[5vh] w-[5vh] h-[5vh]"
            />
        );
    } else {
        return (
            <FontAwesomeIcon
                icon={faMoon}
                onClick={() => setTheme("dark")}
                className="hover:cursor-pointer hover:scale-105 ease-out duration-300 hover:text-white absolute top-[5vh] right-[50%] translate-x-[50%] desktop:translate-x-[0%] desktop:right-[5vh] w-[5vh] h-[5vh]"
            />
        );
    }
}
