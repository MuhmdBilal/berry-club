import "./Footer.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../media/logo.png";
import Twitter from "../media/twitter.png";
// import Telegram from '../media/telegram.png';
import Kakao from "../media/kakao.png";
import Discord from "../media/discord.png";
import frame11 from "../media/Frame 11.png";
import frame12 from "../media/Frame 12.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Footer = () => {
  let [t, i18n] = useTranslation();
  const handleChangeLanguage = (e) => {
    let { value } = e.target;
    e.preventDefault();
    i18n.changeLanguage(value);
  };
  const detectLang = () => {
    // changeLango
    let lang = i18n.language;
    console.log("lang", lang);
    if (i18n.language == "ko") {
      document.getElementById("changeLango").value = "ko";
    } else if (i18n.language == "en") {
      document.getElementById("changeLango").value = "en";
    }
  };
  useEffect(() => {
    detectLang();
  });
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center align-items-center text-center">
              <a href="/" className="logo">
                <img src={Logo} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-6 py-3 py-md-0 text-center">
              <p className="m-0">
                <a href="mailto:help@metacube.app">help@metacube.app</a>
              </p>
              <p className="m-0">&copy; 2022 METACUBE ALL RIGHTS RESERVED</p>
            </div>
            <div
              className="col-md-3 social d-flex flex-column"
              
            >
              <div>
                <span style={{textDecoration: "underline"}}>TERMS&CONDITIONS</span>
              </div>
              <div className="d-flex flex-row align-items-center mt-2" >
                <a
                  href="https://twitter.com/crazyapegoongye"
                  target="_blank"
                  rel="noreferrer"
                  className="twitter"
                >
                  <img src={frame11} alt="" />
                </a>
                {/* <a href="https://t.me/+5VvQvVvtYIA2OTc9" target="_blank" rel="noreferrer" className="telegram"><img src= { Telegram } alt="" /></a> */}
                {/* <a href="https://open.kakao.com/o/gzwaZ0be" target="_blank" rel="noreferrer" className="kakao"><img src= { Kakao } alt="" /></a> */}
                <a
                  href="https://discord.gg/GJB55Rwbfe"
                  target="_blank"
                  rel="noreferrer"
                  className="discord"
                >
                  <img src={frame12} alt="" />
                </a>
                <div className="d-flex align-items-center myselect">
                  <select
                    className="form-select "
                    aria-label="Default select example"
                    id="changeLango"
                    onChange={(e) => {
                      handleChangeLanguage(e);
                    }}
                  >
                    <option value="en">ENG</option>
                    <option value="ko">KOR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Outlet />
    </div>
  );
};

export default Footer;
