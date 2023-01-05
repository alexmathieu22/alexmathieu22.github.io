import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col w-screen h-screen pt-[10vh]">
                <div className="w-screen h-[10vh] flex flex-row gap-[5vw] laptop:gap-[3vw] justify-center laptop:justify-start laptop:pl-[10vw] items-center">
                    <h1 className="text-darkMode dark:text-white text-[5vh] laptop:text-[8vh] font-main text-center">
                        CONTACT ME
                    </h1>
                    <img
                        src="/raisinghands.svg"
                        alt="raisinghandsemoji"
                        className="latop:h-fit pb-[1vh] h-[8vh]"
                    />
                </div>
                <div className="flex flex-col laptop:flex-row h-[80vh] gap-[8vh] justify-center items-center laptop:pb-[25vh]">
                    <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        onClick={() =>
                            window.open("https://github.com/alexmathieu22")
                        }
                        className="hover:cursor-pointer text-darkMode dark:text-white hover:text-lightMode2 hover:dark:text-lightMode3 w-[15vh] h-[15vh] laptop:w-[20vh] laptop:h-[20vh]"
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/alexandre-mathieu-668943224"
                            )
                        }
                        className="hover:cursor-pointer text-darkMode dark:text-white hover:text-lightMode2 hover:dark:text-lightMode3 w-[15vh] h-[15vh] laptop:w-[20vh] laptop:h-[20vh]"
                    />
                    <FontAwesomeIcon
                        icon="fa-solid fa-envelope"
                        onClick={() =>
                            (window.location.href =
                                "mailto:alexandre.mathieu.7@ulaval.ca")
                        }
                        className="hover:cursor-pointer text-darkMode dark:text-white hover:text-lightMode2 hover:dark:text-lightMode3 w-[15vh] h-[15vh] laptop:w-[20vh] laptop:h-[20vh]"
                    />
                </div>
            </div>
        </div>
    );
}
