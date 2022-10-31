import "./Gallery.css";
import { useState, useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoMdClose } from "react-icons/io";
import containerImage from "../media/Group 48.png";
import { stakingAbi, stakingAddress } from "../Component/Utils/Staking";
import Footer from "../Component/Footer";
import Data from "./metadata.json";
import { toast } from "react-toastify";
import Group19 from "../media/Group 19.png";
import Group20 from "../media/Group 20.png";
import ZE from "../media/gallery-ze.png";
import G1 from "../media/A 1.png";
import G2 from "../media/B 1.png";
import G3 from "../media/c 1.png";
import G4 from "../media/d 1.png";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";
import { loadWeb3 } from "../Component/Api/api";
import Modal from "react-bootstrap/Modal";
import Caver from "caver-js";
const caver = new Caver(window.klaytn);
// const webSupply = new Caver("https://public-node-api.klaytnapi.com/v1/cypress");
const webSupply = new Caver("https://api.baobab.klaytn.net:8651");
const Gallery = () => {
  let dummayArr = [];
  let dummayArrfil = [];
  /// here starting
  // const [showAddress, setShowAddress] = useState(true);
  const [modalImage, setModalImage] = useState([]);
  let transferAddress = useRef();
  const [myEdition, setMyEdition] = useState();
  const [initialLimit, setInitialLimit] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const [finalLimit, setFinalLimit] = useState(16);
  const [myNftArrayLength, setMyNftArraylength] = useState(0);
  const [toatalPages, settotalPages] = useState(1);
  //// here ending
  const [items, setItems] = useState(Data);
  const [buttonTxt, setButtonText] = useState("Connect Wallet");
  const [account, setAccount] = useState();

  const [filterItems, setFilterItems] = useState(Data);
  const [arrSliceLimit, setarrSliceLimit] = useState(12);
  let limit = 12;
  const [myNftArray, setmyNftArray] = useState([]);
  const [preFixing, setPrefixing] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const searchItembyEdition = useRef();
  const [toggle, settoggle] = useState(true);
  const [imageArrayLength, setImageArrayLength] = useState(Data.length);
  const [sumLimitfil, setsumLimitfil] = useState(12);
  const [sumInitLimitfil, setsumInitLimitfil] = useState(0);

  const [imagePages, setImagepages] = useState(0);
  const [pageInit, setPageInit] = useState(0);
  const [pageLimit, setPageLimit] = useState(12);
  const [activePage, setActivePage] = useState(1);
  let sumLimit = 12;
  let sumInitLimit = 0;

  const getWalletAddress = async () => {
    try {
      let acc = await loadWeb3();
      console.log("Account=", acc);
      setButtonText(acc);
      setAccount(acc);
    } catch (e) {
      console.log("Error while getting user Address");
    }
  };

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 4,
  //   speed: 500
  // };
  const gallery1 = {
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 3000,
    items: 4,
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
  const gettingMyfilteredImages = () => {
    console.log("Image rrasdfasd23", dummayArrfil);
    let myFilteredLocalData = JSON.parse(
      window.localStorage.getItem("myLocalData")
    );
    console.log("myFilt rrasdfasd234", myFilteredLocalData);
    setShowLoading(true);
    setImageArrayLength(myFilteredLocalData.length);
    console.log("sumInitLimitfil", sumInitLimitfil);
    console.log("sumInitLimitfil1", sumLimitfil);

    for (let i = sumInitLimitfil; i < sumLimitfil; i++) {
      // console.log(`myFilteredLocalData${i}`, myFilteredLocalData[i]);
      dummayArrfil = [...dummayArrfil, myFilteredLocalData[i]];
    }
    setsumInitLimitfil(sumInitLimitfil + 12);
    setsumLimitfil(sumLimitfil + 12);
    console.log("DummyArray from Filterd Data", dummayArrfil);
    setImageArray(dummayArrfil);
    setShowLoading(false);
    setPrefixing(false);
  };
  const getImages = () => {
    // dummayArrfil = [];
    let itemLengthForPage = items.length;
    let totalPageCalculated = parseInt(itemLengthForPage) / 12;
    totalPageCalculated = Math.ceil(totalPageCalculated);
    setImagepages(totalPageCalculated);

    setImageArray([]);
    let myFilteredLocalData = JSON.parse(
      window.localStorage.getItem("myLocalData")
    );
    console.log("myFilteredLocalData", myFilteredLocalData);

    if (myFilteredLocalData) {
      gettingMyfilteredImages();
    } else {
      console.log("Will Load All Data");
      setImageArrayLength(Data.length);

      // console.log("items", items);
      for (let i = sumInitLimit; i < sumLimit; i++) {
        let myData = items[i];
        dummayArr = [...dummayArr, myData];
      }
      sumInitLimit = sumInitLimit + 12;
      sumLimit = sumLimit + 12;
      // console.log("DummyArray from all data", dummayArr);
      setImageArray(dummayArr);
      setShowLoading(false);
      setPrefixing(false);

      // setImageArrayLength(imageArray.length);
    }
  };
  const handleFilter = (param) => {
    const updatedItems = items.filter((x) => {
      let n = x.attributes.filter((a) => a.trait_type === param);
      return n.length > 0;
    });
    setFilterItems(updatedItems);
  };

  // const handleFilter = (param) => {
  //   console.log("Image rrasdfasd1", imageArray);
  //   dummayArrfil.length = 0;
  //   console.log("Image rrasdfasd2", dummayArrfil);

  //   window.localStorage.clear();
  //   setPrefixing(true);
  //   console.log("for loop", param);

  //   const updatedItems = Data.filter((curElem) => {
  //     // console.log("curElem", curElem);
  //     for (var i = 0; i < curElem.attributes.length; i++) {
  //       if (curElem.attributes[i].trait_type === param) {
  //         return curElem.attributes[i].trait_type === param;
  //       }
  //     }
  //   });
  //   // console.log("Updated Item Length", updatedItems.length);
  //   if (updatedItems.length >= 1) {
  //     if (updatedItems.length < 9000) {
  //       console.log("sent to Local Storage", dummayArrfil.length);
  //       window.localStorage.setItem(
  //         "myLocalData",
  //         JSON.stringify(updatedItems)
  //       );
  //       setImageArrayLength(updatedItems.length);
  //       // setImageArray(updatedItems);
  //       // console.log("updated items", updatedItems);
  //       getImages();
  //     } else {
  //       console.log(" Local Storage set to Null");

  //       window.localStorage.setItem("myLocalData", JSON.stringify(null));
  //       setImageArrayLength(updatedItems.length);
  //       getImages();
  //     }
  //   } else {
  //     // console.log("No Data found Agains this trait type");
  //     console.log("hahhaha bro no images try again");

  //     setImageArrayLength(0);
  //   }
  // };
  const reloadAll = (param) => {
    getImages();
  };

  const increaseLimit = () => {
    let l = 12;
    console.log("limit after scroll", l + 12);
    let length = filterItems.length;
    if (arrSliceLimit < length) {
      setarrSliceLimit((arrSliceLimit) => arrSliceLimit + 12);
    }
  };
  //Search Feature needs to be fixed....

  const handleScroll = (e) => {
    console.log("Scrolling");
    // setShowLoading(true);
    let winTop = e.target.documentElement.scrollTop;
    let winHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    let sumHeight = parseInt(winTop) + parseInt(winHeight) + 60;
    // console.log("sumHeight", limit, sumHeight, scrollHeight);

    if (sumHeight + 1 >= scrollHeight) {
      increaseLimit();
      console.log("calling function on scrolling");
    }
  };

  const getMyNfts = async () => {
    try {
      console.log("account in getMyNFTS", account);
      if (account == "Connect Wallet") {
        setButtonText("Connect Wallet");
      } else if (account == "No Wallet") {
        setButtonText("Connect Wallet");
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        setButtonText("Wrong Network");
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        setButtonText(account);
        console.log("Not Connected");
      } else {
        let dummy = [];
        // const web3 = window.web3;
        // const contractOf = new web3.eth.Contract(
        //   berryClubContractAbi,
        //   berryClubCntractAddress
        // );
        let contractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let StakingcontractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let stakingTotalIds = await StakingcontractOf.methods
          .getTotalIds(account)
          .call();

        let totaNftIds = await contractOf.methods.walletOfOwner(account).call();
        console.log("onwner list", totaNftIds);
        let totalMapLenght =
          parseInt(stakingTotalIds.length) + parseInt(totaNftIds.length);
        setMyNftArraylength(totalMapLenght);
        let ttlPage = parseInt(totalMapLenght) / 16;
        ttlPage = Math.ceil(ttlPage);
        console.log("ttlPage", totaNftIds.length);
        settotalPages(ttlPage);
        for (let i = 0; i < totaNftIds.length; i++) {
          console.log("totaNftIdds", totaNftIds[i]);
          let d = items.filter((e) => e.edition == totaNftIds[i]);
          dummy = [...dummy, d];
          console.log("filtered =", d);
        }
        for (let i = 0; i < stakingTotalIds.length; i++) {
          console.log("totaNftIdds", stakingTotalIds[i]);
          let d = items.filter((e) => e.edition == stakingTotalIds[i]);
          dummy = [...dummy, d];
          console.log("filtered =", d);
        }

        setmyNftArray(dummy);
      }
    } catch (e) {
      console.log("error while getting nfts", e);
    }
  };
  const transferNft = async () => {
    let userEnteredAdd = transferAddress.current.value;
    let e = myEdition;
    try {
      if (parseInt(userEnteredAdd.length) > 0) {
        let d = items.filter((e) => e.edition == myEdition);
        let web3 = window.web3;
        let contractOf = new web3.eth.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        await contractOf.methods
          .safeTransferFrom(account, userEnteredAdd, myEdition)
          .send({
            from: account,
          });
        toast.success("Transaction Successful!");
        setModalShow(false);
        console.log("userEnteredAdd", d);
        console.log("userEnteredAdd", e);
      } else {
        toast.info("Address field cannot be empty");
      }
    } catch (e) {
      toast.error("Transaction Failed");
      console.log("Error while Transfer Nft", e);
    }
  };

  const loadMoreImages = () => {
    console.log("activePage", activePage);
    console.log("imagePages", imagePages);

    if (activePage < imagePages) {
      console.log("updating things");

      setPageInit(pageInit + 12);
      setPageLimit(pageLimit + 12);
      setActivePage(activePage + 1);
    }
  };
  const loadLessImages = () => {
    if (activePage > 1) {
      console.log("updating things");

      setPageInit(pageInit - 12);
      setPageLimit(pageLimit - 12);
      setActivePage(activePage - 1);
    }
  };

  useEffect(() => {
    setInterval(() => {}, 1500);
    getImages();
  }, []);

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
  }, []);
  const handleSearch = () => {
    let value = searchItembyEdition.current.value;
    let d = items.filter((e) => e.edition == value);
    setFilterItems(d);
  };
  const handleModal = (id) => {
    let d = items.filter((e) => e.edition == id);
    setModalImage(d);
    setMyEdition(id);
    setModalShow(true);
    console.log("Id in handle", id);
  };

  useEffect(() => {
    getMyNfts();
  }, [account]);

  return (
    <>
      <section id="gallery">
        {modalShow ? (
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body
              className="modal-img"
              style={{
                background: "rgb(12,30,37)",
                border: "3px dashed #2ADEEA",
              }}
            >
              <div className="staking " id="presale">
                <div className="imgArea  d-flex justify-content-center">
                  <img className="stakingTop-image" src={containerImage}></img>
                  <span className="imgArea-text">Tranfer Nft</span>
                </div>
                <div className=" d-flex justify-content-end mb-4">
                  <div className="col-12 d-flex justify-content-end">
                    <IoMdClose
                      onClick={() => setModalShow(false)}
                      size={28}
                      style={{ color: "white", cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center flex-wrap flex-row mt-2 ">
                  {modalImage.map((post) => {
                    console.log("post in modal = ", post.image);
                    return (
                      <>
                        <img
                          src={post.image}
                          className=" m-1 mintImage"
                          alt="..."
                        />
                      </>
                    );
                  })}
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-5 d-flex justify-content-center align-items-center mt-4">
                    <label style={{ color: "white" }}>To</label>&nbsp;&nbsp;
                    <input
                      ref={transferAddress}
                      className="form-control"
                      style={{ backgroundColor: "black", color: "#fff" }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center  mt-2 mb-2">
                  <button
                    onClick={() => transferNft()}
                    className="btn  btnStakePage"
                    size="sm"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        ) : (
          <></>
        )}
        <div className="container">
          <div className="section-title text-center text-white">
            <h2>GALLERY</h2>
          </div>
          <div className="galler-section">
            {/* <Slider {...settings}>
          <div className="img" style={{border: "2px solid red"}}>
          <img src={ZE} alt=""  width="280px"/>
                <h4 className="pt-3 text-white text-center">Berry Girl</h4>
          </div>
          <div className="img">
          <img src={G1} alt="" />
          </div>
          <div className="img">
          <img src={G2} alt="" />
          </div>
          
          <div className="img">
          <img src={G3} alt="" />
          </div>
          <div className="img">
          <img src={G4} alt="" />
          </div>
         
        </Slider> */}
            <OwlCarousel className="owl-theme" {...gallery1}>
              <div className="img m-3">
                <img src={G1} alt="" />
              </div>
              <div className="img m-2">
                <img src={G2} alt="" />
              </div>
              <div className="img text-center ">
                <img src={ZE} alt="" />
                <h3 className="pt-3 text-white">Berry Girl</h3>
              </div>
              <div className="img m-2">
                <img src={G3} alt="" />
              </div>
              <div className="img m-3">
                <img src={G4} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section id="tabs">
        <div className="m-4">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a href="#all" className="nav-link active" data-bs-toggle="tab">
                ALL
              </a>
            </li>
            <li className="nav-item">
              <a href="#my-nft" className="nav-link" data-bs-toggle="tab">
                MY NFT
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <section id="MainGallery">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 filter">
                      <div className="filter-box">
                        <div className="top-bar d-flex justify-content-between">
                          <div className="filter-title text-white">
                            <h4>Filter</h4>
                          </div>
                          <div className="reload">
                            <button onClick={() => reloadAll()}>
                              <i className="fa-solid fa-rotate-right"></i>
                            </button>
                          </div>
                        </div>
                        <hr className="main-hr" />
                        <div className="all-filters ">
                          <ul>
                            <li>
                              <button
                                onClick={() => handleFilter("Background")}
                              >
                                Background
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Clothing")}>
                                Clothing
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Earrings")}>
                                Earrings
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Eye color")}>
                                Eye color
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Glasses")}>
                                Glasses
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Hand")}>
                                Hand
                              </button>
                            </li>
                            <hr />
                            {/* <li>
                              <button onClick={() => handleFilter("Hat")}>
                                Hatmap
                              </button>
                            </li>
                            <hr /> */}
                            <li>
                              <button onClick={() => handleFilter("Lips")}>
                                Lips
                              </button>
                            </li>
                            <hr />
                            {/* <li>
                              <button onClick={() => handleFilter("Mask")}>
                                Mask
                              </button>
                            </li>
                            <hr /> */}
                            <li>
                              <button
                                onClick={() => handleFilter("Neck jewelry")}
                              >
                                Neck jewelry
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Skin")}>
                                Skin
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Wings")}>
                                Wings
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 main-gallery">
                      <div className="row head d-flex justify-content-between text-white">
                        <div className="col-sm-7 total">
                          {filterItems.length} items
                        </div>
                        <div className="col-sm-4 ">
                          <div class="pseudo-search search-box">
                            <input
                              type="number"
                              placeholder="Number"
                              autofocus
                              required
                              ref={searchItembyEdition}
                            />

                            <button
                              class="fa fa-search"
                              type="submit"
                              onClick={handleSearch}
                            ></button>
                          </div>
                          {/* <span >
                            <input
                              type="number"
                              ref={searchItembyEdition}
                              placeholder="Number"
                              name="Number"
                              id=""
                            />
                          </span>
                          <span>
                            <button
                              onClick={handleSearch}
                              className="ms-sm-4 mySearchButton"
                            >
                              Search
                            </button>
                          </span> */}
                        </div>
                      </div>

                      <div>
                        {preFixing ? (
                          <p className="mt-5 ms-5">No Image Against this Id</p>
                        ) : (
                          // <Loading className="ms-5" />

                          <div className="row gallery-items d-flex text-center pt-5">
                            {filterItems
                              .slice(pageInit, pageLimit)
                              .map((post, i) => {
                                return (
                                  <div
                                    className="col-6 col-sm-4 col-md-4 image-box"
                                    key={post.dna}
                                  >
                                    <img
                                      src={post.image}
                                      className="lazyload img img-fluid"
                                      alt="NO:ZE"
                                      loading="lazy"
                                    />

                                    <h5
                                      className="image-name py-2 text-white"
                                      style={{ fontSize: "20px !important" }}
                                    >
                                      {post.name}
                                    </h5>
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </div>

                      <div className=" d-flex justify-content-center" >
                        <div className="col-md-5  col-10" >
                          <div className="pagination" >
                            <button
                              className="btn"
                              onClick={() => loadLessImages()}
                              
                            >
                              <img src={Group19} />
                            </button>
                            <div className="pages" >
                              <a className="page active" >{activePage}</a>
                              <a className="page" >{activePage + 1}</a>
                              <a className="page ">{activePage + 2}</a>
                              <a className="page">...</a>
                              <a className="page">{imagePages}</a>
                            </div>
                            <button
                              onClick={() => loadMoreImages()}
                              className="btn"
                            >
                              <img src={Group20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="tab-pane fade" id="my-nft">
              <section id="myNFT">
                <div className="container">
                  <div className="row">
                    <div className="col-12   text-center py-5">
                      <div className="row gallery-items d-flex text-center pt-5">
                        {myNftArray.map((post) => {
                          console.log("post image myNft ", myNftArray);
                          console.log("post imaes,", post[0].name);
                          return (
                            <div
                              className="col-6 col-sm-3 col-md-3 myNftImageBox image-box"
                              key={post[0].dna}
                            >
                              <img
                                src={post[0].image}
                                className="lazyload img img-fluid"
                                alt="NO:ZE"
                                loading="lazy"
                                width={"400px"}
                              />
                              <h5 className="image-name py-2 text-white">
                                {post[0].name}
                              </h5>
                              <div className="d-flex justify-content-center  mt-2 mb-2">
                                <button
                                  onClick={(id) => handleModal(post[0].edition)}
                                  className="btn  btnStakePage"
                                  size="sm"
                                >
                                  Transfer
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        onClick={() => getWalletAddress()}
                        className="connect-wallet mt-4"
                      >
                        {buttonTxt && buttonTxt === "No Wallet"
                          ? "Connect Wallet"
                          : buttonTxt === "Connect Wallet"
                          ? "Connect Wallet"
                          : buttonTxt === "Wrong Network"
                          ? buttonTxt
                          : buttonTxt &&
                            buttonTxt.substring(0, 4) +
                              "..." +
                              buttonTxt.substring(buttonTxt.length - 4)}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Gallery;
