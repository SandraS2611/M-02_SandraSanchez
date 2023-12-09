import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/bootstrap.min.css"
import "./styles/styles.css"

const element = document.getElementById("root")

const root = ReactDOM.createRoot(element)

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)