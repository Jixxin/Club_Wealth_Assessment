import './style.css'

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <div id="banner">
        <h1>Cat's and Covid</h1>
        <h3>Your one stop site for covid stats and cat pics</h3>
      </div>
      <div id="nav">
        <ul className="nav-tabs">
          <li className="listItem">
            <a href="#homePage"
              onClick={() => handlePageChange('HomePage')}
              className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}>
              Home
            </a>
          </li>
          <li className="listItem">
            <a href="#covid"
              onClick={() => handlePageChange('Covid')}
              className={currentPage === 'Covid' ? 'nav-link active' : 'nav-link'}>
              Covid Data
            </a>
          </li>
          <li>
            <a href="#cats"
              onClick={() => handlePageChange('Cats')}
              className={currentPage === 'Cats' ? 'nav-link active' : 'nav-link'}>
              Cat Photos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;