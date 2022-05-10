import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Exercise from "./Pages/Exercise";
import Sleep from "./Pages/Sleep";
import Settings from "./Pages/Settings";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar></Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="exercise/" element={<Exercise />}></Route>
                    <Route path="/sleep" element={<Sleep />}></Route>
                    <Route path="/settings" element={<Settings />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
