import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactComparisonGuide from './components/React';
import Digitaltransformation from './pages/Digitaltransformation';
import Businessconsultancy from './pages/Businessconsultancy';
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/React" element={<ReactComparisonGuide />} />
        <Route path="/digital-transformation" element={<Digitaltransformation />} />
        <Route path="/business-consultancy" element={<Businessconsultancy />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
