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
import { useNavigate } from "react-router-dom";
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
import { stakingAbi, stakingAddress } from "../Component/Utils/Staking";
import { tokenAbi, tokenAddress } from "../Component/Utils/token";
import { loadWeb3 } from "../Component/Api/api";
import { connectionAction } from "../Redux/connection/actions";
import { useSelector, useDispatch } from "react-redux";
import Caver from "caver-js";
const caver = new Caver(window.klaytn);
// const webSupply = new Caver("https://public-node-api.klaytnapi.com/v1/cypress");
const webSupply = new Caver("https://api.baobab.klaytn.net:8651");

////// dutch mint

const PublicSale = () => {
  const [flag, setFlag] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  let [items, setItems] = useState(Data);
  let account = useSelector((state) => state.connect?.connection);
  // const [account, setAccount] = useState("Connect Wallet");
  const [lengthNFT, setLengthNFT] = useState();
  // let lengthNFT;
  const [resLast, resSetLast] = useState();
  let resLastInDutch;
  const [publicSalePrice, setPublicSalePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newMintedIds, setNewMintedIds] = useState([]);
  //   const [userBalance, setUserBalance] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const getAccount = async () => {
    dispatch(connectionAction());
    // setFlag(true);
    // let acc = await loadWeb3();
    // console.log(acc, "connection in getAccount");
    // setAccount(acc);
  };
  const getPricePerCard = async () => {
    try {
      console.log("webSupply", webSupply);
      let contractOf = new webSupply.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      console.log(
        "pricePerCard contract in dutch mint get price function",
        contractOf.methods
      );
      let pricePerCard = await contractOf.methods.getPrice(1).call();
      // .then((res) => console.log("res of get price", res))
      // .then((error) => {
      //   console.log("res of get price error", error);
      // });
      console.log("pricePerCard : ", pricePerCard);
      let publicPrice = caver.utils.fromPeb(pricePerCard);
      setPublicSalePrice(publicPrice);
      if (totalPrice == 0) {
        setTotalPrice(publicPrice);
      }
      // }
    } catch (e) {
      console.log("Error While getting dutch sale price", e);
    }
  };
  const getNftsLength = async () => {
    try {
      let acc = await loadWeb3();
      // let contractOf = new webSupply.klay.Contract(
      //   berryClubContractAbi,
      //   berryClubCntractAddress
      // );
      let contractOf = new caver.klay.Contract(stakingAbi, stakingAddress);
      console.log("account before await", account);
      if (account) {
        // let totalIDs = await contractOf.methods.getTotalIds(acc).call();

        const totaNftIds = await contractOf.methods
          .getTotalIds(account)
          .call()
          .then((res) => {
            setLengthNFT(res.length);
            // lengthNFT = res.length;
          });
      }
    } catch (e) {
      console.log("catch into getNFTS");
    }
  };

  const displayImage = async () => {
    console.log("into display images", account);
    try {
      let acc = await loadWeb3();
      let contractOf = new caver.klay.Contract(stakingAbi, stakingAddress);
      // let contractOf = new caver.klay.Contract(
      //   berryClubContractAbi,
      //   berryClubCntractAddress
      // );

      if (account) {
        // let totalIDs = await contractOf.methods.walletOfOwner(account).call();
        let totalIDs = await contractOf.methods.getTotalIds(account).call();

        console.log("onwner list", totalIDs);
        totalIDs = totalIDs.slice(-mintAmount);
        console.log("onwner list after slice", totalIDs);
        toast.success("Transaction Successful");
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
  const dutchMint = async () => {
    setFlag(true);
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
        const auctionBool = await contractOf.methods.auctionStarted().call();
        console.log("auctionBool", auctionBool);

        let pricePerCard = await contractOf.methods.getPrice(mintAmount).call();
        if (auctionBool == true) {
          let tokenContract = new caver.klay.Contract(tokenAbi, tokenAddress);
          // let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
          let tokenBalance = await tokenContract.methods
            .balanceOf(account)
            .call();
          tokenBalance = caver.utils.fromPeb(tokenBalance);
          // tokenBalance = web3.utils.fromWei(tokenBalance);
          console.log("tokenBalance", tokenBalance);
          console.log("totalPrice", totalPrice);
          console.log("mintAmount", mintAmount);
          console.log("pricePerCard", pricePerCard);
          getNftsLength();

          if (parseFloat(tokenBalance) >= parseFloat(totalPrice)) {
            // if (tokenBalance) {
            // await Promise.all([
            //   await tokenContract.methods
            //     .approve(berryClubCntractAddress, pricePerCard)
            //     .send({
            //       from: account,
            //       gas: "5000000",
            //     }),
            //   await contractOf.methods.dutchMint(mintAmount).send({
            //     from: account,
            //     gas: "5000000",
            //   }),
            // ]);
            console.log("into if");
            await tokenContract.methods
              .approve(berryClubCntractAddress, pricePerCard)
              .send({
                from: account,
                gas: "5000000",
                // nonce: 805,
              });
            // .then((hash) => {
            //   console.log("hash", hash);
            // });
            // await contractOf.methods
            //   .gettokens("500000000000000000000")
            //   .send({
            //     gas: "5000000",
            //     from: account,
            //   })
            //   .then((hash) => {
            //     console.log("into then");
            //     console.log("hash", hash);
            //   });
            // await tokenContract.methods
            //   .transferFrom(account, berryClubCntractAddress, pricePerCard)
            //   .send({
            //     gas: "5000000",
            //     from: account,
            //     nonce: 811,
            //   })
            //   .then((hash) => {
            //     console.log("into then");
            //     console.log("hash", hash);
            //   });
            // console.log("after approve");
            await contractOf.methods.mintDutch(mintAmount).send({
              from: account,
              gas: "5000000",
            });
            //   .then((hash) => {
            //     console.log("into then");
            //     console.log("hash", hash);
            //   });
            //   .then("receipt", (receipt) => {

            // .on("transactionHash", function (hash) {
            //   console.log("hash", hash);
            // })
            // .on("receipt", function (receipt) {
            //   console.log("receipt", receipt);
            // })
            // .on("error", console.log("error"));

            // await contractOf.methods
            //   .mintPublic(mintAmount)
            //   .send({
            //     from: account,
            //     gas: "5000000",
            //   })
            //   .then("transactionHash", (hash) => {
            //     console.log("hash", hash);
            //   })
            //     console.log("receipt", receipt);
            //   })
            //   .then("error", console.error);
            // console.log("after dutchMint function");

            // displayImage();
            // toast.success("Transaction Successful");

            // getImageAndIds();
            // getModalImages();
            // setModalShow(true);
          } else {
            console.log("balance is low");
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
      console.log(account, "account in get price ");

      console.log("contract", contractOf.methods);
      let pricePerCard = await contractOf.methods.getPrice(b).call();
      let publicPrice = caver.utils.fromPeb(pricePerCard);
      // publicPrice = parseFloat(publicPrice).toFixed(4);

      console.log("pricePerCard : ", pricePerCard, b);
      // myTotalPrice = parseFloat(myTotalPrice).toFixed(4);

      setTotalPrice(publicPrice);
      // const res = await contractOf.methods.walletOfOwner(account).call();
      // console.log("resss", res);
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
      console.log(account, "account in get price ");

      console.log("contract", contractOf.methods);
      let pricePerCard = await contractOf.methods.getPrice(b).call();
      let publicPrice = caver.utils.fromPeb(pricePerCard);
      // publicPrice = parseFloat(publicPrice).toFixed(4);

      console.log("pricePerCard : ", pricePerCard, b);
      setTotalPrice(publicPrice);
    } else {
      console.log("error");
    }
  };

  const result = async () => {
    try {
      let acc = await loadWeb3();

      let contractOf = new caver.klay.Contract(stakingAbi, stakingAddress);
      console.log("res account", acc);
      if (account) {
        const totaNftIds = await contractOf.methods
          .getTotalIds(account)
          .call()
          .then((res) => {
            // resSetLast(res.length);
            console.log("res", res.length);
            resLastInDutch = res.length;
            console.log("ids in result ", resLastInDutch);
          });
      }
      // getImage();
    } catch (e) {
      console.log("error");
    }

    // getImage();
  };
  useEffect(() => {
    setInterval(() => {
      getPricePerCard();
    }, [50000]);
    getPricePerCard();
    // result();
  }, []);
  useEffect(() => {
    setInterval(() => {
      getNftsLength();
      console.log("setInterval");
    }, [1000]);
    result();
  }, []);

  useEffect(() => {
    // result();
    console.log("if in resLast hhhhhhh", resLastInDutch, lengthNFT);
    console.log("if in resLast hhhhhhh reslast state", resLast, lengthNFT);
    if (flag) {
      if (resLastInDutch != 0 && lengthNFT != 0 && resLast != lengthNFT) {
        console.log("if in resLast", resLastInDutch, lengthNFT);
        displayImage();
        // resSetLast(lengthNFT);
        resLastInDutch = lengthNFT;
      }
    }
  }, [lengthNFT]);
  useEffect(() => {
    getNftsLength();
    result();
  }, [account]);
  useEffect(() => {
    getAccount();
  }, []);

  console.log("last nft ", lengthNFT);
  console.log("account global ", account, flag);
  // console.log("last nft resLast ", resLast);
  return (
    <>
      <section id="public-sale">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2 className="text-white">MINTING</h2>
              <img
                src={DUTCHMINTINGSALES}
                alt=""
                className="pt-3 DUTCH-image"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-8 ps-box">
              <div className="row">
                <div className="col-xl-4 text-center">
                  <div className="ps-mint-box">
                    <img
                      src={소개페이지이미지}
                      alt=""
                      className="소개페이지이미지img"
                    />
                    <div className="row">
                      <div className="input-group input-group-center mt-4 col-12 ">
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959", fontWeight: "700" }}
                          onClick={() => decrement()}
                        >
                          -
                        </button>
                        <p
                          //   type="text"
                          className="form-control number mt-3"
                          //   placeholder="1"
                          //   value="1"
                        >
                          {mintAmount}
                        </p>
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959" }}
                          onClick={() => increment()}
                        >
                          +
                        </button>
                        {/* <span className="input-group-text form-control">
                          3 max
                        </span> */}
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
                        {/* <p>
                          You can participate in Minting by connecting wallet
                          and pressing Mint button.
                        </p>
                        <p>
                          The number of transitions per person is limited to 10,
                          and sanctions can be imposed without additional
                          guidance if bot actions are detected.
                        </p> */}
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
                                dutchMint();
                                // setModalShow(true);
                                // displayImage();
                                // mint(mintAmount);
                              }}
                            >
                              Mint
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        {/* <button className="connect m-1">Connect</button>
                                                <button className="mint m-1">Mint</button> */}
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
                >
                  <Modal.Body
                    className="modal-img"
                    style={{
                      background: "rgb(12,30,37)",
                      border: "3px solid #2ADEEA",
                      borderRadius: "5px",
                      position: "relative",
                      // Width: "900px"
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
                      <div className="row d-flex justify-content-center">
                        {/* <div className="col-11 d-flex justify-content-end">
                          <IoMdClose
                            onClick={() => setModalShow(false)}
                            size={28}
                            style={{ color: "white", cursor: "pointer" }}
                          />
                        </div> */}
                      </div>
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                          <img
                            src={Rectangle45}
                            className="mintImage1"
                            alt=""
                          />
                          <img
                            src={Rectangle46}
                            className="mintImage2"
                            alt=""
                          />
                          <span className="mintImage3">CONGRATULATION!</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center text-center mt-4 ">
                        <span className="dutch-span1">
                          You got a Berry Girl card now !
                        </span>
                        {/* <div className="col-md-4 col-11">
                          <div className="row">
                          <div className="col-12 dutch-img2 d-flex justify-content-center align-items-center mt-4" >
                            <img src={girls950} className="dutch-img23" />
                          </div>
                          <div className="row d-flex justify-content-center mt-4" sty>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Staking
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Breed
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-4 mb-5">
                            <div className="col-md-12 col-11">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch1" size="lg">
                                  Do it later
                                </button>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>



                        <div className="col-md-4 col-11">
                          <div className="row">
                          <div className="col-12 dutch-img2 d-flex justify-content-center align-items-center mt-4" >
                            <img src={girls950} className="dutch-img23" />
                          </div>
                          <div className="row d-flex justify-content-center mt-4" sty>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Staking
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Breed
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-4 mb-5">
                            <div className="col-md-12 col-11">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch1" size="lg">
                                  Do it later
                                </button>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>




                        <div className="col-md-4 col-11">
                          <div className="row">
                          <div className="col-12 dutch-img2 d-flex justify-content-center align-items-center mt-4" >
                            <img src={girls950} className="dutch-img23" />
                          </div>
                          <div className="row d-flex justify-content-center mt-4" sty>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Staking
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 col-11 mt-2">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch" size="lg">
                                  Breed
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-4 mb-5">
                            <div className="col-md-12 col-11">
                              <div className="d-grid gap-2">
                                <button className="btn btn-dutch1" size="lg">
                                  Do it later
                                </button>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div> */}
                        {newMintedIds.map((item) => {
                          return (
                            <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                              <img
                                src={item.imageUrl}
                                className="dutch-img23"
                                alt=""
                              />
                            </div>
                          );
                        })}
                        <div className="row d-flex justify-content-center mt-4">
                          {/* <div className="col-md-6 col-11 mt-2">
                            <div className="d-grid gap-2">
                              <button className="btn btn-dutch" size="lg">
                                Staking
                              </button>
                            </div>
                          </div> */}
                          {/* <div className="col-md-3 col-11 mt-2">
                            <div className="d-grid gap-2">
                              <button className="btn btn-dutch" size="lg">
                                Breed
                              </button>
                            </div>
                          </div> */}
                        </div>
                        <div className="row d-flex justify-content-center mt-4 mb-5">
                          <div className="col-md-6 col-11">
                            <div className="d-grid gap-2">
                              <button
                                className="btn btn-dutch1-public"
                                size="lg"
                                onClick={() => setModalShow(false)}
                              >
                                Do it later
                              </button>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                        {/* {newMintedIds.map((post) => {
                          console.log("newMintedIds", post[0].name);
                          return (
                            <div className="col-4">
                              <img
                                src={post[0].image}
                                className=" m-1 mintImage"
                                alt="..."
                              />
                              <h5 className="image-name py-2 text-white">
                                {post[0].name}
                              </h5>
                            </div>
                          );
                        })} */}
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              ) : (
                <></>
              )}
            </div>
            {/* <div className="col-md-4 text-center">
                        <div className="ps-mint-box">
                            <img src={Girl} alt="" />
                                <div class="input-group py-2 mt-4">
                                    <button class="btn-minus" type="button" id="">-</button>
                                    <input type="text" class="form-control number" placeholder="1" value="1" />
                                    <button class="btn-plus" type="button" id="">+</button>
                                    <span class="input-group-text form-control">3 max</span>
                                </div>
                                <hr class="my-3" /> 
                                
                                <div class="total text-white">
                                    <span class="text">Total</span>
                                    <span class="value">0.00 ETH</span>
                                </div>
                        </div>
                    </div> */}
            {/* <div className="col-md-8 offset-md-1 col-info">
                        <div className="ps-info-box">
                            <div className="box-head">
                                 <span className="text fw-bold">Price per Card</span>
                                <span className="value">0.00 ETH</span>
                            </div>
                       
                            <div className="box-body text-center">
                                <div className="content">
                                    <h4>Join the Minting right now!</h4>
                                    <p>You can participate in Minting by connecting wallet and pressing Mint button.</p>
                                    <p>The number of transitions per person is limited to 10, and sanctions can be imposed without additional guidance if bot actions are detected.</p>
                                </div>
                                <div className="buttons">
                                    <button className="connect m-1">Connect</button>
                                    <button className="mint m-1">Mint</button>
                                </div>
                            </div>
                        </div>
                       
                    </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicSale;
