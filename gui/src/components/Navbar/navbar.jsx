import Container from "./container";

import "./NavBar.modules.css";
import logo from "../../img/image 2.svg";
import Home from "../../img/Home.svg";
import Library from "../../img/Library.svg";

function NavBar() {
  return (
    <nav className="navBar">
      <Container>
        <div className="navBar-ajusteProfile">
          <table className="navBar-profilePosition">
            <tr>
              <td>
                <img src={logo} alt="Costs" />
              </td>
              <td className="navBar-text-user">
                maya <br />
                view profile
              </td>
            </tr>
          </table>
        </div>
        <div className="navBar-ajusteOptions">
          <ul className="navBar-list">
            <li className="navBar-HomeAdjust">
              <a href="/">
                <img className="navBar-HomeAdjustImage" src={Home} alt="" />
              </a>
            </li>
            <li className="navBar-LibraryAdjust">
              <img className="navBar-LibraryAdjustImage" src={Library} alt="" />
            </li>
            <li className="navBar-item">
              <input
                className="navBar-lupa"
                type="text"
                name="Artists, songs, or podcasts"
                placeholder="Artists, songs, or podcasts"
              />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
