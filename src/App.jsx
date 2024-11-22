import logo from './assets/tour229.svg';
import Navbar from './components/Navbar';
import image from './assets/Group.png'
import Hero from './components/Hero';

const tour_info = {
  name: "Tour229",
  logo: logo,
};

const hero_info = {
  name: "Tour229",
  image: image,
  title: "Xperiences pieds sur terre, regard sur l'eau",
  description: "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
}

function App() {
  return (
    <div>
      <Navbar tour_infos={tour_info} />
      <Hero hero_info={hero_info} />
    </div>
  );
}

export default App
