import React from "react";
import styled from "styled-components";
import { colors, fontSize } from "../swatch";
import { convertTimeStamp } from "../helpers/convertUnixTimestampToDate";

export default function WeatherCard({ currentWeather }) {
  const {
    name,
    weather,
    main: { temp, humidity },
    dt,
    wind: { speed },
  } = currentWeather;
  const { time, date } = convertTimeStamp(dt);
  const precipitation = Object.values(
    currentWeather?.rain || { rain: "empty" },
  );
  return (
    <CardWrapper>
      <TopChildWrapper>
        <TownWrapper>
          <TownText>{name}</TownText>
          <TimeText>{weather[0].description}</TimeText>
        </TownWrapper>
        <TempWrapper>
          <WeatherIconContainer>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt="weatherIcon"
            />
          </WeatherIconContainer>
          <TempText>{parseInt(temp)}°C</TempText>
        </TempWrapper>
      </TopChildWrapper>
      <BottomChildWrapper>
        <TownWrapper>
          <DateText>{date}</DateText>
          <TimeText>{time}</TimeText>
        </TownWrapper>

        <MiscWrapper>
          <MiscText>Wind: {speed}m/s</MiscText>
          <MiscText>Humidity: {humidity}%</MiscText>
          <MiscText>
            Precipitation:{" "}
            {precipitation[0] !== "empty" ? precipitation + "mm" : "0mm"}
          </MiscText>
        </MiscWrapper>
      </BottomChildWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border-radius: 5px;
  border: 1.5px solid ${colors.edge};
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background: ${colors.monoLight};

  /* width: clamp(auto, 100%, 350px); */
  width: 100%;
  max-width: 350px;
  min-width: 277px;

  p {
    margin: 0px;
    padding: 0px;
  }
`;

const TopChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  p {
    margin: 10px;
  }
`;

const BottomChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  /* background: ${colors.primaryLight}; */
  padding: 20px;

  p {
    margin: 2px;
  }
`;

const TownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0px;
  }
`;

const TimeWrapper = styled.div``;

const MiscWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TempWrapper = styled.div`
  display: flex;
  flex-direction: "row";
`;
const TownText = styled.p`
  color: ${colors.primaryHeading};
  font-size: ${fontSize.m}px;
`;
const DateText = styled.p`
  color: ${colors.primaryHeading};
  font-size: ${fontSize.s}px;
`;
const TimeText = styled.p`
  color: ${colors.primaryText};
  font-size: ${fontSize.xs}px;
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WeatherIcon = styled.img`
  width: 100%;
  object-fit: cover;
`;

const WeatherIconContainer = styled.div`
  width: 50px;
`;
const TempText = styled.p`
  font-size: ${fontSize.xl}px;
  color: ${colors.primaryHeading};
`;
const MiscText = styled.p`
  font-size: ${fontSize.xs}px;
  color: ${colors.primaryText};
`;
