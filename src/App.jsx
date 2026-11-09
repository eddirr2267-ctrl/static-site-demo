import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const appStyles = {
    backgroundColor: theme === 'light' ? '#faf5ff' : '#2d1b4e',
    color: theme === 'light' ? '#2e1065' : '#e0e0e0',
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyles} className="px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer border border-purple-200"
            style={{
              backgroundColor: theme === 'light' ? '#f3e8ff' : '#2d1b4e',
              color: theme === 'light' ? '#581c87' : '#e9d5ff'
            }}
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <Header />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">

          <aside className="flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <Education />
              <Languages />
              <Skills />
            </div>

            <div className="hidden md:flex justify-center py-4">
              <img
                src="/kuromi3.png"
                alt="Kuromi Decor"
                className="w-24 h-24 object-contain transition-all duration-300 hover:scale-110 hover:rotate-6"
              />
            </div>
          </aside>

          <main className="space-y-6">
            <About />
            <Projects />
            <Reviews />
          </main>

        </div>

        <ContactForm />

        <Footer />

      </div>
    </div>
  );
}

export default App;