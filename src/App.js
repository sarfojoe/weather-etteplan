import "./App.css";
import Dropdown from "./components/Dropdown-Component";
import { HomeLayout } from "./components/Home-Layout-Component";
import WeatherDetailsList from "./components/Weather-Details-List-cComponent";
import { cities, townWeatherData } from "./data";
import GlossaryPage from "./pages/Glossary-Page";
import HomePage from "./pages/Home-Page";

function App() {
  return <HomePage />;

  return (
    <div className="App">
      <GlossaryPage />
    </div>
  );
}

export default App;
