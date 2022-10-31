import { useEffect, useState } from "react";

import "./Minting.css";
import Footer from "../Component/Footer";
import PrivateSale from "../media/private-sale.png";
import FREEMINTING from "../media/FREE MINTING.png";
import { toast } from "react-toastify";
import { whiteListingArray } from "./whiteList";
import Girl from "../media/민팅페이지 이미지 1.png";
import { useTranslation } from "react-i18next";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";
import { stakingAbi, stakingAddress } from "../Component/Utils/Staking";
import { loadWeb3 } from ".././Component/Api/api";
import { getSignatureTest } from "../Component/Api/signature";
import { connectionAction } from "../Redux/connection/actions";
import { useDispatch, useSelector } from "react-redux";
import Group795 from "../media/Group 795.png";
import Group796 from "../media/Group 796.png";
import Modal from "react-bootstrap/Modal";
import Group797 from "../media/Group 797.png";
import Group798 from "../media/Group 798.png";
import Rectangle42 from "../media/Rectangle 42.png";
import Rectangle43 from "../media/Rectangle 43-4.png";
import Rectangle45 from "../media/Rectangle 45.png";
import Rectangle46 from "../media/Rectangle 46.png";
import Caver from "caver-js";
const caver = new Caver(window.klaytn);
const Minting = () => {
  const dispatch = useDispatch();
  let [t, i18n] = useTranslation();
  const [account, setAccount] = useState();
  const [newMintedIds, setNewMintedIds] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const acc = useSelector((state) => state.connect?.connection);

  console.log("acc in minting", acc);
  const getWalletAddress = () => {
    try {
      dispatch(connectionAction());
    } catch (e) {
      console.log("Error while getting user Address");
    }
  };

  const getSignature = async () => {
    const userAddress = await loadWeb3();
  };
  const displayImage = async (value) => {
    console.log("into display images");
    try {
      let contractOf = new caver.klay.Contract(stakingAbi, stakingAddress);

      if (acc) {
        let totalIDs = await contractOf.methods.getTotalIds(acc).call();
        totalIDs = totalIDs.slice(-value);
        console.log("totalIDs", totalIDs);
        let imagesArray = [];
        totalIDs.forEach(async (ids) => {
          if (ids <= 10000) {
            let imageUrl = `/config/images/${ids}.jpg`;
            let imageName = `Common #${ids}`;
            imagesArray = [...imagesArray, { imageName, imageUrl }];
            setNewMintedIds(imagesArray);
          }
        });
        setModalShow(true);
      }
    } catch (e) {
      console.log(" Error while displaying images", e);
    }
  };
  const mintNfts = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("No Wallet Connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
        console.log("Not Connected");
      } else if (acc == "Connect Wallet") {
        toast.info("Connect Wallet");
      } else {
        let contractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );

        let totaNftIds = await contractOf.methods.walletOfOwner(acc).call();
        console.log("totaNftIds", totaNftIds);
        const freeMintBool = await contractOf.methods.freeMintStarted().call();
        const claimedNFT = await contractOf.methods.claimedUser(acc).call();

        if (claimedNFT) {
          toast.info("You Have already Performed minting. ");
        } else {
          if (freeMintBool) {
            let signature = await getSignatureTest(
              berryClubCntractAddress,
              acc
            );
            let findAdd = whiteListingArray.find((item) => {
              if (acc == item.address) {
                return item.address;
              }
            });

            if (findAdd) {
              let am = findAdd.amount;

              await contractOf.methods
                .claimNFT(am, signature[0], signature[1])
                .send({
                  from: acc,
                  gas: "5000000",
                });
              displayImage(am);
              toast.success("Transaction Successfull");
            } else {
              toast.info("Alas! You are not WhiteListed");
            }
          } else {
            console.log("Free Mint hasn't started yet!");
            toast.info("Free Mint hasn't started yet!");
          }
        }
      }
    } catch (e) {
      console.log("Error While Minting", e);
      toast.error("Transaction Failed");
    }
  };

  useEffect(() => {
    getWalletAddress();
    getSignature();
  }, []);

  return (
    <>
      <section id="minting">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2 className="text-white">MINTING</h2>

              <img src={FREEMINTING} alt="" className="pt-3 image-freemint" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="ps-info-box">
                <img src={Girl} alt="" />
                <h4 className="text-white mint-h4">{t("mintPara1")}</h4>
              </div>
              <button onClick={() => mintNfts()} className="mint-btn mt-3">
                MINT
              </button>
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
                    {newMintedIds.map((item) => {
                      return (
                        <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                          <img src={item.imageUrl} className="dutch-img23" />
                        </div>
                      );
                    })}

                    <div className="row d-flex justify-content-center mt-4 mb-5">
                      <div className="col-md-6 col-11">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-dutch1"
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
      </section>
      <Footer />
    </>
  );
};

export default Minting;
