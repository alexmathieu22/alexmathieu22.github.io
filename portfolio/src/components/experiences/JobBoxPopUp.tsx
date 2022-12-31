export default function JobBoxPopUp({
    imagePath,
    jobTitle,
    jobDescription,
    setOpen,
    open,
}) {
    return (
        <div className="fixed z-50 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-lightMode dark:bg-darkMode w-[90vw] h-[90vh] rounded-[10%] flex flex-col items-center justify-center gap-[1vh]">
            <img
                src="/dark_x.png"
                alt="x"
                className="absolute left-[5%] top-[5%] w-[10%] h-fit hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            <h1 className="h-[10%] max-w-[90%]">{jobTitle}</h1>
            <img
                src={imagePath}
                alt="jobLogo"
                className="w-[50%] max-h-[30%] object-cover"
            />
            <p className="w-[90%]">{jobDescription}</p>
        </div>
    );
}
