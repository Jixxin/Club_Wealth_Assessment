import React, { useState, useEffect } from "react"
import cats from "../../APIs/cats"

function HundredCatsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        cats.get100Cats().then((response) => {
            console.log("response", response)
            setData(response)
        })
    },[])

    return(
        <div className="App">
      {data.map((item, index) => {
        return <img src={item.url} key={index}></img> ;
      })}
    </div>
    )
}

export default HundredCatsPage