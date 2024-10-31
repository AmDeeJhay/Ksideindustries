import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Hero/Hero'
import KsideDriven from './components/Home/KsideDriven/KsideDriven'
import FeaturedProject from './components/Home/FeaturedProject/FeaturedProject'
import Form from './components/Home/Form/Form'
import Map from './components/Home/Map/Map'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KsideDriven />
      <FeaturedProject />
      <Form />
      <Map />
     
    </div>
  );
}

export default App;
 