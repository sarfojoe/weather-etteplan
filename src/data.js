export const timeCardData = {
    time: "15:00",
    temp: "-1°C",
    windSpeed: "2.1 m/s",
    humidity: "5%",
    precipitation: "1 mm",
    forecast: "SnowIcon",
};

export const weatherCardData = {
    town: "Helsinki",
    condition: "Scattered Clouds",
    time: "11:53",
    temp: "0°C",
    windSpeed: 5.1,
    humidity: "86%",
    precipitation: "1 mm",
    forecast: "CloudIcon",
    date: "May 2nd",
};

export const townWeatherData = {
    ...weatherCardData,
    times: [{
            time: "15:00",
            temp: "-1°C",
            windSpeed: "2.1 m/s",
            humidity: "5%",
            precipitation: "1 mm",
            forecast: "CloudIcon",
        },
        {
            time: "18:00",
            temp: "-1°C",
            windSpeed: "2.2 m/s",
            humidity: "20%",
            precipitation: "0 mm",
            forecast: "SunIcon",
        },
        {
            time: "21:00",
            temp: "-1°C",
            windSpeed: "5.1 m/s",
            humidity: "30%",
            precipitation: "2 mm",
            forecast: "CloudIcon",
        },
        {
            time: "15:00",
            temp: "-1°C",
            windSpeed: "1.0 m/s",
            humidity: "55%",
            precipitation: "5 mm",
            forecast: "CloudIcon",
        },
        {
            time: "15:00",
            temp: "-1°C",
            windSpeed: "5.22 m/s",
            humidity: "45%",
            precipitation: "5 mm",
            forecast: "SunCloudIcon",
        },
    ],
};

export const cities = [
    { value: "tampere", label: "Tampere" },
    { value: "jyväskylä", label: "Jyväskylä" },
    { value: "kuopio", label: "Kuopio" },
    { value: "espoo", label: "Espoo" },
];