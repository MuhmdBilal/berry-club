// import "./Breed.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWeb3 } from "../Api/api";
import Footer from "../Footer";
import "./Breed.css";
import Group795 from "../../media/Group 795.png";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png";
import Group798 from "../../media/Group 798.png";
import Rectangle42 from "../../media/Rectangle 42.png";
import Rectangle43 from "../../media/Rectangle 43-4.png";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import pcs1 from "../../media/2 744928.png";
import Group195 from "../../Assets/Group 195.png";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Rectangle45 from "../../media/Rectangle 45.png";
import Rectangle46 from "../../media/Rectangle 46.png";
import Caver from "caver-js";
import { tokenAbi, tokenAddress } from "../Utils/token";
import { connectionAction } from "../../Redux/connection/actions";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Utils/BerryClub";
import { getSignatureTest } from "../Api/signature";
import { toast } from "react-toastify";
// const webSupply = new Caver("https://public-node-api.klaytnapi.com/v1/cypress");
const webSupply = new Caver("https://api.baobab.klaytn.net:8651");
const caver = new Caver(window.klaytn);
function Breed() {
  const dispatch = useDispatch();
  // const [account, setAccount] = useState("Connect Wallet");
  const account = useSelector((state) => state.connect?.connection);
  const [falgForInterval, setFlagForInterval] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [newMintedIds, setNewMintedIds] = useState([]);
  const [newMint, setNewMint] = useState([]);
  const [availableTokenBalance, setAvaibleTokenBalance] = useState(0);
  const [genesisPrice, setGenesisPrice] = useState(0);
  const [nftFlag, setNftFlag] = useState(false);
  const [nftLength, setNftLength] = useState();
  let resLastNft;

  let [trainerOne, setTrainerOne] = useState({
    width: 70,
    status: false,
    imgUrl: Group195,
    tokenId: 0,
  });
  let [trainerTwo, setTrainerTwo] = useState({
    width: 70,
    status: false,
    imgUrl: Group195,
    tokenId: 0,
  });
  const cancleBreedImageOne = () => {
    setTrainerOne({
      width: 60,
      status: false,
      imgUrl: Group195,
      tokenId: 0,
    });
  };
  const cancleBreedImageTwo = () => {
    setTrainerTwo({
      width: 60,
      status: false,
      imgUrl: Group195,
      tokenId: 0,
    });
  };
  const getAccount = async () => {
    dispatch(connectionAction());
    setNftFlag(true);
    // let acc = await loadWeb3();
    getMyNfts();
    // setAccount(acc);
  };
  const getBreedImage = async (imgUri, item) => {
    console.log("img uri", imgUri);
    console.log("img item", item.id);
    let id = item.id;
    try {
      if (id > 800) {
        toast.info("Please select Common NFT Collection");
      } else if (
        trainerOne.status == false &&
        trainerTwo.imgUrl !== `${imgUri}`
      ) {
        setTrainerOne({
          width: 200,
          status: true,
          imgUrl: `${imgUri}`,
          tokenId: id,
        });
      } else if (
        trainerTwo.status == false &&
        trainerOne.imgUrl !== `${imgUri}`
      ) {
        setTrainerTwo({
          width: 200,
          status: true,
          imgUrl: `${imgUri}`,
          tokenId: id,
        });
      }
    } catch (e) {
      console.log("error while get breed iamge", e);
    }
  };
  const renderImage = () => {
    let totaNftIds = ["12", "100", "543", "898", "122"];
    console.log("onwner list", totaNftIds);
    let imagesArray = [];
    totaNftIds.forEach(async (ids) => {
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
  };
  const getWalletNftsLength = async () => {
    try {
      let acc = await loadWeb3();
      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      if (acc) {
        const totaNftIds = await contractOf.methods
          .walletOfOwner(acc)
          .call()
          .then((res) => {
            setNftLength(res.length);
          });
      }
    } catch (e) {
      console.log("catch into getNFTS");
    }
  };
  const getMyNfts = async () => {
    try {
      if (account == "Connect Wallet") {
        console.log("Connect Wallet");
      } else if (account == "No Wallet") {
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        let dummy = [];

        let contractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let totaNftIds = await contractOf.methods.walletOfOwner(account).call();
        console.log("onwner list in breed", totaNftIds);
        let imagesArray = [];
        if (totaNftIds.length > 0) {
          console.log("into if");
          totaNftIds.forEach(async (ids) => {
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
        } else {
          console.log("into set else");
          setNewMintedIds([]);
        }
        console.log("onwner list", imagesArray);
      }
    } catch (e) {
      console.log("error while getting nfts", e);
    }
  };

  const getBalanceOf = async () => {
    try {
      let tokenContract = new caver.klay.Contract(tokenAbi, tokenAddress);
      let tokenBalance = await tokenContract.methods.balanceOf(account).call();
      tokenBalance = caver.utils.fromPeb(tokenBalance);
      setAvaibleTokenBalance(parseInt(tokenBalance));
    } catch (e) {
      console.log("error in function getting balance", e);
    }
  };
  const getGenesisPrice = async () => {
    try {
      let nftContract = new webSupply.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      let genesisPrice = await nftContract.methods.genesisPrice().call();
      genesisPrice = caver.utils.fromPeb(genesisPrice);
      setGenesisPrice(parseInt(genesisPrice));
    } catch (e) {
      console.log("error while getting genesis Price", e);
    }
  };

  const displayImageBreed = async () => {
    try {
      let acc = await loadWeb3();
      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      if (account) {
        let totalIDs = await contractOf.methods.walletOfOwner(account).call();
        const count = 1;
        let sliceedTotalIDs = totalIDs.slice(-1);
        toast.success("Transaction Successful");
        let imagesArray = [];
        sliceedTotalIDs.forEach(async (ids) => {
          /// 1-8000 common 8001-10000 gensis
          if (ids <= 800) {
            let imageUrl = `/config/images/${ids}.jpg`;
            let imageName = `Common #${ids}`;
            imagesArray = [...imagesArray, { imageName, imageUrl }];
            setNewMint(imagesArray);
            // setNewMintedIds(imagesArray);
          } else {
            let imageUrl = `/config/images/${ids}.jpg`;
            let imageName = `Genesis #${ids}`;
            imagesArray = [...imagesArray, { imageName, imageUrl }];
            setNewMint(imagesArray);
          }
        });
        setModalShow(true);
      }
    } catch (e) {
      console.log(" Error while displaying images", e);
    }
  };

  const breed = async () => {
    try {
      setNftFlag(true);
      setFlagForInterval(true);
      if (account == "Connect Wallet") {
        toast.error("Connect Wallet");
      } else if (account == "No Wallet") {
        toast.error("Connect Wallet");
      } else if (account == "Wrong Network") {
        toast.error("Wrong Network");
        console.log("Not Connected");
      } else {
        let contractOfNFT = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        const auctionBool = await contractOfNFT.methods.genesisStarted().call();
        if (auctionBool) {
          if (trainerOne.status == true && trainerTwo.status == true) {
            let tokenContract = new caver.klay.Contract(
              tokenAbi,
              tokenAddress,
              { from: account.toString() }
            );
            let genWithZero = caver.utils.toPeb(genesisPrice);
            console.log("genesisPrice", genesisPrice);
            console.log("genWithZero", genWithZero);

            getWalletNftsLength();

            await tokenContract.methods
              .approve(berryClubCntractAddress, genWithZero)
              .send({
                from: account,
                gas: "5000000",
              });

            let signature = await getSignatureTest(
              berryClubCntractAddress,
              account
            );

            let genesisPriceResult = await contractOfNFT.methods
              .mintBreed(
                trainerOne.tokenId,
                trainerTwo.tokenId,
                signature[0],
                signature[1]
              )
              .send({
                from: account,
                gas: "5000000",
              });

            toast.success("Transaction Successful");
          } else {
            toast.info("Please Select two NFTs");
          }
        } else {
          toast.info("Breed hasn't started yet!");
        }
      }
    } catch (e) {
      console.log("error", e);
      console.log("error", e.message);
      toast.error("Transaction Failed");
    }
  };
  const result = async () => {
    try {
      let acc = await loadWeb3();

      let contractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      if (acc) {
        const totaNftIds = await contractOf.methods
          .walletOfOwner(acc)
          .call()
          .then((res) => {
            console.log("res", res.length);
            resLastNft = res.length;
            console.log("ids in result function", res.length, resLastNft);
          });
      }
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    setInterval(() => {
      getWalletNftsLength();
      console.log("setInterval in breed");
    }, [1000]);
    result();
  }, []);
  useEffect(() => {
    if (nftFlag) {
      if (resLastNft != 0 && nftLength != 0 && resLastNft != nftLength) {
        displayImageBreed();
        getMyNfts();
        cancleBreedImageOne();
        cancleBreedImageTwo();
        resLastNft = nftLength;
        setFlagForInterval(false);
      }
    }
  }, [nftLength]);
  useEffect(() => {
    renderImage();
    getGenesisPrice();
  }, []);
  useEffect(() => {
    getMyNfts();
    getBalanceOf();
    getWalletNftsLength();
    result();
  }, [account]);
  return (
    <>
      <div className="airdrop-image">
        <div className="container pb-5">
          <div className="row airdrop-image11 d-flex justify-content-center">
            <div className="col-md-12 col-11">
              <img src={Group796} className="image2" />
              <img src={Group795} className="image1" />
              <img src={Group797} className="image3" />
              <img src={Group798} className="image4" />
            </div>
            <div className="col-md-12 col-11 d-flex justify-content-end mt-4 me-md-3">
              <button
                className="btn btn-random-buttun"
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
            <div className="col-12 d-flex justify-content-center mb-2">
              <h3 className="randombox-he">Breed</h3>
            </div>

            <div className="row d-flex justify-content-lg-start justify-content-center mt-">
              <div className="col-lg-7 col-11">
                <div className="row d-flex  justify-content-md-evenly justify-content-center">
                  <div className="col-md-4 col-11  mb-lg-1 mb-md-5 mb-2">
                    <p className="breedtext1 mt-3">Card 1</p>

                    <div
                      className="row breeds d-flex justify-content-center"
                      onClick={cancleBreedImageOne}
                    >
                      <div className="col-md-11 col-11 d-flex flex-column justify-content-center align-items-center  pt-sm-4 pt-4 pb-sm-4 pb-4">
                        {trainerOne.status && (
                          <span
                            style={{
                              paddingLeft: "180px",
                              cursor: "pointer",
                              color: "red",
                            }}
                            className="text-danger fs-3  d-flex justify-content-start"
                            onClick={cancleBreedImageOne}
                          >
                            <MdOutlineCancel />
                          </span>
                        )}
                        <img
                          src={trainerOne.imgUrl}
                          width={`${trainerOne.width}px`}
                          className=""
                        />
                      </div>
                      <div className="BreedminiBox p-2">Card 2</div>
                      <p className="Breedtext pt-sm-2 pt-3 pb-sm-2 pb-3"></p>
                    </div>
                  </div>

                  <div className="col-md-4 col-11 mb-lg-1 mb-5">
                    <p className="breedtext1 mt-3">Card 1</p>

                    <div
                      className="row breeds d-flex justify-content-center"
                      onClick={cancleBreedImageTwo}
                    >
                      <div className="col-md-11 col-11 d-flex flex-column justify-content-center align-items-center  pt-sm-4 pt-4 pb-sm-4 pb-4">
                        {trainerTwo.status && (
                          <span
                            style={{
                              paddingLeft: "180px",
                              cursor: "pointer",
                            }}
                            className="text-danger fs-3 d-flex justify-content-start"
                            onClick={cancleBreedImageTwo}
                          >
                            <MdOutlineCancel />
                          </span>
                        )}
                        <img
                          src={trainerTwo.imgUrl}
                          width={`${trainerTwo.width}px`}
                          className=""
                        />
                      </div>
                      <div className="BreedminiBox p-2">Card 2</div>
                      <p className="Breedtext pt-sm-2 pt-3 pb-sm-2 pb-3"></p>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center justify-conten-around mt-sm-3 ">
                  <div className="col-md-8 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  ">
                    <span className="breed-psans text-white">
                      Available BCB:
                    </span>
                    <span className="bredd-span">
                      {availableTokenBalance} &nbsp; BCB
                    </span>
                  </div>
                  <div className="col-md-8 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  mt-3">
                    <span className="breed-psans text-white">Breed Cost:</span>
                    <span className="bredd-span">
                      {genesisPrice} &nbsp; BCB
                    </span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-5 col-md-7 col-10 mt-sm-3 mt-3 mb-5">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-stake1 mt-3"
                        size="lg"
                        onClick={() => {
                          breed();
                        }}
                      >
                        Breed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-11 breed-box11 mb-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-11 col-12 breedboxs12">
                    <div className="row">
                      <div className="col-12 d-flex flex-row mt-3">
                        <div className="ms-3"></div>

                        <div className="text-center offset-lg-2">
                          <span className="breedtext1 ">MY COLLECTION</span>
                        </div>
                      </div>
                    </div>
                    <div className=" breedboxs123 mt-2 p-2" id="style-1">
                      <div className=" breedboxs124">
                        {newMintedIds.map((item) => {
                          return (
                            <div className=" ">
                              <div>
                                <img
                                  src={item.imageUrl}
                                  className="breedImages mt-2 img-fluid"
                                  onClick={() => {
                                    getBreedImage(item.imageUrl, item);
                                  }}
                                />
                              </div>
                              <span className="text-white d-flex justify-content-center">
                                {item.imageName}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
                    <img src={Rectangle45} className="mintImage1" alt="" />
                    <img src={Rectangle46} className="mintImage2" alt="" />
                    <span className="mintImage3">CONGRATULATION!</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center text-center mt-4 ">
                  <span className="dutch-span1">
                    You got a Berry Girl card now !
                  </span>

                  {newMint &&
                    newMint.map((item) => {
                      return (
                        <>
                          <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                            <img
                              src={item.imageUrl}
                              className="dutch-img23"
                              alt=""
                            />
                          </div>
                          <span className="dutch-span1">{item.imageName}</span>
                        </>
                      );
                    })}
                  <div className="row d-flex justify-content-center mt-4"></div>
                  <div className="row d-flex justify-content-center mt-4 mb-5">
                    <div className="col-md-3 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch-public">
                          <Link to="/stake">Stake</Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3 col-11">
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
                </div>
              </div>
            </Modal.Body>
          </Modal>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Breed;
