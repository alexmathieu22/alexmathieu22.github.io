export interface Project {
    id: number;
    image: { src: string; alt: string };
    title: string;
    description: string;
    technos: string[];
    hasRepository: boolean;
    repositoryLink: string;
    hasVideo: boolean;
    videoLink: string;
}

const projects: Project[] = [
    {
        id: 1,
        image: { src: "https://picsum.photos/300/200", alt: "Project 1" },
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
        technos: ["HTML", "CSS", "JavaScript"],
        hasRepository: true,
        repositoryLink: "github.com",
        hasVideo: false,
        videoLink: "",
    },
    {
        id: 2,
        image: { src: "/glootdo.png", alt: "GlootDo Image" },
        title: "GlootDo",
        description:
            "GlootDo is a teardrop trailer maker made as a team project for an object-oriented software engineering class (ULaval, GLO-2004). We had to build the application using a Larman controller and planned our whole work with various UML diagrams using Visual Paradigm   Prior to this project, I had never worked with Java. As a result, I had to adapt and learn more and more during the semester. Since it was the first project I did that had such a large extent, I also learned to plan and organize my work as a team. Learn more about the project by watching the short video! ",
        technos: ["Java", "Visual Paradigm"],
        hasRepository: true,
        repositoryLink: "github.com",
        hasVideo: true,
        videoLink: "https://www.youtube.com/embed/4mRwf7FWK20",
    },
];

export default projects;
