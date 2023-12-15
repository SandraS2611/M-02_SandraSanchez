import ReactDOM from "react-dom/client";
import "./Styles/boostrap.min.css";
import "./index.css"; 
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";


const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
