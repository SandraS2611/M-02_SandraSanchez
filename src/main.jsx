import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import "./styles/bootstrap.min.css"
import "/index.css";
import { App } from "./App";



const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)