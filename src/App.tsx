import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import SectorsClients from './pages/SectorsClients';
import StorageExpertise from './pages/StorageExpertise';
import DownloadCenter from './pages/DownloadCenter';
import InstitutionalCredibility from './pages/InstitutionalCredibility';
import ProjectPortfolio from './pages/ProjectPortfolio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/sectors-clients" element={<SectorsClients />} />
          <Route path="/storage-expertise" element={<StorageExpertise />} />
          <Route path="/download-center" element={<DownloadCenter />} />
          <Route path="/institutional-credibility" element={<InstitutionalCredibility />} />
          <Route path="/project-portfolio" element={<ProjectPortfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
