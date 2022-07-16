import React, { useState, useEffect } from "react";
import covid from "../APIs/covid";

function homePage({ currentPage, handlePageChange }) {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([])
  

  useEffect(() => {
    covid.getCurrentCovidStats().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);

  useEffect(() => {
    setLocation(localStorage.getItem("state"))
  }, [])

  const loadStateData = (e) => {
    e.preventDefault()
    console.log(e.target.text)
    console.log(data)
    localStorage.setItem("state", e.target.text)
    handlePageChange('statePage')
  }


  return (
    <div>   
        <div>Click on a State to view it's covid data</div>
    <div className="App">
      {data.map((item, index) => {
        return <a href="" onClick={loadStateData} key={index}> {item.state} </a> ;
      })}
    </div>
    </div>
  );
}

export default homePage;
