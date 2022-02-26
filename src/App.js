import "./App.css";
import Dropdown from "./components/Dropdown-Component";
import { HomeLayout } from "./components/Home-Layout-Component";
import WeatherDetailsList from "./components/Weather-Details-List-cComponent";
import { cities, townWeatherData } from "./data";
import Glossary from "./pages/Glossary";

function App() {
  return (
    <HomeLayout>
      <Dropdown options={cities} onChange={(val) => console.log(val)} />
      <WeatherDetailsList locations={Array(4).fill(townWeatherData)} />
    </HomeLayout>
  );

  return (
    <div className="App">
      <Glossary />
    </div>
  );
}

export default App;
