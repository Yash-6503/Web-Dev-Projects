//npm run dev    .......... run command


import Header from './home/page';
import Skills from './skills/page';
import Experience from './experience/page';
import Projects from './projects/page';
import Course from './course/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <div>
    
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Course />
      <Contact />
    
      
      
    </div>
  );
}
