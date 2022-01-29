import { Component } from "react";
import GoogleLogin from "react-google-login";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      hiddenRepeat: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleShowRepeat = this.toggleShowRepeat.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  toggleShowRepeat() {
    this.setState({ hiddenRepeat: !this.state.hiddenRepeat });
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };
    return (
      <main>
        <div className="container center__horizontaly center__vert form__container m__50">
          <div className="container container__column form__content border__5">
            <div className="textlogin__content container__column">
              <span className="form__title">Rejestracja</span>
            </div>
            <form method="POST" className="container container__column mt__20">
              <div className="container container__column">
                <label className="container container__column">
                  <span className="form__label">Adres e-mail</span>
                  <input type="text" className="form__input mt__5"></input>
                </label>
                <label className="container container__column mt__20">
                  <span className="form__label">Numer telefonu</span>
                  <input type="text" className="form__input mt__5"></input>
                </label>
                <label className="container mt__20">
                  <div className="container__column">
                    <span className="form__label">Imię</span>
                    <input
                      type="text"
                      className="form__input half__input mt__5"
                    ></input>
                  </div>
                  <div className="container__column ml__25">
                    <span className="form__label">Nazwisko</span>
                    <input
                      type="text"
                      className="form__input half__input mt__5"
                    ></input>
                  </div>
                </label>
                <label className="container__column mt__25">
                  <div className="password__container">
                    <span className="form__label">Hasło</span>
                    <div className="container">
                      <input
                        type={this.state.hidden ? "text" : "password"}
                        className="form__input mt__5"
                      ></input>
                      <i className="password__eye" onClick={this.toggleShow}>
                        {this.state.hidden ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </i>
                    </div>
                  </div>
                  <div className="password__container mt__25">
                    <span className="form__label">Powtórz hasło</span>
                    <div className="container">
                      <input
                        type={this.state.hiddenRepeat ? "text" : "password"}
                        className="form__input mt__5"
                      ></input>
                      <i className="password__eye" onClick={this.toggleShowRepeat}>
                        {this.state.hiddenRepeat ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </i>
                    </div>
                  </div>
                </label>
              </div>

              <label className="container rules__container mt__25">
                <span className="rules__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
              </label>

              <div className="container center__horizontaly">
                <input
                  className="form__btn mt__25"
                  type="submit"
                  value="Wyraź zgodę i dołącz"
                ></input>
              </div>
            </form>
            <div className="container__full">
              <hr className="hr__text mt__15" content="lub"></hr>
            </div>
            <div className="container gmail__content center__horizontaly mt__10">
              <GoogleLogin
                clientId="1014506615260-dmfhhep5ujauedoqfk2lqgcuko3csda2.apps.googleusercontent.com"
                buttonText="Dołącz przez Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="gmail__btn"
              />
            </div>
            <div className="container mt__25 center__horizontaly">
              <a href="/signin" className="link newacc__link">
                Masz już konto w naszym serwisie? Zaloguj się!
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
