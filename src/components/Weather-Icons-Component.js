import sun from '../assets/Image_17.png';
import cloud from '../assets/Image_18.png';
import sun_cloud from '../assets/Image_19.png';
import heavy_cloud from '../assets/Image_21.png';
import thunder_storm from '../assets/Image_22.png';
import sun_thunder_storm from '../assets/Image_23.png';
import sun_storm from '../assets/Image_24.png';
import rain_storm from '../assets/Image_25.png';
import rain from '../assets/Image_26.png';
import hail from '../assets/Image_27.png';
import wind_clouds from '../assets/Image_28.png';
import snow from '../assets/Image_29.png';
import light_snow from '../assets/Image_30.png';

const imgStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const imgWrapperStyle = (size) => ({
    width: size ?? 30,
    height: size ?? 30
})

export const LightSnowIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={light_snow} style={imgStyle} />
    </div>
}
export const SnowIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={snow} style={imgStyle} />
    </div>
}
export const WindCloudsIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={wind_clouds} style={imgStyle} />
    </div>
}
export const HailIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={hail} style={imgStyle} />
    </div>
}
export const RainIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={rain} style={imgStyle} />
    </div>
}
export const RainStormIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={rain_storm} style={imgStyle} />
    </div>
}
export const SunStormIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={sun_storm} style={imgStyle} />
    </div>
}
export const SunThunderStormIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={sun_thunder_storm} style={imgStyle} />
    </div>
}
export const ThunderStormIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={thunder_storm} style={imgStyle} />
    </div>
}
export const HeavyCloudIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={heavy_cloud} style={imgStyle} />
    </div>
}
export const SunIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={sun} style={imgStyle} />
    </div>
}
export const CloudIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={cloud} style={imgStyle} />
    </div>
}
export const SunCloudIcon = ({size}) => {
    return <div style={imgWrapperStyle(size)}>
    <img src={sun_cloud} style={imgStyle} />
    </div>
}

export const WeatherIcon = ({name, size}) => {
    
    switch (name) {
        case "LightSnowIcon":
            return <LightSnowIcon size={size}/>
        case "SnowIcon":
            return <SnowIcon size={size}/>
        case "WindCloudsIcon":
            return <WindCloudsIcon size={size}/>
        case "HailIcon":
            return <HailIcon size={size}/>
        case "RainIcon":
            return <RainIcon size={size}/>
        case "RainStormIcon":
            return <RainStormIcon size={size}/>
        case "SunStormIcon":
            return <SunStormIcon size={size}/>
        case "SunThunderStormIcon":
            return <SunThunderStormIcon size={size}/>
        case "ThunderStormIcon":
            return <ThunderStormIcon size={size}/>
        case "HeavyCloudIcon":
            return <HeavyCloudIcon size={size}/>
        case "SunIcon":
            return <SunIcon size={size}/>
        case "CloudIcon":
            return <CloudIcon size={size}/>
        case "SunCloudIcon":
            return <SunCloudIcon size={size}/>
        default:
            return <div>
                <h1>Possible weather icons</h1>
                <p>LightSnowIcon</p>
                <p>SnowIcon</p>
                <p>WindCloudsIcon</p>
                <p>HailIcon</p>
                <p>RainIcon</p>
                <p>RainStormIcon</p>
                <p>SunStormIcon</p>
                <p>SunThunderStormIcon</p>
                <p>ThunderStormIcon</p>
                <p>HeavyCloudIcon</p>
                <p>SunIcon</p>
                <p>CloudIcon</p>
                <p>SunCloudIcon</p>
            </div>
    }
    
} 