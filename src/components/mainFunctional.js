import React, { useState } from "react";
import HomePage from "./pages/homePage"
import StatePage from "./pages/statePage"
import NavBar from "./pages/navBar"

function MainFunctional() {

  const [currentPage, setCurrentPage] = useState("homePage")
  const handlePageChange = (page) => setCurrentPage(page)

  const renderPage = () => {
    if (currentPage === 'homePage') {
      return <HomePage currentPage={currentPage} handlePageChange={handlePageChange}/>
    }
    if (currentPage === 'statePage') {
      return <StatePage />
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
