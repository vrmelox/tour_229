import logo from './assets/tour229.svg';
import Navbar from './components/Navbar';
const tour_info = {
  name: "Tour229",
  logo: logo,
};

function App() {
  return (
    <div>
      <Navbar tour_infos={tour_info} />
    </div>
  );
}

export default App
