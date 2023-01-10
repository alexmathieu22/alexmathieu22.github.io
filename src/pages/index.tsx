import Head from "next/head";
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
        <>
            <Head>
                <title>Alexandre Mathieu</title>
                <link rel="icon" href="./favicon.ico" />
                <meta name="og:title" content="Alexandre Mathieu's Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Alexandre Mathieu" />
                <meta
                    name="description"
                    content="This website portrays Alexandre Mathieu's experiences as an aspiring software engineer. Currently completing his software engineering baccalaureate at Université Laval, he aims to diversify his experiences and produce solid, scalable and clean code."
                ></meta>
                <meta
                    name="og:description"
                    content="This website portrays Alexandre Mathieu's experiences as an aspiring software engineer. Currently completing his software engineering baccalaureate at Université Laval, he aims to diversify his experiences and produce solid, scalable and clean code."
                ></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <main>
                <div className="bg-lightMode dark:bg-darkMode overflow-x-hidden overflow-y-hidden">
                    <DarkModeButton />
                    <Presentation />
                    <Experiences experiences={experiences} />
                    <CodeExamples projects={projects} />
                    <Contact />
                </div>
            </main>
        </>
    );
}
