import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import containerImage from "../media/Group 48.png";
import "./PublicSale.css";
import Footer from "../Component/Footer";
import PublicSaleImg from "../media/public-sale.png";
import DUTCHMINTINGSALES from "../media/DUTCH MINTING SALES.png";
import Girl from "../media/girl.png";
import 소개페이지이미지 from "../media/소개페이지 이미지 3.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Data from "./metadata.json";
import Group795 from "../media/Group 795.png";
import Group796 from "../media/Group 796.png";
import Modal from "react-bootstrap/Modal";
import Group797 from "../media/Group 797.png";
import Group798 from "../media/Group 798.png";
import Rectangle42 from "../media/Rectangle 42.png";
import Rectangle43 from "../media/Rectangle 43-4.png";
import Rectangle45 from "../media/Rectangle 45.png";
import Rectangle46 from "../media/Rectangle 46.png";
import girls950 from "../media/950 1.png";

import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";
import { tokenAbi, tokenAddress } from "../Component/Utils/token";
import { loadWeb3 } from "../Component/Api/api";
import { connectionAction } from "../Redux/connection/actions";
import { useSelector, useDispatch } from "react-redux";
import Caver from "caver-js";
const caver = new Caver(window.klaytn);
// const webSupply = new Caver("https://public-node-api.klaytnapi.com/v1/cypress");
const webSupply = new Caver("https://api.baobab.klaytn.net:8651");

