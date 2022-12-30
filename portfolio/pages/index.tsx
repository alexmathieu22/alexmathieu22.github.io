import Presentation from "../components/presentation/Presentation";
import Experiences from "../components/experiences/Experiences";
import CodeExamples from "../components/codeexamples/CodeExamples";
import Contact from "../components/contact/Contact";

export default function Home() {
    return (
        <div className="bg-lightMode">
            <Presentation />
            <Experiences />
            <CodeExamples />
            <Contact />
        </div>
    );
}
