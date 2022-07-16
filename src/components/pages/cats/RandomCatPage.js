import React, { useState, useEffect } from "react"
import cats from "../../APIs/cats"

function RandomCatPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        cats.getRandomCat().then((response) => {
            console.log("response", response[0])
            setData(response[0])
        })
    },[])

    return(
        <div>
            <img src={data.url}></img>
        </div>
    )
}

export default RandomCatPage