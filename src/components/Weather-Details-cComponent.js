import styled from "styled-components";
import { colors } from "../swatch";
import TimeCard from "./Time-Card-Component";
import TimeCardList from "./Time-Card-List-cComponent";
import WeatherCard from "./Weather-Card-Component";

WeatherDetailsComponent.defaultProps = {};

export default function WeatherDetailsComponent({ townWeather }) {
  return (
    <ComponentContainer>
      <WeatherCard {...townWeather} />
      <TimeCardList times={townWeather?.times} />
    </ComponentContainer>
  );
}

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
