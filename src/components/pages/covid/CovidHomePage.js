import React, { useState, useEffect } from "react";
import covid from "../../APIs/covid";
import states from "us-state-converter"

function CovidHomePage({ handlePageChange }) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    covid.getCurrentCovidStats().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);

  const loadStateData = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    console.log(data[e.target.id])
    localStorage.setItem("state", e.target.text)
    localStorage.setItem("index", e.target.id)
    handlePageChange('StatePage')
  }


  return (
    <div>   
        <div>Click on a State to view each State's covid data</div>
    <div className="App">
      {data.map((item, index) => {
        return <a href="" onClick={loadStateData} key={index} id={index}> {states.fullName(item.state)}</a> ;
      })}
    </div>
    </div>
  );
}

export default CovidHomePage;
