import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Component/Footer";
import Logo from "../media/logo.png";
import MainLogo from "../media/main-logo.png";
import OpenSea from "../media/opensea.png";
import BerryAuction from "../media/berryauction.png";
import ManBlack1 from "../media/black-men.png";
import ManBlack2 from "../media/man-black-2.png";
import Girl from "../media/black-girl.png";
import ZE from "../media/gallery-ze.png";
import G1 from "../media/g-white.png";
import G2 from "../media/black.png";
import G3 from "../media/k-blue.png";
import G4 from "../media/k-white.png";
import Gblack from "../media/girl-in-black.jpg";
import Gred from "../media/girl-in-red.png";
import Ggrey from "../media/girl-in-grey.png";
import ComingSoon from "../media/coming-soon.png";
import RoadmapGirl from "../media/roadmap-girl.png";
import RoadmapMen from "../media/roadmap-men.png";
import RootOne from "../media/root-one.png";
import MetaCube from "../media/meta-cube.png";
import BerryAuction2 from "../media/berry-auction.png";
import BitBerry from "../media/bit-berry.png";
import BitBerrySwap from "../media/bit-berry-swap.png";
import SodaPlay from "../media/soda-play.png";
import ToTheMoon from "../media/to-the-moon.png";
import { useTranslation } from "react-i18next";
import download1 from "../media/download 1.png";
import OpenSea1 from "../media/OpenSea-button.png";
import BerryAuction1 from "../media/BerryAuction-button.png";
import BCB from "../media/BCB-button.png";


