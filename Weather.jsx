
const Weather=() => {

    let temp=35;

    if(temp < 15){
        return <h4>It's cold outside</h4>
    } else if (temp >= 15 && temp <= 25) 
    {
        return <h4>It's nice outside</h4>
    } else if (temp > 25){
        return <h4>It's hot outside</h4>
    }
    
}

export default Weather