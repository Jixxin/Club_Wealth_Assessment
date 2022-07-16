
function NavBar({ currentPage, handlePageChange }) {
  return (
    <div id="container">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#homePage"
          onClick={() => handlePageChange('HomePage')}
  
          className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#covid"
          onClick={() => handlePageChange('Covid')}
  
          className={currentPage === 'Covid' ? 'nav-link active' : 'nav-link'}
        >
          Covid Data 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#starwars"
          onClick={() => handlePageChange('StarWars')}
  
          className={currentPage === 'StarWars' ? 'nav-link active' : 'nav-link'}
        >
          Star Wars
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#cats"
          onClick={() => handlePageChange('Cats')}
  
          className={currentPage === 'Cats' ? 'nav-link active' : 'nav-link'}
        >
          Cat Photos
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#manatee"
          onClick={() => handlePageChange('Manatee')}
  
          className={currentPage === 'Manatee' ? 'nav-link active' : 'nav-link'}
        >
          Manatee Joke
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;