import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const { library } = require("@fortawesome/fontawesome-svg-core");
import {
    faMoon,
    faSun,
    faCircleXmark,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faMoon, faSun, faCircleXmark, faEnvelope, faLinkedin, faGithub);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
