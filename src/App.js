import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import {originals , Action, Comedy, Documentaries, Romance, horror} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={Comedy} title="Comedy" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      

    </div>
  );
}

export default App; 
