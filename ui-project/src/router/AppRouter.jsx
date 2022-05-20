import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginA from "../pages/loginA/LoginA"
import LoginE from "../pages/loginE/LoginE"
import OptionLogin from "../pages/optionLogin/OptionLogin"
import AdminHabitante from "../pages/adminHabitante/AdminHabitante"
import AdminEmployee from "../pages/adminEmploye/AdminEmployee"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OptionLogin />} />
                <Route path="/loginA" element={<LoginA />} />
                <Route path="/loginE" element={<LoginE />} />
                <Route path="/adminA" element={<AdminHabitante />} />
                <Route path="/adminE" element={<AdminEmployee />} />
            </Routes>
        </Router>
    )
}

export default AppRouter