import React from "react";
import "./AirDrop.css";
import comingsoon from "../../media/coming-soon 4.png";
import parachute from "../../media/parachute 1.png";
import Converted from "../../media/41345 [Converted] 1.png";
import Converted1 from "../../media/41348 [Converted] 1.png";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
function AirDrop() {
  let [t, i18n] = useTranslation();
  return (
    <>
    <div className="airdrop-image">
      <div className="container">
        <div className="row airdrop-image1 d-flex justify-content-center" style={{borderRadius: "20px"}}>
          <div className="col-12 d-flex justify-content-center mt-3 mb-2">
            <img src={comingsoon} className="coming-soon" />
          </div>

          <div className="col-lg-10 col-11 airdrop-every">
            <div className="row d-flex justify-content-center align-items-center pt-3 pb-3">
              <div className="col-lg-8 col-10 text-start ">
                <h3 className="airdrop-h3 ">
                  {t("AirDrop1")}
                </h3>
                <p className="airdop-p">{t("AirDrop6")}</p>
                <div className="row d-flex justify-content-lg-between justify-content-md-start justify-content-center">
                  <div className="col-xl-7">
                    <h4 className="airdrop-h4 mt-2">
                    {t("AirDrop2")}
                    </h4>
                    <h5 className="airdrop-h5 mt-3">{t("AirDrop3")}</h5>
                    <div className="row">
                      <div className="col-md-5 mt-md-4 mt-2">
                        <div className="d-grid gap-2">
                          <button className="btn btn-airdrop-button" size="lg">
                          {t("AirDrop4")}
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 mt-md-4 mt-2">
                        <div className="d-grid gap-2">
                          <button className="btn btn-airdrop-button2" size="lg">
                          {t("AirDrop5")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-11 col-md-11  col-11 airdrop-box text-center mt-md-1 mt-3 ">
                    <img src={parachute} className="airdrop-parachute mt-2" />
                    <p className="airdrop-p1 mt-2">{t("AirDrop7")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center" >
                <img src={Converted} className="airdrop-image3 image-dispaly mt-md-1 mt-4 " />
              </div>
            </div>
          </div>

          <div className="col-md-9 col-11 airdropbox1 mb-4 mt-4">
            <div className="row d-flex justify-content-start flex-md-row flex-column-reverse">
              <div className="col-xl-2 col-md-2 col-11 mt-3 mb-3 ms-md-2 d-flex justify-content-center">
                <img src={Converted1} className="Converted1"/>
              </div>
              <div className="col-md-8 mt-3">
                <h3 className="airdrop-h3 ms-md-4">{t("AirDrop8")}:</h3>
                <div className="" >
                  <ul className="airdrop-ul mt-4" style={{ border: "2px solid transparent " }}>
                    <li className="mt-2">
                      <div id="airdropmini-box">#1000</div>
                      <span className="airdrop-span32">&nbsp;&nbsp;{t("AirDrop9")}</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#2000</div>
                      <span className="airdrop-span32">&nbsp;&nbsp;{t("AirDrop10")}</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#3000</div>
                      <span className="airdrop-span32">&nbsp;&nbsp;{t("AirDrop10")}</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#4000</div>
                      <span className="airdrop-span32">&nbsp;&nbsp;{t("AirDrop11")}</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#5000</div>
                      <span className="airdrop-span32">&nbsp;&nbsp;{t("AirDrop12")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default AirDrop;