import { useState } from "react";
const Home = () => {
  let [t, i18n] = useTranslation();
  const [iscolorChange, setIsColorChange] = useState(false);
  const [iscolorChangeOne, setIsColorChangeOne] = useState(false)
  const [iscolorChangeTwo, setIsColorChangeTwo] = useState(false)
  const [iscolorChangeThree, setIsColorChangeThree] = useState(false)
  const [iscolorChangeFour, setIsColorChangeFour] = useState(false)
  const [iscolorChangeFive, setIsColorChangeFive] = useState(false)
  const [iscolorChangeSix, setIsColorChangeSix] = useState(false)
  const [iscolorChangeSeven, setIsColorChangeSeven] = useState(false)
  const [iscolorChangeEhight, setIsColorChangeEhight] = useState(false)
  const [iscolorChangeNine, setIsColorChangeNine] = useState(false)
  const [iscolorChangeTen, setIsColorChangeTen] = useState(false)
  // const [iscolorChangeThree, setIsColorChangeThree] = useState(false)
  const colorChange = (id) => {
    setIsColorChange(true);
    // console.log("text", iscolorChange);
    console.log("id", id);
    document.getElementById(id).style.color = iscolorChange ? "white " : "green"
  };
  const options1 = {
    autoplay: false,
    // autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 5,
    loop: true,
    responsive: {
      0: {
        autoplay: true,
        items: 2,
        dots: true,
      },
      769: {
        autoplay: true,
        items: 3,
        dots: true,
      },
      1200: {
        autoplay: true,
        items: 4,
        dots: true,
      },
      1300: {
        items: 5,
        dots: false,
      },
    },
  };

  const options2 = {
    autoplay: false,
    // autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 5,
    loop: true,
    responsive: {
      0: {
        autoplay: true,
        items: 2,
        dots: true,
      },
      769: {
        autoplay: true,
        items: 3,
        dots: true,
      },
      1200: {
        autoplay: true,
        items: 5,
        dots: true,
      },
      1300: {
        items: 6,
        dots: false,
      },
    },
  };

  let FaqArry = [
    {
      q:t("faq1"),
      a:t("faqA1")
    },
    {
      q:t("faq2"),
      a:t("faqA2")
    },
    {
      q:t("faq3"),
      a:t("faqA3")
    },
    {
      q:t("faq4"),
      a:t("faqA4")
    },
    {
      q:t("faq4"),
      a:t("faqA4")
    },
    {
      q:t("faq5"),
      a:t("faqA5")
    },
    {
      q:t("faq6"),
      a:t("faqA6")
    },
    {
      q:t("faq7"),
      a:t("faqA7")
    },
    {
      q:t("faq8"),
      a:t("faqA8")
    },
    {
      q:t("faq9"),
      a:t("faqA9")
    },
    {
      q:t("faq10"),
      a:t("faqA10")
    },
    {
      q:t("faq11"),
      a:t("faqA11")
    }
     
  ]

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <img
              src={MainLogo}
              alt=""
              data-aos="fade-up"
              data-aos-delay="100"
              className="head"
            />
            <div
              className="pt-5 d-inline text-center"
            >
              <a className="btn-cta" href="https://berryauction.bitberryswap.org/" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay="400">
                <img src={BerryAuction1} alt="" />
              </a>
              <a className="btn-cta" href="#link" data-aos="fade-up" data-aos-delay="500" >
                <img src={OpenSea1} alt="" />
              </a>
              <a className="btn-cta" target="_blank" href="https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0x7b876dd9d82cf2fb251de13f3758ae444f2aa878" data-aos="fade-up" data-aos-delay="600" >
                <img src={BCB} alt="" />
              </a>
            </div>
            {/* <div
              className="pt-4 d-inline justify-content-center text-center mt-4 home-dispaly-nn"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a className="btn btn-cta p-3 m-md-3 m-1" href="#link">
                <img src={OpenSea} alt="" width="20px" /> Buy on OpenSea
              </a>
              <a className="btn btn-cta p-3 m-md-3 m-1" href="#link">
                <img src={BerryAuction} alt="" width="20px" /> Buy on
                BerryAuction
              </a>
              <a className="btn btn-cta p-3 m-md-3 m-1" href="#link">
                <img src={download1} alt="" width="20px" /> Buy $BCB Token
              </a>
            </div> */}

            {/* <div
              className="row pt-4 d-flex justify-content-center text-center mt-4 home-dispay"
              data-aos="fade-up"
              data-aos-delay="400"
              
            >
              <div className="col-12">
                <div className="d-grid gap-2">
                  <a className="btn btn-cta1 p-3 m-md-3 m-1" href="#link">
                    <img src={OpenSea} alt="" width="40px" /> Buy on OpenSea
                  </a>
                </div>
              </div>
              <div className="col-12">
              <div className="d-grid gap-2">
              <a className="btn btn-cta1 p-3 m-md-3 m-1" href="#link">
                <img src={BerryAuction} alt="" width="40px" /> Buy on
                BerryAuction
              </a>
                </div>
              </div>
              <div className="col-12">
              <div className="d-grid gap-2">
              <a className="btn btn-cta1 p-3 m-md-3 m-1" href="#link">
                <img src={download1} alt="" width="40px" /> Buy $BCB Token
              </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section id="gallery">
        <div className="container">
          <div
            className="section-title text-white text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>GALLERY</h2>
          </div>
          <div
            className="galler-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <OwlCarousel className="owl-theme" {...options1}>
              <div className="img">
                <img src={G1} alt="" />
              </div>
              <div className="img">
                <img src={G2} alt="" />
              </div>
              <div className="img text-white text-center">
                <img src={ZE} alt="" />
                <h3 className="pt-3">NO:ZE</h3>
              </div>
              <div className="img">
                <img src={G3} alt="" />
              </div>
              <div className="img">
                <img src={G4} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      {/* <section id="about">
        <div className="container">
          <div className="row pt-5 about-display-none">
            <div
              className="col-sm-4 left text-center d-flex justify-content-center align-items-center" 
              data-aos="fade-up"
              data-aos-delay="100"
              
            >
              <img src={ManBlack1} alt="" className="manblack-width"/>
              <img src={ManBlack2} alt="" className="manblack-width1"/>
            </div>
            <div className="col-sm-4 center text-center text-white">
              <img
                src={Logo}
                className="about-image img-fluid pt-5 pb-4"
                alt=""
                
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <p data-aos="fade-up" data-aos-delay="500">
                {t("homePara1")}
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                {t("homePara2")}
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                {t("homePara3")}
              </p>
              <a
                href="#link"
                className="btn btn-join my-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Join Us Now
              </a>
            </div>
            <div
              className="col-sm-4 right text-center d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={Girl} alt="" />
            </div>
          </div>

          <div className="row pt-5 about-dispaly">
            <img
              src={Logo}
              className="img img-fluid pt-5 pb-4"
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <div className="d-flex">
              <div
                className="col-6 left text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={ManBlack1} alt="" width="50px" />
                <img src={ManBlack2} alt="" width="90px" />
              </div>
              <div
                className="col-6 right text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={Girl} alt="" width="150px" />
              </div>
            </div>
            <div className="col-md-4 center text-center text-white">
              <p data-aos="fade-up" data-aos-delay="500">
                {t("homePara1")}
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                {t("homePara2")}
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                {t("homePara3")}
              </p>
              <a
                href="#link"
                className="btn btn-join my-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Join Us Now
              </a>
            </div>
            
          </div>

          
        </div>
        <div className="pt-2 pb-2 mt-4" style={{backgroundColor: "#179AE4"}}>
            <OwlCarousel
              className="owl-theme"
              {...options2}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="img m-2">
                <img src={Gblack} alt="" className="img-fluid "/>
              </div>
              <div className="img m-2">
                <img src={G1} alt="" className="img-fluid"/>
              </div>
              <div className="img m-2">
                <img src={G3} alt="" className="img-fluid "/>
              </div>
              <div className="img m-2">
                <img src={Gred} alt="" className="img-fluid "/>
              </div>
              <div className="img m-2">
                <img src={G4} alt="" className="img-fluid "/>
              </div>
              <div className="img m-2">
                <img src={G2} alt="" className="img-fluid"/>
              </div>
              <div className="img m-2">
                <img src={Ggrey} alt="" className="img-fluid"/>
              </div>
            </OwlCarousel>
          </div>
      </section> */}


<section id="about">
        <div className="container-fluid">
          <div className="row pt-5">
            <div
              className="col-md-4 left text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={ManBlack1} alt="" />
              {/* <img src={ManBlack2} alt="" /> */}
            </div>
            <div className="col-md-4 center text-center text-white">
              <img src={Logo} className="img img-fluid pt-5 pb-4" alt="" data-aos="fade-up" data-aos-delay="300" />
              <p data-aos="fade-up" data-aos-delay="500">
                {t("homePara1")}
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                {t("homePara2")}
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                {t("homePara3")}
              </p>
              <a
                href="#link"
                className="btn btn-join my-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Join Us Now
              </a>
              {/* <a
                href="https://discord.com/invite/cnNQRkgtWM"
                target="_blank"
                className="btn-join my-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={JoinNow} className="pt-2 w-50" alt="" />
              </a> */}
            </div>
            <div
              className="col-md-4 right text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={Girl} alt="" />
            </div>
          </div>
          <div className="about-carousel row mt-5">
            <OwlCarousel
              className="owl-theme"
              {...options2}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="img">
                <img src={G1} alt="" />
              </div>
              <div className="img">
                <img src={G3} alt="" />
              </div>
              <div className="img">
                <img src={G4} alt="" />
              </div>
              <div className="img">
                <img src={G2} alt="" />
              </div>
              <div className="img">
                <img src={G1} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="section-title text-center text-white">
              <h2>ROADMAP</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center roadmap-dispaly-none">
            <ul className="per_row">
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="300"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <span className="text-white">1%</span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Open Berry Club on the website and Discord on Twitter.
                  </div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="400"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="700"
                  >
                    <span>5%</span>
                  </p>
                </div>
                <div className="box">
                  <div>Berry Club Minting Start & Staking Function Open.</div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="500"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="800"
                  >
                    <span>10%</span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    If each order of minting sells out, a prize will be given by
                    lottery. *Excluding pre-minting
                  </div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="300"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <span>
                      <span>15%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Open Random Box Function. *Limited edition NFT can be
                    obtained.
                  </div>
                </div>
              </li>
              <li
                data-aos="fade"
                data-aos-delay="400"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="700"
                  >
                    <span>
                      <span>20%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>Development of B club game that uses BCASH points.</div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="400"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="800"
                  >
                    <span>
                      <span>30%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Gifticon drop to NFT holders linked to Metacube's soda play.
                  </div>
                </div>
              </li>
              <li
                data-aos="fade"
                data-aos-delay="300"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <span>
                      <span>40%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    An area with a large floating population on major subways.
                    Start advertising the electronic display.
                  </div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="400"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="700"
                  >
                    <span>
                      <span>50%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    AMA for holders and offline events with Berry Auction
                    writers.
                  </div>
                </div>
              </li>
              <li
                data-aos="fade"
                data-aos-delay="500"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="800"
                  >
                    <span>
                      <span>60%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Open a store where only the holders can enter in connection
                    with Metacube's soda play.
                  </div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="300"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <span>
                      <span>70%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Overseas expansion and listing of overseas exchanges for the
                    globalization of the Berry Club.
                  </div>
                </div>
              </li>
              <li
                data-aos="fade"
                data-aos-delay="400"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="700"
                  >
                    <span>
                      <span>80%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>Game launch using Bcash points.</div>
                </div>
              </li>
              <li
                data-aos="fade"
                data-aos-delay="500"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="800"
                  >
                    <span>
                      <span>90%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>Introducing governance function on web pages.</div>
                </div>
              </li>
              <li
                className="on"
                data-aos="fade"
                data-aos-delay="300"
                style={{ border: "4px solid #6889D8" }}
              >
                <div className="minibox d-flex justify-content-center aligh-items-center">
                  <p
                    className="per aos-init"
                    data-aos="flip-left"
                    data-aos-delay="600"
                  >
                    <span>
                      <span>100%</span>
                    </span>
                  </p>
                </div>
                <div className="box">
                  <div>
                    Bclub 2.0 full-scale ver. will be released as metaverse!
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="row py-5 roadmap-dispaly">
            <div className="col-md-4 left text-center ">
              <div className="img img-fluid">
                <img src={RoadmapGirl} alt="" />
              </div>
            </div>
            <div className="col-md-4 center text-center ">
              <div className="coming-soon pt-5 pt-md-0">
                <img src={ComingSoon} alt="" />
              </div>
            </div>
            <div className="col-md-4 right text-center ">
              <div className="img">
                <img src={RoadmapMen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners-projects">
        <div className="container ">
          <div className="row mt-5">
            <div
              className="section-title text-white text-center"
              style={{ paddingTop: "50px" }}
            >
              <h2>PARTNERS</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-12  text-center " >
              <img src={RootOne} alt="" className="img-width" />
              <img src={MetaCube} alt="" className="img-width" />
            </div>
          </div>
          <div className="row mt-sm-5">
            <div className="section-title text-white text-center">
              <h2>PROJECTS</h2>
            </div>
          </div>
          <div className="row pic-dispaly-none">
            <div className="col-12 projects text-center">
              <img src={BerryAuction2} alt="" className="img-width"/>
              <img src={BitBerry} alt="" className="img-width"/>
              <img src={BitBerrySwap} alt="" className="img-width"/>
            </div>
            <div className="col-12 text-center">
              <img src={SodaPlay} alt="" className="img-width"/>
              <img src={ToTheMoon} alt="" className="img-width"/>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center picdecided-dispaly ">
            <div className="col-12  text-center d-flex align-items-center justify-content-center">
              <img src={BerryAuction2} alt="" className="img-width" />
              <img src={BitBerry} alt="" className="img-width" />
            </div>

            <div className="col-12  text-center d-flex align-items-center justify-content-center">
              <img src={BitBerrySwap} alt="" className="img-width" />
              <img src={SodaPlay} alt="" className="img-width" />
            </div>
            <div className="col-12  text-center ">
              <img src={ToTheMoon} alt="" className="img-width" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="row">
            {" "}
            <div className="section-title text-white text-center ">
              {" "}
              <h2>FAQs</h2>
            </div>
          </div>
          <div className="row pt-4">
            <div className="accordion accordion-flush text-light" id="faqs">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingOne">
                  <button
                    onClick={() => {
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(!iscolorChangeTen)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChange(false)
                      setIsColorChangeOne(false)
                    }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeTen ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq1")}
                  </button>
                </span>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqs"
                  
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA1")}</p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    onClick={()=> {
                      setIsColorChange(!iscolorChange)
                      // setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      // setIsColorChangeEhight(false)
                      // setIsColorChangeSeven(false)
                      // setIsColorChangeSix(false)
                      // setIsColorChangeFive(false)
                      // setIsColorChangeFour(false)
                      // setIsColorChangeThree(false);
                      // setIsColorChangeTwo(false)
                      // setIsColorChangeOne(false)

                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChange ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq2")}
                  </button>
                </span>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA2")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingThree">
                  <button
                  onClick={()=>{
                    setIsColorChangeOne(!iscolorChangeOne)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeOne ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3> {t("faq3")}
                  </button>
                </span>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA3")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingFour">
                  <button
                  onClick={()=>{setIsColorChangeTwo(!iscolorChangeTwo)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeTwo ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq4")}
                  </button>
                </span>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA4")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingFive">
                  <button
                  onClick={() => {
                    setIsColorChangeThree(!iscolorChangeThree);
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                     
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeThree ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq5")}
                  </button>
                </span>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA5")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingSix">
                  <button
                  onClick={() => {
                    setIsColorChangeFour(!iscolorChangeFour)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeFour ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq6")}
                  </button>
                </span>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA6")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingSeven">
                  <button
                  onClick={() => {
                    setIsColorChangeFive(!iscolorChangeFive)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeFive ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq7")}
                  </button>
                </span>
                <div
                  id="flush-collapseSeven"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA7")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingEight">
                  <button
                  onClick={() => {
                    setIsColorChangeSix(!iscolorChangeSix)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeSix ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq8")}
                  </button>
                </span>
                <div
                  id="flush-collapseEight"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA8")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingNine">
                  <button
                   onClick={() => {
                    setIsColorChangeSeven(!iscolorChangeSeven)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseNine"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeSeven ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq9")}
                  </button>
                </span>
                <div
                  id="flush-collapseNine"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingNine"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA9")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingTen">
                  <button
                  onClick={() => {
                    setIsColorChangeEhight(!iscolorChangeEhight)
                    setIsColorChange(false)
                      setIsColorChangeNine(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTen"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeEhight ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq10")}
                  </button>
                </span>
                <div
                  id="flush-collapseTen"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingTen"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA10")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingEleven">
                  <button
                  onClick={() => {
                    setIsColorChangeNine(!iscolorChangeNine)
                    setIsColorChange(false)
                      setIsColorChangeTen(false)
                      setIsColorChangeEhight(false)
                      setIsColorChangeSeven(false)
                      setIsColorChangeSix(false)
                      setIsColorChangeFive(false)
                      setIsColorChangeFour(false)
                      setIsColorChangeThree(false);
                      setIsColorChangeTwo(false)
                      setIsColorChangeOne(false)
                  }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEleven"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color: iscolorChangeNine ? "#2EBA85" : "white"}}
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq11")}
                  </button>
                </span>
                <div
                  id="flush-collapseEleven"
                  className="accordion-collapse collapse mt-3"
                  aria-labelledby="flush-headingEleven"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p className="text-white">{t("faqA11")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
