import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
