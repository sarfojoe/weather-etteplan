import React from "react";
import styled from "styled-components";
import { colors, fontSize } from "../swatch";
import { WeatherIcon } from "./Weather-Icons-Component";

WeatherCard.defaultProps = {
  town: "- - -",
  condition: "- -",
  time: "00:00",
  temp: "- °C",
  windSpeed: "- m/s",
  humidity: "- %",
  precipitation: "- mm",
  forecast: "CloudIcon",
  date: "- -",
};

export default function WeatherCard({
  time,
  temp,
  windSpeed,
  humidity,
  precipitation,
  forecast,
  town,
  condition,
  date,
}) {
  return (
    <CardWrapper>
      <TopChildWrapper>
        <TownWrapper>
          <TownText>{town}</TownText>
          <TimeText>{condition}</TimeText>
        </TownWrapper>
        <TempWrapper>
          <WeatherIcon name={forecast} size={50} />
          <TempText>{temp}</TempText>
        </TempWrapper>
      </TopChildWrapper>
      <BottomChildWrapper>
        <TownWrapper>
          <DateText>{date}</DateText>
          <TimeText>{time}</TimeText>
        </TownWrapper>

        <MiscWrapper>
          <MiscText>Wind: {windSpeed}</MiscText>
          <MiscText>Humidity: {humidity}</MiscText>
          <MiscText>Precipitation: {precipitation}</MiscText>
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
const TempText = styled.p`
  font-size: ${fontSize.xl}px;
  color: ${colors.primaryHeading};
`;
const MiscText = styled.p`
  font-size: ${fontSize.xs}px;
  color: ${colors.primaryText};
`;
