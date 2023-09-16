import "./Layout.css";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="info-header">
          <div className="container">
            <div className="right-section">
              <a href=""><i class="bi bi-telephone-forward-fill"></i> App Download</a>
              <a href=""><i class="bi bi-question-circle"></i> Help</a>
            </div>
          </div>
        </div>
        <div className="menu-header">
          <div className="container">
            <div className="logo">NR GEMS</div>
            <div className="menu">
              <div className="l1-menu">
                <nav>
                  <a className="nav-item">one menu</a>
                  <a className="nav-item">one menu</a>
                  <a className="nav-item">one menu</a>
                  <a className="nav-item">one menu</a>
                </nav>
              </div>
              <div className="search-section">
              <i class="bi bi-search"></i>
                <input type="search" className="search-input" name="" id="" placeholder="Search"/>
              </div>
            </div>
            <div className="action-button">
              <button><i class="bi bi-person"></i> Account</button>
              <button><i class="bi bi-heart-fill"></i> Wishlist</button>
              <button><i class="bi bi-bag"></i> Cart</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
