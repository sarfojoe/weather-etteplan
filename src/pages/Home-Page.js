//components for viewing all built components and compound views
import Dropdown from "../components/Dropdown-Component";
import { HomeLayout } from "../components/Home-Layout-Component";
import { cities, townWeatherData } from "../data";
import WeatherDetailsList from "../components/Weather-Details-List-cComponent";

function HomePage() {
  return (
    <HomeLayout>
      <Dropdown options={cities} onChange={(val) => console.log(val)} />
      <WeatherDetailsList locations={Array(4).fill(townWeatherData)} />
    </HomeLayout>
  );
}

export default HomePage;
