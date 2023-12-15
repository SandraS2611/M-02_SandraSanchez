import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./Styles/bootstrap.min.css"
import "../index.css"

import ReactDOM from "react-dom/client";


const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
 
);
