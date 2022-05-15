import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { routes } from "./app/core/routes";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            {routes.map(props => {
                return <Route key = {props.path} path={props.path} element={props.element}/>
            })}
        </Routes>
    </BrowserRouter>
);
