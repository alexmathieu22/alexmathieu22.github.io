export default function JobBoxPopUp({
    imagePath,
    jobTitle,
    jobDescription,
    setOpen,
    open,
}) {
    return (
        <div className="fixed z-50 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-lightMode dark:bg-darkMode drop-shadow-[0_5vh_5vw_rgba(0,0,0,1)] w-[90vw] h-[90vh] rounded-[5vh] flex flex-col items-center justify-center gap-[1vh]">
            <img
                src="/dark_x.png"
                alt="x"
                className="absolute left-[5%] top-[5%] h-[10%] object-cover hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            <h1 className="absolute top-[20%] h-[10%] text-[4.5vh] max-w-[80%] font-main">
                {jobTitle}
            </h1>
            <img
                src={imagePath}
                alt="jobLogo"
                className="absolute top-[30%] w-[80%] max-h-[20%] object-cover"
            />
            <hr className="absolute top-[50%] w-[85%] border-b-[0.8vh] rounded-[1vh] border-darkMode dark:border-white" />
            <p className="absolute top-[55%] w-[80%] max-h-[40%] overflow-hidden text-justify">
                {jobDescription}
            </p>
        </div>
    );
}
