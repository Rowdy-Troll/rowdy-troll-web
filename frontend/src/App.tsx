import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import Home from "./Home/Home";
import Products from "./Products/Products";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector<HTMLDivElement>(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document
      .querySelector<HTMLDivElement>(".sidebar")
      ?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Rowdy Troll</a>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetail />} />
          </Routes>
        </main>

        <footer className="footer">© 2026 Rowdy Troll</footer>
      </div>
    </Router>
  );
}

export default App;
