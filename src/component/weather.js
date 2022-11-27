import React, { useEffect ,useState} from "react";

export default function Weather() {
    const [loading,setLoading]=useState(false);
    const[data,setData]=useState(null);
    const[query,setquery]=useState("");
    const[error,setError]=useState("");
    function handleSubmit(event)
    {
        if(event.key=="Enter"){
            setLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e167a121565880362a4769a2e4acf518`)
            .then(res=>{if (res.ok) 
               { return res.json()}
               throw new Error("Some Error occured while fetching");})
            .then(data=>{setLoading(false);
            setData(data)
            console.log(data)
        setError("")}) .catch(err=>{
                console.log(err);
                setError(err);
                setLoading(false)
                
            })
        }
    }
    if(loading===true){
        return(
            <div> Loading weather data...</div>
        )
    }
    
    return (
    <div>
      <h1 className="app-name">
        Weather App<span>🌤</span>
      </h1>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          onChange={(event)=>{setquery(event.target.value)}}
          onKeyUp={handleSubmit}
        />
      </div>
       {error && (
        <>
          <br />
          <br />
          <span className="error-message">
           
            <span style={{ "fontSize": "20px" }}> Sorry, City not found</span>
          </span>
        </>
      )} 
      {
        !error&&(
            <div>
        <div className="city-name">
          <h2>
            {data?.name} <span>{data?.sys.country}</span>
          </h2>
        </div>
        <div className="date">
          <span>{Date()}</span>
        </div>

        {
          data ? (
            <div>
              <div className="icon-temp">
          <img
            className=""
            src={`http://openweathermap.org/img/wn/10d@2x.png`}
          />
          {Math.round(data?.main.temp-273.15)}
          <sup className="deg">&deg;C</sup>
        </div>
        <div className="des-wind">
          <p>{data?.weather[0].description}</p>
          <p>Wind Speed:{data?.wind.speed} m/s</p>
        </div>
            </div>
          ): " "
        }
        </div>
        )
      }

      

      
      </div>
    )
}