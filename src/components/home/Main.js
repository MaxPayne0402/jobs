import { Component } from "react";
import Company from "../../style/images/company.png";
import Post1 from "../../style/images/post1.jpg";
import Post2 from "../../style/images/post2.jpg";
import { FaCircle } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";

class Main extends Component {
  render() {
    return (
      <main className="container center__horizontaly m__50">
        <div className="container center__horizontaly container__column jobs__container m__25">
          <div className="container center__horizontaly m__25">
            <div className="container center__vert job__content">
              <div className="logo__company ml__20">
                <img
                  className="logo__img border__circle"
                  src={Company}
                  alt="company"
                />
              </div>
              <div className="container m__10 container__column title__content">
                <span className="job__title m__5">
                  Marketing Manager - Medical Genetics
                </span>
                <span className="job__time ml__5">Full stack</span>
              </div>
              <div className="container primary__content">
                <div className="container position__contnet mr__10">
                  <i className="mr__5 position__icon">
                    <IoLocationSharp />
                  </i>
                  <span className="position__text">Wrocław</span>
                </div>
                <div className="container date__content">
                  <i className="mr__5 date__icon">
                    <GoCalendar />
                  </i>
                  <span className="date__text">23.04</span>
                </div>
              </div>
              <div className="container center__vert benefits__contnet mr__10">
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__market mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Marketing</span>
                </div>
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__front mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Front-End</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container center__horizontaly m__25">
            <div className="container center__vert job__content">
              <div className="logo__company ml__20">
                <img
                  className="logo__img border__circle"
                  src={Company}
                  alt="company"
                />
              </div>
              <div className="container m__10 container__column title__content">
                <span className="job__title m__5">
                  Marketing Manager - Medical Genetics
                </span>
                <span className="job__time ml__5">Full stack</span>
              </div>
              <div className="container primary__content">
                <div className="container position__contnet mr__10">
                  <i className="mr__5 position__icon">
                    <IoLocationSharp />
                  </i>
                  <span className="position__text">Katowice</span>
                </div>
                <div className="container date__content">
                  <i className="mr__5 date__icon">
                    <GoCalendar />
                  </i>
                  <span className="date__text">23.04</span>
                </div>
              </div>
              <div className="container center__vert benefits__contnet mr__10">
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__market mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Marketing</span>
                </div>
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__front mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Front-End</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container center__horizontaly m__25">
            <div className="container center__vert job__content">
              <div className="logo__company ml__20">
                <img
                  className="logo__img border__circle"
                  src={Company}
                  alt="company"
                />
              </div>
              <div className="container m__10 container__column title__content">
                <span className="job__title m__5">
                  Marketing Manager - Medical Genetics
                </span>
                <span className="job__time ml__5">Full stack</span>
              </div>
              <div className="container primary__content">
                <div className="container position__contnet mr__10">
                  <i className="mr__5 position__icon">
                    <IoLocationSharp />
                  </i>
                  <span className="position__text">Warszawa</span>
                </div>
                <div className="container date__content">
                  <i className="mr__5 date__icon">
                    <GoCalendar />
                  </i>
                  <span className="date__text">23.04</span>
                </div>
              </div>
              <div className="container center__vert benefits__contnet mr__10">
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__market mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Marketing</span>
                </div>
                <div className="container advantage__content m__5">
                  <div className="advantage__circle advantage__front mr__5">
                    <FaCircle />
                  </div>
                  <span className="advantage__title">Front-End</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container container__column news__container m__10 border__5">
          <span className="news__title">Nowości</span>
          <div className="container container__column post__content mt__25">
            <img src={Post1} alt="post" className="post__img"></img>
            <div className="container container__column infpost__content">
            <span className="post__title mt__10">
            Lorem Ipsum has been the industry's standard dummy
            </span>
            <span className="post__text mt__5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            </div>
          </div>

          <div className="container container__column post__content mt__25">
            <img src={Post2} alt="post" className="post__img"></img>
            <div className="container container__column infpost__content">
            <span className="post__title mt__10">
            Lorem Ipsum has been the industry's standard dummy
            </span>
            <span className="post__text mt__5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            </div>
          </div>

        </div>
      </main>
    );
  }
}

export default Main;
