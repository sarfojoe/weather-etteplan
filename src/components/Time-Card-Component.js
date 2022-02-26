import React from "react";
import styled from "styled-components";
import { colors, fontSize } from "../swatch";
import { convertTimeStamp } from "../helpers/convertUnixTimestampToDate";

export default function TimeCard({ data }) {
  const { dt, weather, wind_speed, humidity, temp } = data;
  const { time } = convertTimeStamp(dt);
  const precipitation = Object.values(data?.rain || { rain: "empty" });
  return (
    <CardWrapper>
      <TopChildWrapper>
        <TimeText>{time}</TimeText>
        <IconWrapper>
          <WeatherIconContainer>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt="weatherIcon"
            />
          </WeatherIconContainer>
        </IconWrapper>
        <TempText>{parseInt(temp)}°C</TempText>
      </TopChildWrapper>
      <BottomChildWrapper>
        <MiscText>{wind_speed}m/s</MiscText>
        <MiscText>{humidity}%</MiscText>
        <MiscText>
          {precipitation[0] !== "empty" ? precipitation + "mm" : "0mm"}
        </MiscText>
      </BottomChildWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border-radius: 5px;
  border: 1.5px solid ${colors.edge};
  display: flex;
  flex-direction: column;
  background: ${colors.monoLight};

  width: 17%;
  max-width: 60px;

  p {
    margin: 0px;
    padding: 0px;
  }
`;

const TopChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${colors.monoBackground};

  p {
    margin: 10px;
  }
`;

const BottomChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primaryLight};
  flex: 3;
  padding: 5px;

  p {
    margin: 2px;
  }
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
  width: 30px;
`;

const TempText = styled.p`
  font-size: ${fontSize.s}px;
  color: ${colors.primaryHeading};
`;

const MiscText = styled.p`
  font-size: ${fontSize.xxs}px;
  color: ${colors.primaryHeading};
`;
