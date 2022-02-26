import styled from "styled-components";
import TimeCard from "./Time-Card-Component";

TimeCardList.defaultProps = {
  times: Array(5).fill({}),
};

export default function TimeCardList({ times }) {
  return (
    <ComponentContainer>
      {times.map((item) => {
        return <TimeCard {...item} />;
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
