export interface Project {
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
        image: { src: "https://via.placeholder.com/300x200", alt: "Project 1" },
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
        image: { src: "https://via.placeholder.com/300x200", alt: "Project 1" },
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
        technos: ["HTML", "CSS", "JavaScript"],
        hasRepository: true,
        repositoryLink: "github.com",
        hasVideo: true,
        videoLink: "https://www.youtube.com/embed/4mRwf7FWK20",
    },
];

export default projects;
