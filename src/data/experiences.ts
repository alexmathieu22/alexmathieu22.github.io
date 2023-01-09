export interface Experience {
    id: number;
    title: string;
    description: string;
    image: { src: string; alt: string };
    imageDark: { src: string; alt: string };
}

const experiences: Experience[] = [
    {
        id: 1,
        title: "Research Intern",
        description:
            "During the 2021 summer semester, I worked as a research intern at Université Laval. I was part of the DEEL project and was under the supervision of François Laviolette, PhD. I primarily worked on deep neural networks explainability. Among other things, I worked with ensemble methods and how to explain them concretely using partial orders and Hasse diagrams (see picture). Having never worked on machine learning prior to this internship, I had to challenge myself and had to learn a lot in a short period of time. I developped my skills in Python, e.g. with the Scikit-Learn library, and learned to use the Pytorch library.",
        image: { src: "./UL_logo_light.png", alt: "UL logo lightmode" },
        imageDark: { src: "./UL_logo_dark.png", alt: "UL logo darkmode" },
    },
    {
        id: 2,
        title: "Scripting Intern",
        description:
            "During the 2022 summer semester, I worked as a scripting intern at EXFO. I worked in the \"Platform\" team. I wrote multiple scripts to automate the testing of the company's products. I also worked on the automation of some of the company's internal tools. I perfected my knowledge of Python, Bash and Batch/Powershell. ",
        image: { src: "./EXFO_logo.png", alt: "EXFO logo lightmode" },
        imageDark: { src: "./EXFO_logo.png", alt: "EXFO logo lightmode" },
    },
];

export default experiences;
