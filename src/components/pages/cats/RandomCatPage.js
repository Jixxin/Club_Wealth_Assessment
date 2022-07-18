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

    const refreshCat = () => {
        cats.getRandomCat().then((response) => {
            console.log("response", response[0])
            setData(response[0])
        })
    }

    return(
        <div>
            <div id="buttonWrapper">
            <button onClick={refreshCat}>Refresh Cat</button>
            </div>
            <div id="imgWrapper">
            <img id="randomCat"src={data.url} height={800} width={800}></img>
            </div>
        </div>
    )
}

export default RandomCatPage