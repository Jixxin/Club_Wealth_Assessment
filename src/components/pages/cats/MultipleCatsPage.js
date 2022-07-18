import React, { useState, useEffect } from "react"
import cats from "../../APIs/cats"
import "./style.css"

function MultipleCatsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        cats.get10Cats().then((response) => {
            console.log("response", response)
            setData(response)
        })
    },[])

    return(
        <div className="App">
          <div id="container">
      {data.map((item, index) => {
        return <img src={item.url} className="card" height={500} width={500} key={index}></img> ;
      })}
      </div>
    </div>
    )
}

export default MultipleCatsPage