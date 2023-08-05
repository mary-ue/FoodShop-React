import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts.jsx';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
