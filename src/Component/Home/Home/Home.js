import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skill/Skills';

const Home = () => {
    return (
        <div className='bg-slate-600 w-[100%] h-[100%] py-32'>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;