import Presentation from "../components/presentation/Presentation";
import Experiences from "../components/experiences/Experiences";
import CodeExamples from "../components/codeexamples/CodeExamples";
import Contact from "../components/contact/Contact";
import DarkModeButton from "../components/darkmode/DarkModeButton";
import projects, { Project } from "../data/projects";
import experiences, { Experience } from "../data/experiences";

export async function getStaticProps() {
    return {
        props: {
            projects: projects,
            experiences: experiences,
        },
    };
}

export default function Home({
    projects,
    experiences,
}: {
    projects: Project[];
    experiences: Experience[];
}) {
    return (
        <div className="bg-lightMode dark:bg-darkMode overflow-x-hidden overflow-y-hidden">
            <DarkModeButton />
            <Presentation />
            <Experiences experiences={experiences} />
            <CodeExamples projects={projects} />
            <Contact />
        </div>
    );
}
