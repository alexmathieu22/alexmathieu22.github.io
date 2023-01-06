import Presentation from "../components/presentation/Presentation";
import Experiences from "../components/experiences/Experiences";
import CodeExamples from "../components/codeexamples/CodeExamples";
import Contact from "../components/contact/Contact";
import DarkModeButton from "../components/darkmode/DarkModeButton";
import projects, { Project } from "../data/projects";

export async function getStaticProps() {
    return {
        props: {
            data: projects,
        },
    };
}

export default function Home({ data }: { data: Project[] }) {
    return (
        <div className="bg-lightMode dark:bg-darkMode overflow-x-hidden overflow-y-hidden">
            <DarkModeButton />
            <Presentation />
            <Experiences />
            <CodeExamples projects={data} />
            <Contact />
        </div>
    );
}
