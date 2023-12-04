import './index.css';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import Aboutme from './components/Aboutme';
import Myskills from './components/Skills';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';


const App = () => {
     return (
          <div className="">
               <Navbar />
               <HeroSection />
               <Aboutme />
               <Myskills />
               <Resume />
               <Contact />
               <Footer />
          </div>
     )
}

export default App





