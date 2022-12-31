import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMoon,
    faSun,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faSun, faCircleXmark);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
