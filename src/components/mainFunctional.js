import React, { useState } from "react";
import CovidHomePage from "./pages/covid/CovidHomePage"
import StatePage from "./pages/covid/StatePage"
import NavBar from "./pages/NavBar"
import HomePage from "../components/pages/HomePage"
import CatsHomePage from "../components/pages/cats/CatsHomePage"
import ManateeHomePage from "../components/pages/manatee/ManateeHomePage"
import StarWarsHomePage from "../components/pages/starwars/StarWarsHomePage"

function MainFunctional() {

  const [currentPage, setCurrentPage] = useState("HomePage")
  const handlePageChange = (page) => setCurrentPage(page)

  const renderPage = () => {
    if (currentPage === 'HomePage') {
      return <HomePage />
    }
    if (currentPage === 'Covid') {
      return <CovidHomePage currentPage={currentPage} handlePageChange={handlePageChange}/>
    }
    if (currentPage === 'StatePage') {
      return <StatePage />
    }
    if(currentPage === 'Cats') {
      return <CatsHomePage />
    }
    if(currentPage === 'StarWars') {
      return <StarWarsHomePage />
    }
    if(currentPage === 'Manatee') {
      return <ManateeHomePage />
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
