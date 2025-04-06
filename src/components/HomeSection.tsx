import React, { useEffect } from 'react';
import { loadSection } from '../utils/script';

const HomeSection = () => {
  useEffect(() => {
    loadSection('home-section');
  }, []);

  return (
    <section id="home-section" className="page-section">
      <p>
        We are a (very new) community of survival Minecraft gamers that love to hang out, make friends, and try to survive in a <strong>{process.env.NEXT_PUBLIC_SERVER_DESCRIPTION}</strong>.
      </p>
      <div>
        <button  
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-2"
        onClick={() => loadSection('info-section')}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HomeSection;