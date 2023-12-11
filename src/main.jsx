import { App } from "./App";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import "./Styles/bootstrap.min.css"
import "/index.css"



const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)