const PublicMint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  let [items, setItems] = useState(Data);
  let account = useSelector((state) => state.connect?.connection);
  // const [account, setAccount] = useState("Connect Wallet");
  const [publicNftLength, setPublicMintLengthNFt] = useState();
  let resPublicLast;
  const [publicSalePrice, setPublicSalePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newMintedIds, setNewMintedIds] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const getAccount = async () => {
    dispatch(connectionAction());
  };
  const getPricePerCard = async () => {
    try {
      let contractOf = new webSupply.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      let pricePerCard = await contractOf.methods.publicPrice().call();
      let publicPrice = caver.utils.fromPeb(pricePerCard);
      setPublicSalePrice(publicPrice);
      if (totalPrice == 0) {
        setTotalPrice(publicPrice);
      }
    } catch (e) {
      console.log("Error While getting public sale price", e);
    }
  };
  const getNftsLength = async () => {
    try {
      let acc = await loadWeb3();
      let contractOf = new webSupply.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      if (acc) {
        const totaNftIds = await contractOf.methods
          .walletOfOwner(acc)
          .call()
          .then((res) => {
            setPublicMintLengthNFt(res.length);
          });
      }
    } catch (e) {
      console.log("catch into getNFTS");
    }
  };

  const displayImage = async () => {
    try {
      let acc = await loadWeb3();

      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      if (acc) {
        let totalIDs = await contractOf.methods.walletOfOwner(account).call();
        totalIDs = totalIDs.slice(-mintAmount);
        let imagesArray = [];
        totalIDs.forEach(async (ids) => {
          if (ids <= 800) {
            let imageUrl = `/config/images/${ids}.jpg`;
            let imageName = `Common #${ids}`;
            let id = ids;
            imagesArray = [...imagesArray, { imageName, imageUrl, id }];
            setNewMintedIds(imagesArray);
          } else {
            let imageUrl = `/config/images/${ids}.jpg`;
            let imageName = `Genesis #${ids}`;
            let id = ids;
            imagesArray = [...imagesArray, { imageName, imageUrl, id }];
            setNewMintedIds(imagesArray);
          }
        });
        setModalShow(true);
      }
    } catch (e) {
      console.log(" Error while displaying images", e);
    }
  };
  const publicMint = async () => {
    if (account == "No Wallet") {
      toast.info("No Wallet Connected");
    } else if (account == "Wrong Network") {
      toast.info("Wrong Network");
      console.log("Not Connected");
    } else if (account == "Connect Wallet") {
      toast.info("Connect Wallet");
    } else {
      try {
        let contractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        const publicMintBool = await contractOf.methods.publicStarted().call();
        let pricePerCard = await contractOf.methods.publicPrice().call();
        if (publicMintBool == true) {
          let tokenContract = new caver.klay.Contract(tokenAbi, tokenAddress);
          let tokenBalance = await tokenContract.methods
            .balanceOf(account)
            .call();
          let totalPay;
          totalPay = caver.utils.fromPeb(pricePerCard);
          totalPay = mintAmount * pricePerCard;

          getNftsLength();
          let balance = await caver.klay.getBalance(account);
          if (balance >= totalPay) {
            await contractOf.methods.mintPublic(mintAmount).send({
              from: account,
              gas: "5000000",
              value: totalPay.toString(),
            });
            displayImage();
            toast.success("Transaction Successful");
          } else {
            toast.info("Ooops! Your Balance is Low");
          }
        } else {
          toast.info("Auction hasn't started yet!");
        }
      } catch (e) {
        toast.error("Transaction Failed!");
        console.log("Error while public minting", e);
      }
    }
  };

  const increment = async () => {
    if (mintAmount >= 1) {
      let b = mintAmount + 1;
      setMintAmount(b);
      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      let pricePerCard = await contractOf.methods.publicPrice().call();

      pricePerCard = caver.utils.fromPeb(pricePerCard);
      setTotalPrice(b * pricePerCard);
    } else {
      console.log("error");
    }
  };
  const decrement = async () => {
    if (mintAmount > 1) {
      let b = mintAmount - 1;
      setMintAmount(b);
      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      let pricePerCard = await contractOf.methods.publicPrice().call();
      pricePerCard = caver.utils.fromPeb(pricePerCard);

      setTotalPrice(b * pricePerCard);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    setInterval(() => {
      getPricePerCard();
    }, [50000]);
    getPricePerCard();
    getAccount();
  }, []);

  return (
    <>
      <section id="public-sale">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2 className="text-white">MINTING</h2>
              <h1 className="text-white textPublic">PUBLIC MINTING SALES</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-8 ps-box">
              <div className="row">
                <div className="col-xl-4 text-center">
                  <div className="ps-mint-box">
                    <img
                      src={소개페이지이미지}
                      alt="img"
                      className="소개페이지이미지img"
                    />
                    <div className="row">
                      <div className="input-group input-group-center  mt-4 col-12 ">
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959", fontWeight: "700" }}
                          onClick={() => decrement()}
                        >
                          -
                        </button>
                        <p className="form-control number mt-3">{mintAmount}</p>
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959" }}
                          onClick={() => increment()}
                        >
                          +
                        </button>
                      </div>
                      <hr className="my-3" />
                    </div>

                    <div className="total text-white mt-3">
                      <span className="text">Total</span>
                      <span className="value">{totalPrice} BCB</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8  col-info">
                  <div className="ps-info-box">
                    <div className="box-head">
                      <span className="text-white fw-bold">Price Per Card</span>
                      <span
                        className="value text-white"
                        style={{ fontWeight: "700" }}
                      >
                        {publicSalePrice} BCB
                      </span>
                    </div>

                    <div className="box-body text-center">
                      <div className="content text-white">
                        <h4>Join the Minting right now!</h4>
                        <p className="dutch-p">
                          Sale will be dutch auction in which only first 2,000
                          NFTs will be minted - in dutch auction sale users can
                          only mint using the BCB token collected as reward by
                          staking the Berry Girl NFTs (call these minted NFTs as
                          BG NFT) - the dutch auction sale will start from 5,000
                          token per mint price and every 15 minutes the price
                          for mint will go down 50 coins - the sale will end if
                          all the 1,000 NFTs are sold or 24 hours are finished
                          for the sale - if either of the condition is met then
                          the sale will turn off.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-7 col-12 mt-2">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-connect"
                              size="lg"
                              onClick={() => getAccount()}
                            >
                              {account && account === "No Wallet"
                                ? "Connect Wallet"
                                : account === "Connect Wallet"
                                ? "Connect Wallet"
                                : account === "Wrong Network"
                                ? account
                                : account &&
                                  account.substring(0, 4) +
                                    "..." +
                                    account.substring(account.length - 4)}
                            </button>
                          </div>
                        </div>
                        <div className="col-md-5 col-12 mt-2">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-Mint"
                              size="lg"
                              onClick={() => {
                                publicMint();
                              }}
                            >
                              Mint
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="buttons"></div>
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
                >
                  <Modal.Body
                    className="modal-img"
                    style={{
                      background: "rgb(12,30,37)",
                      border: "3px solid #2ADEEA",
                      borderRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <img src={Group795} className="image1" alt="" />
                    <img src={Group796} className="image2" alt="" />
                    <img src={Group797} className="image3" alt="" />
                    <img src={Group798} className="image4" alt="" />
                    <img src={Rectangle42} className="image5" alt="" />
                    <img src={Rectangle43} className="image6" alt="" />
                    <div
                      className="row staking d-flex justify-content-center flex-wrap flex-row"
                      id="presale"
                    >
                      <div className="row d-flex justify-content-center"></div>
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                          <img src={Rectangle45} className="mintImage1" />
                          <img src={Rectangle46} className="mintImage2" />
                          <span className="mintImage3">CONGRATULATION!</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center text-center mt-4 ">
                        <span className="dutch-span1">
                          You got a Berry Girl card now !
                        </span>
                        {newMintedIds &&
                          newMintedIds.map((item) => {
                            return (
                              <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                                <img
                                  src={item.imageUrl}
                                  className="dutch-img23"
                                />
                              </div>
                            );
                          })}
                        <div className="row d-flex justify-content-center mt-4">
                          <div className="col-md-2 col-11 mt-2">
                            <div className="d-grid gap-2">
                              <button className="btn btn-dutch-public1">
                                <Link to="/stake">Stake</Link>
                              </button>
                            </div>
                          </div>
                          <div className="col-md-2 col-11 mt-2">
                            <div className="d-grid gap-2">
                              <button className="btn btn-dutch-public">
                                <Link to="/breed">Breed</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-3 mb-5">
                          <div className="col-md-4 col-11">
                            <div className="d-grid gap-2">
                              <button
                                className="btn btn-dutch1-public"
                                onClick={() => setModalShow(false)}
                              >
                                Do it later
                              </button>
                            </div>
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
      </section>
      <Footer />
    </>
  );
};

export default PublicMint;
