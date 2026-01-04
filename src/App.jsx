import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactComparisonGuide from './components/React';
import Digitaltransformation from './pages/Digitaltransformation';
import Businessconsultancy from './pages/Businessconsultancy';
import DigitalMarketing from './pages/DigitalMarketing';
import CustomWebsite from './pages/CustomWebsite';
import Blog from './pages/Blog';
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
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path='/customwebsite' element={<CustomWebsite />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
