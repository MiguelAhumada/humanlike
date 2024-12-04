import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Author from './components/Author';
import PreviousBook from './components/PreviousBook';
import BookExtract from './components/BookExtract';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  {/* <div className="min-h-screen bg-neutral-950"> */}
  return (
    <div className="min-h-screen bg-custom-svg">
      <Hero />
      <BookExtract />
      <Features />
      <Author />
      <PreviousBook />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;