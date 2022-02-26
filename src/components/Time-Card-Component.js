import React from "react"
import styled from "styled-components"
import { colors, fontSize } from "../swatch"
import { WeatherIcon } from "./Weather-Icons-Component"

TimeCard.defaultProps = {
    time: '00:00',
    temp: '- °C',
    windSpeed: '- m/s',
    humidity: '- %',
    precipitation: '- mm',
    forecast: "SnowIcon"
}

export default function TimeCard({
    time,
    temp,
    windSpeed,
    humidity,
    precipitation,
    forecast
}) {
    return <CardWrapper>
        <TopChildWrapper>
            <TimeText>{time}</TimeText>
            <IconWrapper>
                <WeatherIcon name={forecast}/>
            </IconWrapper>
            <TempText>{temp}</TempText>
        </TopChildWrapper>
        <BottomChildWrapper>
            <MiscText>{windSpeed}</MiscText>
            <MiscText>{humidity}</MiscText>
            <MiscText>{precipitation}</MiscText>
        </BottomChildWrapper>
    </CardWrapper>
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
`

const TopChildWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: ${colors.monoBackground};

    p {
        margin: 10px;
    }
`

const BottomChildWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.primaryLight};
    flex: 3;
    padding: 5px;
    
    p{
margin: 2px
    }
`

const TimeText = styled.p`
    color: ${colors.primaryText};
    font-size: ${fontSize.xs}px;
`

const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const TempText = styled.p`
    font-size: ${fontSize.s}px;
    color: ${colors.primaryHeading};
    `

const MiscText = styled.p`
font-size: ${fontSize.xxs}px;
color: ${colors.primaryHeading};
`