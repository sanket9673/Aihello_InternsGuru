import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import ResumeComponent from "./pages/ResumeComponent";
import LinkBox from "./pages/LinkBox";
import CoverPage from "./pages/CoverPage";
import Hackathon from "./pages/Hackathon";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<UserProfiles />} />

            {/* Others Page */}
            
            <Route path="/coverpage" element={<CoverPage />} />
            <Route path="/resume" element={<ResumeComponent />} />
            <Route path="/linkbox" element={<LinkBox />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<CoverPage />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/skills" element={<Skills />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
