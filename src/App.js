import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Objectives from "./Components/Objectives";
import ContactUs from "./Components/Contact";
import StepsForParticipation from "./Components/Steps";
import CalendarSection from "./Components/Calendar";
import ThemeCardsContainer from "./Components/theme";
import LeaderSection from "./Components/LeaderSection";
import RegistrationForm from "./Components/Register";
import LocationSection from "./Components/LocationSection";
import TeamPage from "./Components/Team";
import Faculty from "./Components/Faculty";
import PrizeSection from "./Components/Prize";
import Committee from "./Components/Committe";
import Gallery from "./Components/Gallery";
// Main home page with all sections
const Home = () => (
  <>
    <Hero />
    <About /> 
    <ThemeCardsContainer />
    <CalendarSection />
    <Objectives />
    <StepsForParticipation />
    <LocationSection />
    <ContactUs />
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<LeaderSection />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-Co-ordinator" element={<TeamPage/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/prize" element={<PrizeSection/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;