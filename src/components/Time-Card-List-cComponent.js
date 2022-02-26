import styled from "styled-components";
import TimeCard from "./Time-Card-Component";

export default function TimeCardList({ times }) {
  const threeHourIndexes = [1, 4, 7, 10];
  return (
    <ComponentContainer>
      {times.map((data, index) => {
        if (threeHourIndexes.includes(index + 1)) {
          return <TimeCard key={index} data={data} />;
        }
        return null;
      })}
    </ComponentContainer>
  );
}

const ComponentContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
`;
