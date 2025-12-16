import React, { StrictMode } from "react";
import reactdom from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Main from "./Main";



const root = reactdom.createRoot(document.querySelector("#root"))
root.render(
    <StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </StrictMode>
)