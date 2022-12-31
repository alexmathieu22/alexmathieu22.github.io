export default function JobBox({ imagePath, jobTitle, jobDescription }) {
    return (
        <div className="relative w-[60vw] h-[60vw] tablet:w-[35vh] tablet:h-[35vh] desktop:w-[50vh] desktop:h-[50vh] flex flex-col justify-center items-center gap-[5%]">
            <div className="hover:cursor-pointer bg-lightMode hover:bg-lightMode2 dark:bg-darkMode dark:hover:bg-darkMode2 w-[70%] h-[70%] flex items-center justify-center rounded-[25%] tablet:rounded-[25%]">
                <img
                    src={imagePath}
                    alt="jobLogo"
                    className="w-[90%] max-h-[90%] object-cover"
                />
            </div>
            <div className="h-[25%] w-[100%] flex justify-center items-center">
                <h1 className="select-none font-main text-center h-[100%] w-[45%] text-[2.5vh] tablet:text-[3vh] desktop:text-[4vh]">
                    {jobTitle}
                </h1>
            </div>
        </div>
    );
}
