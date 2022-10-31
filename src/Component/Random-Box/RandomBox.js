import React, { useState } from "react";
import "./RandomBox.css";
import comingsoon from "../../media/coming-soon 4.png";
import Group795 from "../../media/Group 795.png";
// import Group795 from "../media/Group 795.png";
import { IoMdClose } from "react-icons/io";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png";
import Group798 from "../../media/Group 798.png";
import Rectangle42 from "../../media/Rectangle 42.png";
import Rectangle43 from "../../media/Rectangle 43-4.png";
import random1 from "../../media/random 1.png";
import Rectangle45 from "../../media/Rectangle 45.png";
import Rectangle46 from "../../media/Rectangle 46.png";
import girls950 from "../../media/950 1.png";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import modalpcs1 from "../../media/01 1.png";
import modalpcs2 from "../../media/02 1.png";
import modalpcs3 from "../../media/03 1.png";
import modalpcs4 from "../../media/04 1.png";
import modalpcs5 from "../../media/05 1.png";
import modalpcs6 from "../../media/06 1.png";
import modalpcs7 from "../../media/07 1.png";
import { useTranslation } from "react-i18next";
import Footer from "../Footer";
function RandomBox() {
  let [t, i18n] = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowOne, setModalShowOne] = useState(false);
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const [modalShowThree, setModalShowThree] = useState(false);
  const [modalShowFour, setModalShowFour] = useState(false);
  const [modalShowFive, setModalShowFive] = useState(false);
  const [modalShowSix, setModalShowSix] = useState(false);
  // const dispatch = useDispatch();
  const connectWallet = async () => {
    // dispatch(connectionAction());
    console.log("connected");
  };
  return (
    <>
      <div className="airdrop-image">
        <div className="container" style={{ marginTop: "-32px" }}>
          <div className="row airdrop-image11 d-flex justify-content-center">
            <div className="col-md-12 col-11">
              <img src={Group796} className="image2" />
              <img src={Group795} className="image1" />
              <img src={Group797} className="image3" />
              <img src={Group798} className="image4" />
              {/* <img src={Rectangle42} className="image55" />
              <img src={Rectangle43} className="image66" /> */}
            </div>
            <div className="col-md-12 col-11 d-flex justify-content-end mt-4 me-md-3">
              <button className="btn btn-random-buttun">{t("Connect")}</button>
            </div>
            <div className="col-12 d-flex justify-content-center mb-2 mt-md-0 mt-3">
              <img src={comingsoon} className="coming-soon" />
            </div>
            <div className="col-12 d-flex justify-content-center mb-2">
              <h3 className="randombox-he">{t("random1")}</h3>
            </div>
            <div className="row d-flex justify-content-md-evenly justify-content-center mb-5 mt-3">
              <div className="col-md-7 col-11 randomBox-bx1 ms-md-3 ">
                <div className="row pt-5 pb-md-5 pb-1">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <img src={random1} className="mybox-image img-fluid" />
                  </div>
                </div>
                <div className="row  d-flex align-items-end mt-5">
                  <div className="col-12 p-1 steryboxes mt-4 pb-3 pt-2">
                    <div className="row d-flex justify-content-lg-around justify-content-start">
                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-md-2">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#45AE3C" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">45.0%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random2")}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-md-2">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#AE653C" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">27.9%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random3")}
                          </span>
                        </div>
                      </div>

                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-md-2 mt-3">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#3489D8" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">15.0%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random4")}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-md-2 mt-3">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#903CAE" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">12.0%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random5")}
                          </span>
                        </div>
                      </div>

                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start  mt-xl-0 mt-lg-2 mt-3 mt-md-2">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#CC3E93" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">0.06%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random6")}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-1 col-lg-3 col-md-6 col-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-3 mt-md-2">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#AE8E3C" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">0.003%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random7")}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-1 col-lg-3 col-6 col-md-6 d-flex flex-row justify-content-start mt-xl-0 mt-lg-2 mt-3 mt-md-2 me-xl-3 me-lg-3">
                        <div>
                          <RiCheckboxBlankCircleFill
                            size={12}
                            style={{ color: "#AE8E3C" }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="stery-span ps-2 mt-2">0.01%</span>
                          <span className="stery-span1 ps-2 mt-3">
                            {t("random8")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-11 randomBox-box11  mt-md-1 mt-4 me-md-3">
                <div className="row">
                  <div className="col-md-12 d-flex flex-row justify-content-between randomBox-miniBox pt-3 pb-3">
                    <span className="random-Box-span">{t("random9")}:</span>
                    <span className="random-Box-span">500 BCB</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex flex-row justify-content-between randomBox-miniBox1 pt-3 pb-3">
                    <div className="col-6">
                      <p className="random-pp">{t("random10")}</p>
                    </div>
                    <div className="col-6">
                      <div className="col-md-12 d-flex flex-row justify-content-between ">
                        <span className="random-Box-span1">
                          {t("random9")}:
                        </span>
                        <span className="random-Box-span1">0.00</span>
                      </div>
                      <div className="col-md-12 d-flex flex-row justify-content-between mt-2">
                        <span className="random-Box-span1">
                          {t("random11")}:
                        </span>
                        <span className="random-Box-span1">0.00</span>
                      </div>
                      <div className="col-md-12 d-flex flex-row justify-content-between mt-2">
                        <span className="random-Box-span1">
                          {t("random12")}:
                        </span>
                        <span className="random-Box-span1">0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 d-flex flex-row justify-content-center flex-column">
                  <p className="random-pp1">{t("random13")}</p>
                  <div className="d-flex flex-row justify-content-center mt-4">
                    <div className="random-box21 d-flex justify-content-center align-items-center me-4">
                      <HiOutlineMinusSm style={{ color: "white" }} />
                    </div>
                    <div className="random-box22 d-flex justify-content-center align-items-center">
                      1
                    </div>
                    <div className="random-box21 d-flex justify-content-center align-items-center ms-4">
                      <AiOutlinePlus style={{ color: "white" }} />
                    </div>
                  </div>
                  <span className="random-span-box mt-2">{t("random14")}</span>
                </div>
                <div className="d-flex justify-content-center pt-4">
                  <div className="col-12 randomBox-boes1 d-flex flex-row justify-content-between ps-2 pe-2 pt-3 pb-3">
                    <span className="randomBox-span11">{t("random15")}:</span>
                    <span className="randomBox-span11">0 BCB</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center pt-4 pb-4">
                  <div className="col-md-7 col-11">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-raandom-button"
                        size="lg"
                        onClick={() => setModalShowSix(true)}
                      >
                        {t("random16")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {modalShow ? (
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShow(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random18")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs1} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                    <span
                      className="random-box-modal-span text-center"
                      style={{ marginBottom: "50px" }}
                    >
                      *{t("random20")}
                    </span>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowOne ? (
              <Modal
                show={modalShowOne}
                onHide={() => setModalShowOne(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowOne(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random21")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs2} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowTwo ? (
              <Modal
                show={modalShowTwo}
                onHide={() => setModalShowTwo(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowTwo(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random22")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs3} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowThree ? (
              <Modal
                show={modalShowThree}
                onHide={() => setModalShowThree(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowThree(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random23")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs4} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowFour ? (
              <Modal
                show={modalShowFour}
                onHide={() => setModalShowFour(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowFour(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random24")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs5} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowFive ? (
              <Modal
                show={modalShowFive}
                onHide={() => setModalShowFive(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowFive(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random25")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs6} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}

            {modalShowSix ? (
              <Modal
                show={modalShowSix}
                onHide={() => setModalShowSix(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <Modal.Body
                  className="modal-img"
                  style={{
                    background: "rgb(12,30,37)",
                    border: "5px solid #2EC2E1",
                    borderRadius: "5px",
                    position: "relative",
                    // Width: "900px"
                  }}
                >
                  <img src={Group795} className="image1" />
                  <img src={Group796} className="image2" />
                  <img src={Group797} className="image3" />
                  <img src={Group798} className="image4" />
                  <img src={Rectangle42} className="image5" />
                  <img src={Rectangle43} className="image6" />
                  <div
                    className="row staking d-flex justify-content-center flex-wrap flex-row"
                    id="presale"
                  >
                    <div className="row d-flex justify-content-center">
                      <div className="col-11 d-flex justify-content-end">
                        <IoMdClose
                          onClick={() => setModalShowSix(false)}
                          size={28}
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                        <img src={Rectangle45} className="mintImage1" />
                        <img src={Rectangle46} className="mintImage2" />
                        <span className="mintImage3">{t("random17")}!</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center mt-4 ">
                      <span className="dutch-span1">{t("random25")} !</span>
                      <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                        <img src={modalpcs7} className="dutch-img23" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-4">
                      <div className="col-md-5 col-11">
                        <div className="d-grid gap-2">
                          <button className="btn btn-dutch" size="lg">
                            {t("random19")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RandomBox;
