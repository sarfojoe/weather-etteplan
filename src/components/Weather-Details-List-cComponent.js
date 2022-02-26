import styled from "styled-components";
import TimeCard from "./Time-Card-Component";
import WeatherDetailsComponent from "./Weather-Details-cComponent";

WeatherDetailsList.defaultProps = {
  locations: Array(4).fill({}),
};

export default function WeatherDetailsList({ locations }) {
  console.log({ locations });
  return (
    <ComponentContainer>
      {locations.map((item) => {
        return <WeatherDetailsComponent townWeather={item} />;
      })}
    </ComponentContainer>
  );
}

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;

  @media only screen and (min-width: 660px) {
    justify-content: space-between !important;
    min-width: 614px;
    max-width: 654px;
  }

  @media only screen and (min-width: 1028px) {
    min-width: 923px;
    max-width: 1019px;
  }
  @media only screen and (min-width: 1387px) {
    min-width: 1249px;
    max-width: 1352px;
  }
`;
