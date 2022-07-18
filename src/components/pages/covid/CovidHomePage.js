import React, { useState, useEffect } from "react";
import covid from "../../APIs/covid";
import states from "us-state-converter"
import './style.css'

function CovidHomePage({ handlePageChange, props }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);
  

  useEffect(() => {
    setPage("one")
  }, [])

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
        <h1>Which State's Data Would You Like To View?</h1>
       <div id="stateList">
      {data.map((item, index) => {
        return <ul>
          <a href="" onClick={loadStateData} key={index} id={index}  className="states">{states.fullName(item.state)}</a>
          </ul>
      })}
      </div>
    </div>
  )

}

export default CovidHomePage;