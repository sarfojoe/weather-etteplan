//components for viewing all built components and compound views
import Dropdown from '../components/Dropdown-Component';
import { HomeLayout } from '../components/Home-Layout-Component';
import TimeCard from '../components/Time-Card-Component';
import WeatherDetailsComponent from '../components/Weather-Details-cComponent';
import WeatherCard from '../components/Weather-Card-Component';
import {
	LightSnowIcon,
	SnowIcon,
	WindCloudsIcon,
	HailIcon,
	RainIcon,
	RainStormIcon,
	SunStormIcon,
	SunThunderStormIcon,
	ThunderStormIcon,
	HeavyCloudIcon,
	SunIcon,
	CloudIcon,
	SunCloudIcon,
	WeatherIcon,
} from '../components/Weather-Icons-Component';
import { cities, townWeatherData } from '../data';
import WeatherDetailsList from '../components/Weather-Details-List-cComponent';

function Glossary() {
	return (
		<div>
            <WeatherDetailsList locations={Array(4).fill(townWeatherData)} />
			<Dropdown options={cities} onChange={(val) => console.log(val)} />
			<WeatherDetailsComponent townWeather={townWeatherData} />
			<WeatherCard />
			<TimeCard />
			<WeatherIcon name={'LightSnowIcon'} />
			<WeatherIcon name={''} />
			<HomeLayout>
			</HomeLayout>
		</div>
	);
}

export default Glossary;
