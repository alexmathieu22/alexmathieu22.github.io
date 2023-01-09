export default function PresentationText() {
    return (
        <div className="flex flex-col desktop:gap-[1.5rem]">
            <div className="flex justify-start items-center">
                <h1 className="text-[8vh] desktop:text-[6vw] font-main">
                    HEY,
                </h1>
                <img
                    src="./😎.svg"
                    alt="coolemoji"
                    className="ml-[2vw] h-[9vh] desktop:h-fit desktop:w-[6vw]"
                />
            </div>
            <h1 className="text-[12vh] desktop:text-[12vw] my-[-3vh] desktop:my-[-9vh] font-londrinasketch text-darkMode outlined-dark dark:text-white dark:outlined-light">
                I&apos;M ALEX
            </h1>
        </div>
    );
}
