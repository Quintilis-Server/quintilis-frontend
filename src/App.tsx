import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {UserProvider} from "./context/UserContext.tsx";

export default class App extends React.Component{
    render(){
        return (
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/authorized" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </UserProvider>
        )
    }
}
