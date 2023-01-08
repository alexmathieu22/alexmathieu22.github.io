import { Experience } from "../../data/experiences";
import Folder from "./Folder";

export default function Experiences({
    experiences,
}: {
    experiences: Experience[];
}) {
    return (
        <div className="select-none mt-[-15vh] min-h-screen h-fit w-screen flex items-end">
            <Folder experiences={experiences} />
        </div>
    );
}
