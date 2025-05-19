import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UpcomingDates from "./UpcomingDates";
import Calendar from "./Calendar";
import About from "./About";
import Request from "./Request";
import Admin from "./Admin";
import AdminDashboard from "./AdminDashboard";


const SiteRouter = () => {
    return (
        <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/dates" element={<UpcomingDates />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request />} />
            <Route path="/admin" element={<Admin />}/>
            <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
    )
};
export default SiteRouter;