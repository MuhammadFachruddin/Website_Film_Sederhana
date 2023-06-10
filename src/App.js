import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import "./style/landingPages.css";

function App() {
  return (
    <div>
      <div className="myBg">
        <Navigation />
        <Intro />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
