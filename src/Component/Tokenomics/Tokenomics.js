import React from "react";
import "./Tokenomics.css";
import Ellipse41 from "../../media/Ellipse 41-01.png";
import { GoPrimitiveDot } from "react-icons/go";
import { FaGreaterThan, FaStarOfLife } from "react-icons/fa";
import TokenomicsPcs1 from "../../media/7003.jpeg";
import TokenomicsPcs2 from "../../media/950 1.png";
import TokenomicsPcs3 from "../../media/07 1.png";
import XMLID from "../../media/XMLID_5228_.png";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
function Tokenomics() {
  let [t, i18n] = useTranslation();
  return (
    <>
      <div className="airdrop-image131 " >
        <div className="container">
          <div
            className="row airdrop-image1 d-flex justify-content-center "
            style={{ borderRadius: "20px" }}
          >
            <div className="col-md-11 col-11 airdrop-every mt-5 mb-3 pb-5">
              <div className="col-12 d-flex justify-content-center mb-2 pt-4">
                <h3 className="randombox-he">{t("Tokenomics0")}</h3>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-10">
                  <div className="row d-flex justify-content-center mt-2">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics1")}:</span>
                      <br />
                      <span className="tokenomics-span1">{t("Tokenomics2")}</span>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics3")}:</span>
                      <br />
                      <span className="tokenomics-span1">{t("Tokenomics4")}</span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics5")}:</span>
                      <br />
                      <span className="tokenomics-span1">1,000,000,000</span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics6")}:</span>
                      <br />
                      <span className="tokenomics-span1">18</span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics7")}</span>
                      <br />
                      <span className="tokenomics-span1">{t("Tokenomics8")}</span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                      <span className="tokenomics-span">{t("Tokenomics9")}</span>
                      <br />
                      <span className="tokenomics-span1">0x6B...f499</span>
                    </div>
                  </div>
                  <div className="col-md-12 col-11 tokenomics-p ms-md-5 mt-3">
                    *{t("Tokenomics10")}
                  </div>
                </div>
                <div className="col-md-5 col-11 d-flex justify-content-center align-items-center">
                  <img src={Ellipse41} className="token-images" />
                  {/* <span className="tokenomic-span21 positions1">50%</span>
                                <span className="tokenomic-span21 positions2">20%</span>
                                <span className="tokenomic-span21 positions3">15%</span>
                                <span className="tokenomic-span21 positions4">13%</span>
                                <span className="tokenomic-span21 positions5">2%</span> */}
                </div>
                <div className="col-md-3 col-11 mt-md-5 mt-1">
                  <div className="row d-flex justify-content-center">
                    <div
                      className="col-md-8 pt-2"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="tokenomics-span11 ">
                        <GoPrimitiveDot
                          size={23}
                          style={{ color: "#00A3FE" }}
                        />{" "}
                        {t("Tokenomics11")}
                      </span>
                      <br />
                      <span
                        className="tokenomics-span1 ms-4"
                        class
                        style={{ color: "#00A3FE" }}
                      >
                        50%{" "}
                        <span
                          className="tokenomics-span1 ms-2"
                          style={{ color: "#ffffff" }}
                        >
                          500,000,000
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div
                      className="col-md-8 pt-2"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="tokenomics-span11 ">
                        <GoPrimitiveDot
                          size={23}
                          style={{ color: "#01982B" }}
                        />{" "}
                        {t("Tokenomics60")}
                      </span>
                      <br />
                      <span
                        className="tokenomics-span1 ms-4"
                        class
                        style={{ color: "#01982B" }}
                      >
                        20%{" "}
                        <span
                          className="tokenomics-span1 ms-2"
                          style={{ color: "#ffffff" }}
                        >
                          200,000,000
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center mt-3">
                    <div
                      className="col-md-8 pt-2"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="tokenomics-span11 ">
                        <GoPrimitiveDot
                          size={23}
                          style={{ color: "#EA7202" }}
                        />{" "}
                        {t("Tokenomics12")}
                      </span>
                      <br />
                      <span
                        className="tokenomics-span1 ms-4"
                        class
                        style={{ color: "#EA7202" }}
                      >
                        15%{" "}
                        <span
                          className="tokenomics-span1 ms-2"
                          style={{ color: "#ffffff" }}
                        >
                          150,000,000
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center mt-3">
                    <div
                      className="col-md-8 pt-2"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="tokenomics-span11 ">
                        <GoPrimitiveDot
                          size={23}
                          style={{ color: "#B61FD1" }}
                        />{" "}
                        {t("Tokenomics13")}
                      </span>
                      <br />
                      <span
                        className="tokenomics-span1 ms-4"
                        class
                        style={{ color: "#B61FD1" }}
                      >
                        13%{" "}
                        <span
                          className="tokenomics-span1 ms-2"
                          style={{ color: "#ffffff" }}
                        >
                          130,000,000
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center mt-3">
                    <div
                      className="col-md-8 pt-2"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="tokenomics-span11 ">
                        <GoPrimitiveDot
                          size={23}
                          style={{ color: "#A5BB19" }}
                        />{" "}
                        {t("Tokenomics14")}
                      </span>
                      <br />
                      <span
                        className="tokenomics-span1 ms-4"
                        class
                        style={{ color: "#A5BB19" }}
                      >
                        2%{" "}
                        <span
                          className="tokenomics-span1 ms-2"
                          style={{ color: "#ffffff" }}
                        >
                          20,000,000
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10 col-11 tokenomics-boxes1 pb-5 mb-5">
              <div className="col-12 d-flex justify-content-center mb-2 mt-3">
                <h3 className="randombox-he">{t("Tokenomics15")}</h3>
              </div>

              <ul className="tokenomics-ul mt-4">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics16")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics17")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp;{t("Tokenomics18")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp;*{t("Tokenomics19")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics20")}.
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics21")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics22")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics23")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-1">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics24")}.
                </li>
              </ul>
              <div className="row d-flex justify-content-center pb-4 pt-4">
                <div className="col-md-11 col-11 tokenomics-boxes1 pb-4 pt-4">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-11 mt-md-2 mt-4">
                      <h4 className="tokenomics-h44 text-center" >{t("Tokenomics25")}(8K)</h4>
                      <div className="row d-flex justify-content-center">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                          <img
                            src={TokenomicsPcs1}
                            className="Tokenomics-Pcs1 mt-2 img-fluid"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <div
                          className=" col-lg-9 col-12 d-flex justify-content-between mt-3"
                          
                        >
                          <span className="tokenomics-span13 text-start ">
                          {t("Tokenomics26")}:
                          </span>
                          <span className="tokenomics-span14 ">
                          {t("Tokenomics27")}
                          </span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                      <div className="col-lg-9 d-flex justify-content-between mt-3">
                        <span className="tokenomics-span15 ">
                        {t("Tokenomics28")}:
                        </span>
                        <span className="tokenomics-span14 ">
                        {t("Tokenomics29")}
                        </span>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-11 mt-md-2 mt-4">
                      <h4 className="tokenomics-h44 text-center">
                      {t("Tokenomics30")}
                      </h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src={TokenomicsPcs2}
                          className="Tokenomics-Pcs1 mt-2 img-fluid"
                        />
                      </div>
                      <div className="row d-flex justify-content-center">
                      <div className="col-lg-9 d-flex justify-content-between mt-3">
                        <span className="tokenomics-span13 text-start">
                        {t("Tokenomics26")}:
                        </span>
                        <span className="tokenomics-span14">
                        {t("Tokenomics31")}
                        </span>
                      </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                      <div className=" col-lg-9 d-flex justify-content-between mt-3">
                        <span className="tokenomics-span15">
                        {t("Tokenomics28")}:
                        </span>
                        <span className="tokenomics-span14">{t("Tokenomics61")}</span>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-11 mt-md-2   mt-4">
                      <h4 className="tokenomics-h44 text-center">
                      {t("Tokenomics32")}
                      </h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src={TokenomicsPcs3}
                          className="Tokenomics-Pcs1 mt-2 img-fluid"
                        />
                      </div>
                      <div className="row d-flex justify-content-center">
                      <div className="col-lg-9 col-12 d-flex justify-content-between mt-3">
                        <span className="tokenomics-span13 text-start ">
                        {t("Tokenomics26")}:
                        </span>
                        <span className="tokenomics-span14 ">
                        {t("Tokenomics33")}
                        </span>
                      </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                      <div className="col-lg-9 col-12 d-flex justify-content-between mt-3">
                        <span className="tokenomics-span15 ">
                        {t("Tokenomics28")}:
                        </span>
                        <span className="tokenomics-span14 ">
                        {t("Tokenomics34")}
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-3">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;&nbsp;{t("Tokenomics35")}.
                </li>

                <ol className="tokenomics-ol">
                  <li className="mt-3">
                    <span className="tokenomics-span333">1)</span>{" "}
                    <span className="tokenomics-span334">
                      &nbsp; {t("Tokenomics36")}
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="tokenomics-span333">2)</span>{" "}
                    <span className="tokenomics-span334">
                      &nbsp; {t("Tokenomics37")}
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="tokenomics-span333">3)</span>{" "}
                    <span className="tokenomics-span334">
                      &nbsp; {t("Tokenomics38")}
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="tokenomics-span333">3)</span>{" "}
                    <span className="tokenomics-span334">
                      &nbsp; {t("Tokenomics39")}
                    </span>
                  </li>
                </ol>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-4 text-white">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics40")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-3 text-white">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics41")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-3 text-white">
                  <FaStarOfLife size={13} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics42")}
                </li>
              </ul>

              <div className=" row d-flex justify-content-center pb-4 pt-4">
                <div className="col-md-11 col-11 tokenomics-boxes1 pb-4 pt-4">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-2 col-11 tokenomics-box21 mt-2">
                      <div className="row">
                        <div
                          className="col-12 tokenomics-box32 pt-2 pb-2"
                          style={{ backgroundColor: "#2E98BA" }}
                        >
                          {t("Tokenomics43")}
                        </div>
                        <span className="tokenomics-span10 mt-3 mb-2">
                        {t("Tokenomics44")}
                        </span>
                        <span className="tokenomics-span10 mb-3">{t("Tokenomics45")}</span>
                      </div>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      <div className="">
                        <img src={XMLID} className="tokenomics-arrow-image" />
                      </div>
                    </div>

                    <div className="col-md-2 col-11 tokenomics-box21 mt-2">
                      <div className="row">
                        <div
                          className="col-12 tokenomics-box32 pt-2 pb-2"
                          style={{ backgroundColor: "#2EA9BA" }}
                        >
                          {t("Tokenomics46")}
                        </div>
                        <span className="tokenomics-span10 mt-3 mb-2">
                        {t("Tokenomics47")}
                        </span>
                        <span className="tokenomics-span10 mb-3">
                        {t("Tokenomics48")}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      <div className="">
                        <img src={XMLID} className="tokenomics-arrow-image" />
                      </div>
                    </div>
                    <div className="col-md-2 col-11 tokenomics-box21 mt-2">
                      <div className="row">
                        <div
                          className="col-12 tokenomics-box32 pt-2 pb-2"
                          style={{ backgroundColor: "#2EBAA9" }}
                        >
                          {t("Tokenomics38")}
                        </div>
                        <span className="tokenomics-span10 mt-3 mb-2">
                        {t("Tokenomics49")}
                        </span>
                        <span className="tokenomics-span10 mb-3">
                        {t("Tokenomics50")}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      <div className="">
                        <img src={XMLID} className="tokenomics-arrow-image" />
                      </div>
                    </div>
                    <div className="col-md-2 col-11 tokenomics-box21 mt-2">
                      <div className="row">
                        <div
                          className="col-12 tokenomics-box32 pt-2 pb-2"
                          style={{ backgroundColor: "#2EBA85" }}
                        >
                          {t("Tokenomics51")}
                        </div>
                        <span className="tokenomics-span10 mt-3 mb-2">
                        {t("Tokenomics49")}
                        </span>
                        <span className="tokenomics-span10 mb-3">
                        {t("Tokenomics52")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-3">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics53")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-3 ms-md-4">
                  {t("Tokenomics62")}
                </li>
              </ul>
              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-3">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics54")}
                </li>
              </ul>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1 text-white">
                  <FaStarOfLife size={15} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics55")}
                </li>
              </ul>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li mt-3">
                  <FaGreaterThan size={15} style={{ color: "#00A5FF" }} />
                  &nbsp;{t("Tokenomics34")}
                </li>
              </ul>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1 text-white">
                  <FaStarOfLife size={15} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics56")}
                </li>
              </ul>

              <ul className="tokenomics-ul">
                <li className="tokenomics-li1 mt-1 text-white">
                  <FaStarOfLife size={18} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics57")}
                </li>
              </ul>

              <ul className="tokenomics-ul ">
                <li className="tokenomics-li1 mt-1 text-white ">
                  <FaStarOfLife size={18} style={{ color: "#2EBA85" }} />
                  &nbsp; *{t("Tokenomics58")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Tokenomics;
