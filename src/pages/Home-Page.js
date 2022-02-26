//components for viewing all built components and compound views
import Dropdown from "../components/Dropdown-Component";
import { HomeLayout } from "../components/Home-Layout-Component";
import { cityDetails, dropDownOptions } from "../data";
import WeatherDetailsList from "../components/Weather-Details-List-cComponent";
import PreloaderComponent from "../components/Preloader-Component";
import axios from "axios";
import React from "react";
import { convertToArray } from "../helpers/convertToArray";

const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const hourlyWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function HomePage() {
  const [weatherState, setWeatherState] = React.useState([]);
  const [loadState, setLoadState] = React.useState(true);
  const [filterState, setFilterState] = React.useState("Kaikki Kaupungit");
  const [filterWeatherState, setFilterWeatherState] = React.useState([]);

  const fetchHelper = async (type, cityCode, coords) => {
    if (type === "primary") {
      return await axios.get(
        `${currentWeatherUrl}id=${cityCode}&units=metric&appid=${apiKey}`,
      );
    }
    return await axios.get(
      `${hourlyWeatherUrl}lat=${coords?.lat}&lon=${coords?.lng}&exclude=current,minutely,daily,alerts&units=metric&appid=${apiKey}`,
    );
  };

  const filterWeatherData = () => {
    if (filterState === "Kaikki Kaupungit") {
      let filteredData = weatherState
        .map((data, index) => {
          return Object.values(data);
        })
        .map((ct, index) => {
          return ct[0];
        });
      setFilterWeatherState([...filteredData]);
      return;
    }

    let city = weatherState.find(
      (city) => Object.keys(city)[0] === filterState,
    );
    city = Object.values(city).map((ct, index) => {
      return [ct];
    });
    setFilterWeatherState([city[0][0]]);
  };
  const fetchBatchData = async (dataArray) => {
    try {
      return await Promise.all(
        dataArray.map(async (cityData, index) => {
          if (index % 2 === 0) {
            return (await fetchHelper("secondary", "", cityData)).data;
          }
          return (await fetchHelper("primary", cityData)).data;
        }),
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const dataArray = convertToArray(cityDetails);
      const response = await fetchBatchData(dataArray);
      const weatherData = [];
      response.forEach((city, index) => {
        if (index % 2 === 0) {
          weatherData.push({
            [response[index + 1].name]: {
              primary: response[index + 1],
              secondary: response[index],
            },
          });
        }
      });
      console.log({ weatherData });
      let filteredData = weatherData
        .map((data, index) => {
          return Object.values(data);
        })
        .map((ct, index) => {
          return ct[0];
        });
      setWeatherState([...weatherData]);
      setFilterWeatherState([...filteredData]);
      setLoadState(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    (async function () {
      if (weatherState.length === 0) {
        await fetchWeatherData();
        return;
      }
      filterWeatherData();
    })();
  }, [filterState]);

  return (
    <HomeLayout>
      <Dropdown options={dropDownOptions} onChange={setFilterState} />
      {loadState ? (
        <PreloaderComponent />
      ) : (
        <WeatherDetailsList locations={filterWeatherState} />
      )}
    </HomeLayout>
  );
}

export default HomePage;
