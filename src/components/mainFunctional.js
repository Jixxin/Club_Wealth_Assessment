import React, { useState } from "react";
import CovidHomePage from "./pages/covid/CovidHomePage"
import StatePage from "./pages/covid/StatePage"
import NavBar from "./pages/navbar/NavBar"
import HomePage from "../components/pages/homepage/HomePage"
import CatsHomePage from "../components/pages/cats/CatsHomePage"
import MultipleCatsPage from "../components/pages/cats/MultipleCatsPage"
import RandomCatPage from "../components/pages/cats/RandomCatPage"

function MainFunctional() {

  const [currentPage, setCurrentPage] = useState("HomePage")
  const handlePageChange = (page) => setCurrentPage(page)

  const renderPage = () => {
    if (currentPage === 'HomePage') {
      return <HomePage />
    }
    if (currentPage === 'Covid') {
      return <CovidHomePage handlePageChange={handlePageChange}/>
    }
    if (currentPage === 'StatePage') {
      return <StatePage />
    }
    if(currentPage === 'Cats') {
      return <CatsHomePage handlePageChange={handlePageChange}/>
    }
    if(currentPage === 'MultipleCats') {
      return <MultipleCatsPage />
    }
    if(currentPage === 'RandomCat') {
      return <RandomCatPage />
    }
  }


  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>   
      <div> {renderPage()} </div>
    </div>
  );
}

export default MainFunctional;
