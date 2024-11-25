import logo from './assets/tour229.svg';
import Navbar from './components/Navbar';
import image from './assets/Group.png'
import Hero from './components/Hero';
import { activities } from './datas/activities';  
import Cards from './components/Cards';

const tour_info = {
  name: "Tour229",
  logo: logo,
};

const hero_info = {
  name: "Tour229",
  image: image,
  title: "Xperiences pieds sur terre, regard sur l'eau",
  description: "Participez à des activités interactives uniques dirigées par des hôtes uniques, le tout sans quitter votre domicile."
}

function App() {
  return (
    <div>
      <Navbar tour_infos={tour_info} />
      <Hero hero_info={hero_info} />
      <section className='cards--section'>
        {activities.map((activity, index) => (
          <Cards key={index} cartes={activity} />
        ))}
      </section>
    </div>
  );
}

export default App
