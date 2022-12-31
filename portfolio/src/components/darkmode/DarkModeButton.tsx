import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

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
                icon="fa-solid fa-sun"
                onClick={() => setTheme("light")}
                className="hover:cursor-pointer absolute top-[5vh] right-[50%] translate-x-[50%] desktop:translate-x-[0%] desktop:right-[5vh] w-[5vh] h-[5vh]"
            />
        );
    } else {
        return (
            <FontAwesomeIcon
                icon="fa-solid fa-moon"
                onClick={() => setTheme("dark")}
                className="hover:cursor-pointer absolute top-[5vh] right-[50%] translate-x-[50%] desktop:translate-x-[0%] desktop:right-[5vh] w-[5vh] h-[5vh]"
            />
        );
    }
}
