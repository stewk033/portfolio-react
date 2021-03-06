import { useState } from 'react';

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    const map = new Map();
    map.set('about me', <AboutMe />);
    map.set('portfolio', <Portfolio />);
    map.set('resume', <Resume />);
    map.set('contact', <Contact />);

    return map.get(currentPage);
  };

  const jumbotron = (
    <section className="hero-jumbotron">
      <h1>Hi, I'm Kevin</h1>
      <p>I am a full-stack web developer, financial analyst, and gamer</p>
    </section>
  );

  return (
    <div className="wrapper">
      <header>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <main>
        {!currentPage && jumbotron}
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;