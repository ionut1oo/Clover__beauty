import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Prices from './Prices';
import Book from './Book';
import Contact from './Contact';
import Main from './Main';


const App = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/acasă" element={<Home />} />
        <Route path='/prețuri' element={<Prices />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/programare' element={<Book />} /> 
      </Routes>
    </section>
  );
}

export default App;
