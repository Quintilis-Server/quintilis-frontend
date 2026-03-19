import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";

export default class App extends React.Component{
    render(){
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </>
        )
    }
}
