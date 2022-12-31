import Presentation from "../src/components/presentation/Presentation";
import Experiences from "../src/components/experiences/Experiences";
import CodeExamples from "../src/components/codeexamples/CodeExamples";
import Contact from "../src/components/contact/Contact";
import DarkModeButton from "../src/components/darkmode/DarkModeButton";

export default function Home() {
    return (
        <div className="bg-lightMode dark:bg-darkMode overflow-x-hidden overflow-y-hidden">
            <DarkModeButton />
            <Presentation />
            <Experiences />
            {/* <CodeExamples />
            <Contact /> */}
        </div>
    );
}
