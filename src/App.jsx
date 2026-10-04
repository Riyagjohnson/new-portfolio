import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
// import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Helmet } from 'react-helmet';
import './App.css';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Riya G Johnson Portfolio</title>
        <meta name="description" content="Riya G Johnson Portfolio" />
        <meta name="keywords" content="Riya G Johnson Portfolio" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <MyWork /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
