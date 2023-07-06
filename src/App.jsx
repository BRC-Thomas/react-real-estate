import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Compagnies from "./components/Compagnies/Compagnies";
import Residencies from "./components/Residencies/Residencies";
import './App.css'

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Compagnies />
      <Residencies />
    </div>
  );
}

export default App;
