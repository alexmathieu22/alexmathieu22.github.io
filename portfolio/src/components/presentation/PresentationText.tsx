export default function PresentationText() {
    return (
        <div>
            <div className="flex justify-start items-center">
                <h1 className="text-[8vh] desktop:text-[13vh] font-main">
                    HEY,
                </h1>
                <img
                    src="/😎.svg"
                    alt="coolemoji"
                    className="ml-[2vw] h-[9vh] desktop:h-[13vh]"
                />
            </div>
            <h1 className="text-[12vh] desktop:text-[23vh] my-[-3vh] desktop:my-[-9vh] font-londrinasketch text-darkMode outlined-dark dark:text-white dark:outlined-light">
                I'M ALEX
            </h1>
        </div>
    );
}
