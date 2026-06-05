import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import StudentLife from './pages/StudentLife';
import News from './pages/News';
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAdmissions from './pages/admin/AdminAdmissions';
import AdminNews from './pages/admin/AdminNews';
import AdminCurriculum from './pages/admin/AdminCurriculum';
import AdminSettings from './pages/admin/AdminSettings';
import AdminFAQ from './pages/admin/AdminFAQ';
import AdminFeeStructure from './pages/admin/AdminFeeStructure';
import AdminTransport from './pages/admin/AdminTransport';
import AdminMedia from './pages/admin/AdminMedia';

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
            <Route path="admissions" element={<Admissions />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="student-life" element={<StudentLife />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
          </Route>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="admissions" element={<AdminAdmissions />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="curriculum" element={<AdminCurriculum />} />
            <Route path="faq" element={<AdminFAQ />} />
            <Route path="fee-structure" element={<AdminFeeStructure />} />
            <Route path="transport" element={<AdminTransport />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
