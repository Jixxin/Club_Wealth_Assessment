import React, { useState, useEffect } from "react";
import covid from "../../APIs/covid";

function StatePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        covid.getCurrentCovidStats().then((response) => {
          console.log("response", response[localStorage.getItem("index")]);
          setData(response[localStorage.getItem("index")]);
        });
      }, []);


return(
   <div> 
    <div>{localStorage.getItem("state")} Data</div>
    <div className="App">
        <div>Deaths {data.death}</div>
        <div>Total Hospitalized Paitents {data.hospitalized}</div>
        <div>Currently Hospitalized Paitents {data.hospitalizedCurrently}</div>
        <div>Positive Tests {data.positive}</div>
    </div>
    </div>
)


} 

export default StatePage