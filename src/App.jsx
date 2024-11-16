import './App.scss';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Hero/Hero'
import KsideDriven from './components/Home/KsideDriven/KsideDriven'
import FeaturedProject from './components/Home/FeaturedProject/FeaturedProject'
import Form from './components/Home/Form/Form'
import Map from './components/Home/Map/Map'
import Footer from './components/Footer/Footer'
import NotFoundPage from './components/Home/404Page/404Page'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KsideDriven />
      <FeaturedProject />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}

<Router>
  <Routes>
    <Route path="/" element={<FeaturedProject />} />
    <Route path="/404-project1" element={<NotFoundPage />} />
    <Route path="/404-project2" element={<NotFoundPage />} />
    <Route path="/404-project3" element={<NotFoundPage />} />
  </Routes>
</Router>;

export default App;
 