import { HeadersInterceptor } from 'app/core/interceptors';
import React from 'react';
import {Sidebar} from "./app/shared/components";
import {Outlet} from "react-router-dom";


HeadersInterceptor();

function App() {
    return (
        <div>
            <Sidebar />
            <div className="overview">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
