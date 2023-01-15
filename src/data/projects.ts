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
        image: { src: "./this-website.JPG", alt: "Figma of this website" },
        title: "This website",
        description:
            "This website was built during the break between the fall 2022 and winter 2023 semesters. I wanted to learn more about React and TypeScript, so I decided to build a website to showcase my projects. I also like to be a little creative, so I designed the website in Figma before starting to code. I used React and TypeScript to build the website and styled it with Tailwind CSS. I also used the Next.js framework, it was a little overkill for this project, but since I simply wanted to practice using technologies I had never used, it was a great experience. I used GitHub Pages to host the website.",
        technos: ["React/Next.js", "Tailwind.css", "Typescript"],
        hasRepository: true,
        repositoryLink: "https://github.com/alexmathieu22/portfolio",
        hasVideo: false,
        videoLink: "",
    },
    {
        id: 2,
        image: { src: "./glootdo.png", alt: "GlootDo Image" },
        title: "GlootDo",
        description:
            "GlootDo is a teardrop trailer maker made as a team project for an object-oriented software engineering class (ULaval, GLO-2004). We had to build the application using a Larman controller and planned our whole work with various UML diagrams using Visual Paradigm   Prior to this project, I had never worked with Java. As a result, I had to adapt and learn more and more during the semester. Since it was the first project I did that had such a large extent, I also learned to plan and organize my work as a team. Learn more about the project by watching the short video! (Credits to my teammates: Nathan Paquet, Thomas Mondor and Gabriel Gosselin-Roberge) ",
        technos: ["Java", "Visual Paradigm"],
        hasRepository: false,
        repositoryLink: "",
        hasVideo: true,
        videoLink: "https://www.youtube.com/embed/4mRwf7FWK20",
    },
    {
        id: 3,
        image: {
            src: "https://user-images.githubusercontent.com/58085585/204904893-5606aab9-2493-47af-be4e-c0d6c3f23e8b.png",
            alt: "Cafe Image",
        },
        title: "Cafe",
        description:
            'In the GLO4002 "Qualité et métriques du logiciel" course at Université Laval, in a team of 9, we had to build a REST API for managing a Cafe shop to practice coding good practices. We built it using Java and the REST Assured Java library. This project let us practice the use of SOLID principles, design patterns, TDD approach, the use of a CI/CD pipeline, and the use of GitHub workflows. You can see our whole project on GitHub, I invite you to see the README.md file to learn more about the project, and the Wiki to learn more about the different good practices we used. (Credits to my teammates: Christophe Duchesne, Thomas Mondor, Nathan Paquet, Antony Martel, Jonathan Bessette, Alexandre Aubut, Ines Mrabet and Laurence Campeau)',
        technos: ["Java", "Rest Assured"],
        hasRepository: true,
        repositoryLink: "https://github.com/alexmathieu22/CafeAPI-GLO-4002",
        hasVideo: false,
        videoLink: "",
    },
    {
        id: 3,
        image: {
            src: "./DitRed-logo.png",
            alt: "Ditred logo",
        },
        title: "Ditred",
        description:
            'In the GLO2005 "Modèles et langages des bases de données pour ingénieurs" course at Université Laval, in a team of 3, we had to build a web application that used an SQL database that we created. We decided to create a Reddit pastiche: Ditred. We started by creating an SQL database with MySQL. We then populated it using a script we wrote in Python. The next step was to create the API using Flask. Finally, we created the web front-end using Vue and Javascript. In the end, we had multiple functionnalities like: a login system, a subreddit system, a post system, a comment system, a vote system, a profile-search system, a user profile system, and a live-chat feature (via websockets)! You can see our whole project on GitHub, but I also invite you to watch our video that contains a demo of our final product, but also of our creation process (e.g. our entity-relationship model). (Credits to my teammates: Thomas Mondor and Gabriel Gosselin-Roberge)',
        technos: ["Python", "Flask", "Vue", "Javascript", "Websockets"],
        hasRepository: true,
        repositoryLink: "https://github.com/TomMondor/DitRed",
        hasVideo: true,
        videoLink: "https://www.youtube.com/embed/spo40miOS-A",
    },
];

export default projects;
