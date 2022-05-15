import { Component } from "react";
import GoogleLogin from "react-google-login";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      uid: "",
      pwd: "",
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1/project/includes/login.inc.php", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        console.log(this.state);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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
              <span className="form__title">Logowanie</span>
              <span className="form__desc mt__10">
                loreemeask dalsdkj askldj
              </span>
            </div>
            <form
              method="POST"
              onSubmit={this.handleSubmit}
              className="container container__column mt__25"
            >
              <label className="container container__column">
                <input
                  type="text"
                  className="form__input mt__5"
                  placeholder="email lub telefon"
                  name="uid"
                  value={this.state.uid}
                  onChange={(e) => this.setState({ uid: e.target.value })}
                ></input>
                <div className="password__container">
                  <input
                    type={this.state.hidden ? "text" : "password"}
                    className="form__input mt__25"
                    placeholder="haslo"
                    name="pwd"
                    value={this.state.pwd}
                    onChange={(e) => this.setState({ pwd: e.target.value })}
                  ></input>
                  <i className="password__eye" onClick={this.toggleShow}>
                    {this.state.hidden ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </i>
                </div>
              </label>
              <div className="container">
                <a className="link form__forget mt__10" href="/">
                  Nie pamietam hasla
                </a>
              </div>
              <div className="container center__horizontaly">
                <input
                  className="form__btn mt__25"
                  type="submit"
                  value="Zaloguj się"
                  name="sub"
                ></input>
              </div>
            </form>
            <div className="container__full">
              <hr className="hr__text mt__15" content="lub"></hr>
            </div>
            <div className="container gmail__content center__horizontaly mt__10">
              <GoogleLogin
                clientId="1014506615260-dmfhhep5ujauedoqfk2lqgcuko3csda2.apps.googleusercontent.com"
                buttonText="Zaloguj się przez Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="gmail__btn"
              />
            </div>
            <div className="container fb__content center__horizontaly mt__10">
              {/* <FacebookLogin
                appId="630389671536765"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
             /> */}
            </div>
            <div className="container mt__25 center__horizontaly">
              <a href="/signup" className="link newacc__link">
                Nie masz konta? Zarejestruj się tutaj!
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
