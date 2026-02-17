import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Lazy load all page components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactForm = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));

// Services
const Digitaltransformation = lazy(() => import("./pages/Digitaltransformation"));
const Businessconsultancy = lazy(() => import("./pages/Businessconsultancy"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const DigitalPartnership = lazy(() => import("./pages/DigitalPartnership"));
const CustomWebsite = lazy(() => import("./pages/CustomWebsite"));
const CustomeSoftware = lazy(() => import("./pages/CustomeSoftware"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));

// Blog
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

// Learning Modules
const LearningDashboard = lazy(() => import("./pages/LearningDashboard"));
const AILearningModule = lazy(() => import("./pages/AILearningModule"));
const PPCLearningModule = lazy(() => import("./pages/PPCLearningModule"));
const SEOLearningPlatform = lazy(() => import("./components/SEO/SeoHome"));
const ReactComparisonGuide = lazy(() => import("./components/React"));
const Insidecustomsoftwareservice = lazy(() => import("./pages/Insidecustomsoftwareservice"));

// Legal
const TermsConditions = lazy(() => import("./components/Term"));
const PrivacyPolicy = lazy(() => import("./components/ProvacyPolicy"));

gsap.registerPlugin(ScrollTrigger);

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="w-8 h-8 border-2 border-[#0045EF] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />

          {/* Services */}
          <Route path="/digital-transformation" element={<Digitaltransformation />} />
          <Route path="/business-consultancy" element={<Businessconsultancy />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/digital-partnership" element={<DigitalPartnership />} />
          <Route path="/custom-website" element={<CustomWebsite />} />
          <Route path="/custom-software" element={<CustomeSoftware />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Learning Modules */}
          <Route path="/learn" element={<LearningDashboard />} />
          <Route path="/learn/ai" element={<AILearningModule />} />
          <Route path="/learn/ppc" element={<PPCLearningModule />} />
          <Route path="/learn/seo" element={<SEOLearningPlatform />} />
          <Route path="/learn/seo/:moduleSlug" element={<SEOLearningPlatform />} />
          <Route path="/learn/react-comparison" element={<ReactComparisonGuide />} />
          <Route path="/learn/custom-software-guide" element={<Insidecustomsoftwareservice />} />

          {/* Legal */}
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
      <GDPRConsent />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
