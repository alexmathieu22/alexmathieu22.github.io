import PresentationText from "./PresentationText";

export default function Presentation() {
    return (
        <div className="select-none w-screen h-screen flex flex-col gap-16 desktop:gap-0 justify-end desktop:flex-row">
            <div className="w-screen desktop:w-[50vw] h-[20vh] desktop:h-screen flex flex-col items-center desktop:items-end justify-center">
                <PresentationText />
            </div>
            <div className="w-screen desktop:w-[50vw] h-[60vh] desktop:h-screen flex justify-center items-end">
                <img
                    src="/moi-png.png"
                    alt="moi"
                    className="aspect-[1/2] max-h-[100%] desktop:max-h-[85vh] desktop:max-w-[45vw]"
                />
            </div>
        </div>
    );
}
