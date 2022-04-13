import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header class="pageheader">
        <div class="text-center bg-light">
          <h1 class="">Intervale Poker</h1>
        </div>
        <div class="nav d-flex justify-content-center">
          <nav class=" navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                    <Link to="/" class="nav-link" aria-current="page">
                      List
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/payouts" class="nav-link">
                      Payout Structure
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/pokerstars" class="nav-link">
                      Pokerstars Information
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/signin" class="nav-link">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
