import JobBox from "./JobBox";

export default function Folder() {
    return (
        <div className="relative h-fit min-h-screen w-screen flex justify-center overflow-x-hidden">
            <h1 className="absolute z-50 top-[4vw] tablet:top-[5vw] laptop:top-[2vw] desktop:top-[1vw] left-[7vw] tablet:left-[3vw] desktop:left-[7vw] font-main text-[11vw] tablet:text-[5vw] desktop:text-[3.5vw] text-white">
                EXPERIENCES
            </h1>
            <img
                src="/folder.png"
                alt="folder"
                className="absolute left-0 w-[220vw] tablet:w-[100vw] h-[100%] max-w-none"
            />
            <div className="mt-[15vh] mb-[15vh] min-h-screen w-screen gap-[10vh] desktop:gap-[10vw] flex flex-col desktop:flex-row justify-end desktop:justify-center items-center">
                <JobBox />
                <JobBox />
            </div>
        </div>
    );
}
