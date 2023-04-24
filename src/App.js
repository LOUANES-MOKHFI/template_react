import Header from './Site/Components/Header';
import Footer from './Site/Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Site/Pages/Home/Home';
import About from './Site/Pages/About/About';


function App() {
 

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
   </Router> 
 );
}

export default App;
