
function CatsHomePage({ handlePageChange }) {

    const MultipleCats = () => {
        handlePageChange('MultipleCats')
    }
    const randomCat = () => {
        handlePageChange('RandomCat')
    }

    return(
        <div>
            <h1>Cats</h1>
            <h3>Which cat content would you prefer?</h3>
            <button onClick={MultipleCats}>Multiple Cat Photos</button>
            <button onClick={randomCat}>Get Random Cat Photo</button>
        </div>
    )
}

export default CatsHomePage