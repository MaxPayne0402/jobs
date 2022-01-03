import { Component } from "react";
import { RiTeamFill, RiAddBoxFill } from "react-icons/ri";
import { MdPrivacyTip, MdManageAccounts } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import {
  IoInformationCircleSharp,
  IoHardwareChipSharp,
  IoCalculator,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

import {
  AiFillYoutube,
  AiOutlineYoutube,
  AiFillFacebook,
  AiOutlineFacebook,
  AiFillInstagram,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineLinkedin,
} from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container container__row center__vert footer__container">
          <div className="container container__full center__horizontaly container__row info__content">
            <div className="container center__horizontly container__column about__content m__25">
              <span className="footer__title">Ogólne</span>
              <ul className="container__column">
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <RiTeamFill />
                    </i>
                    <span className="footer__text ml__5">O nas</span>
                  </a>
                </li>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <MdPrivacyTip />
                    </i>
                    <span className="footer__text ml__5">
                      Polityka prywatności
                    </span>
                  </a>
                </li>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <FaBook />
                    </i>
                    <span className="footer__text ml__5">Regulamin</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="container center__horizontly container__column candidate__content m__25">
              <span className="footer__title">Dla kandydatów</span>
              <ul>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <IoInformationCircleSharp />
                    </i>
                    <span className="footer__text ml__5">Pomoc</span>
                  </a>
                </li>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <IoCalculator />
                    </i>
                    <span className="footer__text ml__5">
                      Kalkulator wynagrodzeń
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="container center__horizontly container__column business__content m__25">
              <span className="footer__title">Dla firm</span>
              <ul>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <RiAddBoxFill />
                    </i>
                    <span className="footer__text ml__5">Dodaj ogłoszenie</span>
                  </a>
                </li>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <MdManageAccounts />
                    </i>
                    <span className="footer__text ml__5">Konto pracodawcy</span>
                  </a>
                </li>
                <li className="container">
                  <a
                    href="/"
                    className="footer__link container link m__5 mresl"
                  >
                    <i className="footer__icon">
                      <IoHardwareChipSharp />
                    </i>
                    <span className="footer__text ml__5">
                      System rekrutacyjny
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="container center__horizontly container__column contact__content m__25">
              <span className="footer__title">Kontakt</span>
              <ul>
                <li className="container mresl m__5">
                  <i className="footer__icon">
                    <MdEmail />
                  </i>
                  <span className="footer__text ml__5">
                    loremipsum@dummy.en
                  </span>
                </li>
                <li className="container mresl m__5">
                  <i className="footer__icon">
                    <SiMinutemailer />
                  </i>{" "}
                  <span className="footer__text ml__5">Kontakt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="container center__vert container__full  container__column catchy__content">
            {/* LOGO */}
            <span className="catchy__text">
              Lorem Ipsum is simply dummy text of the printing
            </span>
          </div>
          <section className="container center__vert last__footer mt__50">
            <div className="container other__content">
              <span className="other__copyright">
                © 2022 Brand sth, All rights reserved.
              </span>
            </div>
            <div className="socials__content mr__5">
              <i className="socials__icon m__5">
                <AiFillYoutube />
              </i>
              <i className="socials__icon m__5">
                <AiFillFacebook />
              </i>
              <i className="socials__icon m__5">
                <AiFillInstagram />
              </i>
              <i className="socials__icon m__5">
                <AiOutlineTwitter />
              </i>
              <i className="socials__icon m__5">
                <AiFillLinkedin />
              </i>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
