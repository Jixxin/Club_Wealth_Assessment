
function CatsHomePage({ handlePageChange }) {

    const hundredCats = () => {
        handlePageChange('HundredCats')
    }
    const randomCat = () => {
        handlePageChange('RandomCat')
    }

    return(
        <div>
            <div>cat home page</div>
            <button onClick={hundredCats}>100 Cat Photos</button>
            <button onClick={randomCat}>Get Random Cat Photo</button>
        </div>
    )
}

export default CatsHomePage