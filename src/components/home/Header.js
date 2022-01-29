import { Component } from "react";

import NavNormal from "../main/NavNormal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      width70pr: window.innerWidth * 0.7,
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    const windowWidth = this.state.windowWidth;
    const width70pr = this.state.width70pr;
    return (
      <header>
        {(() => {
          if (windowWidth <= width70pr) return "Siema" + windowWidth;
          else
            return (
              "Aktualnie " +
              windowWidth +
              " Docelowo:" +
              windowWidth * 0.7 +
              " test: " +
              width70pr
            );
        })()}
        <NavNormal />
      </header>
    );
  }
}

export default Header;
