import "./styles.css"
import { Home, Menu, About } from "./pages"

const pages = {
    home: Home,
    menu: Menu,
    about: About,
};

const init = () => {
    document.querySelectorAll("nav button").forEach(button => {
        button.addEventListener("click", () => {
            pages[button.id]?.();
        });
    });

    Home();
};



document.addEventListener("DOMContentLoaded", init);