import { Component } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

class NavNormal extends Component {
  render() {
    return (
        <div className="container center__horizontaly center__vert nav__container">
          <section className="leftside">
            <div className="logo__container"></div>

            <div className="search__container mr__50">
              <label className="search__content container">
                <input
                  type="text"
                  className="border__3"
                  id="search"
                  placeholder="Type something..."
                  autoComplete="off"
                ></input>
                <i className="search__icon">
                  <IoSearchCircleOutline />
                </i>
              </label>
            </div>
          </section>
          <nav id="links" className="navbar mr__50">
            <div className="navbar__wrappers">
              <ul className="container__row">
                <li className="container">
                  <a href="/" className="nav__link link">
                    Strona główna
                  </a>
                </li>
                <li className="container ml__25">
                  <a href="/" className="nav__link link">
                    Prace
                  </a>
                </li>
                <li className="container ml__25">
                  <a href="/" className="nav__link link">
                    Nowości {/*Blog*/}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="login__container ml__10">
           <Link to="/signin"> <button className="border__3" id="login_btn">
              Zaloguj się
            </button></Link>
          </div>
        </div>
    );
  }
}

export default NavNormal;
