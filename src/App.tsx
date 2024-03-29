import 'App.css';
import {About, Coupon, ContactForm, Home, NavBar, ProjectBoard, Resume, Footer} from 'components';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<ProjectBoard />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/easter-egg" element={<Coupon />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
