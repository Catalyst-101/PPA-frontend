import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/home/Home';
import ApplyNow from './pages/admissions/ApplyNow';
import FeeStructure from './pages/admissions/FeeStructure';
import Uniform from './pages/admissions/Uniform';
import About from './pages/About';
import ClassCurriculum from './pages/curriculum/ClassCurriculum';
import StudentLife from './pages/StudentLife';
import News from './pages/News';

// Placeholder Pages
const Placeholder = ({ title }) => (
  <div className="py-32 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-display-md font-serif text-primary mb-4">{title}</h1>
    <p className="text-text-variant">This page is currently under construction.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen">
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Admissions Routes */}
            <Route path="admissions/apply" element={<ApplyNow />} />
            <Route path="admissions/fee-structure" element={<FeeStructure />} />
            <Route path="admissions/uniform" element={<Uniform />} />
            {/* Curriculum Routes */}
            <Route path="curriculum/:classSlug" element={<ClassCurriculum />} />
            <Route path="student-life" element={<StudentLife />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
