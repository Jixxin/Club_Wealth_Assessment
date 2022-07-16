
function NavBar({ currentPage, handlePageChange }) {
  return (
    <div id="container">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#homePage"
          onClick={() => handlePageChange('homePage')}
  
          className={currentPage === 'homePage' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;