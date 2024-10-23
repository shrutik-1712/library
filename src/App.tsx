import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Facilities from './Pages/Facilites';
import OPAC from './Pages/OPAC';
import Alumni from './Pages/Alumi';
import Events from './Pages/events';
import Donations from './Pages/Donations';
import Contact from './Pages/Contact';
import AdminPanel from './Pages/Admin';
import EResource from './Pages/Eresource';
import ErrorPage from './Pages/Error404'
import Libinfo from './Pages/Libinfo'
import StudyRoom from './Pages/StudyRoom'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/admin" element={<AdminPanel/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/opac" element={<OPAC />} />
            <Route path="/alumini" element={<Alumni />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/e-resource" element={<EResource />} />
            <Route path="*" element={<ErrorPage />}/>
            <Route path="/Library-info" element={<Libinfo />} />
            <Route path="/StudyRoom" element={<StudyRoom />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;