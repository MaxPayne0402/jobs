import { Component } from "react";
import {
    AiFillYoutube,
    //AiOutlineYoutube,
    AiFillFacebook,
   // AiOutlineFacebook,
    AiFillInstagram,
   // AiOutlineInstagram,
    AiOutlineTwitter,
    //AiFillTwitterCircle,
    AiFillLinkedin,
  //  AiOutlineLinkedin,
  } from "react-icons/ai";
  


class Icons extends Component {
    render() {
        return (
            <div className="socials__content mr__5">
            <i className="socials__icon yt__icon m__5">
              <AiFillYoutube />
            </i>
            <i className="socials__icon fb__icon m__5">
              <AiFillFacebook />
            </i>

            <svg width="0" height="0">
              <radialGradient id="ig__icon" r="150%" cx="30%" cy="107%">
                <stop stopColor="#fdf497" offset="0" />
                <stop stopColor="#fdf497" offset="0.05" />
                <stop stopColor="#fd5949" offset="0.45" />
                <stop stopColor="#d6249f" offset="0.6" />
                <stop stopColor="#285AEB" offset="0.9" />
              </radialGradient>
            </svg>
            <i className="socials__icon m__5">
              <AiFillInstagram style={{ fill: "url(#ig__icon)" }} />
            </i>
            <i className="socials__icon tw__icon m__5">
              <AiOutlineTwitter />
            </i>
            <i className="socials__icon ln__icon m__5">
              <AiFillLinkedin />
            </i>
          </div>
        );
    }
}

export default Icons;