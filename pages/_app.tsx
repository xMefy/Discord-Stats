import "./styles/index.css";
import "animate.css";
import "./styles/toastify.css";
import "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import React from "react";
import Loading from "../components/Loading";
import { DataProvider } from "../components/utils/context";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    }

    if (!localStorage.getItem("debug")) {
      localStorage.setItem("debug", "true");
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(
      "%c🚀 Welcome to Discord Stats 🚀\nPlease Report bugs to Mefy_#0127",
      "font-size: 1.5rem; font-weight: bold; color: #fff; background: #000; padding: 0.5rem;"
    );
  }, []);

  return loading ? (
    <Loading></Loading>
  ) : (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
