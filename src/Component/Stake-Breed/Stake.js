import React, { useEffect, useState } from "react";
import "./Stake.css";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png";
import Group798 from "../../media/Group 798.png";
import Rectangle42 from "../../media/Rectangle 42.png";
import Rectangle43 from "../../media/Rectangle 43-4.png";
import comingsoon from "../../media/coming-soon 4.png";
import Group795 from "../../media/Group 795.png";
import stakepics1 from "../../media/2 744928.png";
import stakepcs2 from "../../media/3 4.png";
import { useDispatch, useSelector } from "react-redux";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../../Component/Utils/BerryClub";
import { stakingAddress, stakingAbi } from "../../Component/Utils/Staking";
import { connectionAction } from "../../Redux/connection/actions";
import { loadWeb3 } from "../Api/api";
import Footer from "../Footer";
import Caver from "caver-js";
import Data from "../../pages/metadata.json";

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { tokenAbi, tokenAddress } from "../Utils/token";
const caver = new Caver(window.klaytn);

function Stake() {
  const dispatch = useDispatch();
  // const [account, setAccount] = useState("Connect Wallet");
  const account = useSelector((state) => state.connect?.connection);
  const [rewardBalance, setRewardBalance] = useState([]);
  const [items, setItems] = useState(Data);
  const [userGenisisIds, setUserGenisisIds] = useState([]);
  const [userCommonIds, setUserCommonIds] = useState([]);
  const [myCommonNftIds, setMyCommonNftIds] = useState([]);
  const [myGenisisNftIds, setMyGenisisNftIds] = useState([]);
  const [bcbBalance, setBcbBalance] = useState(0);
  const [bcbBonus, setBcbBonus] = useState(0);
  const [bCashBalance, setBCashBalance] = useState(0);
  const [klayReward, setKlayReward] = useState(0);
  let [t, i18n] = useTranslation();

  const getWalletAddress = async () => {
    try {
      // let acc = await loadWeb3();
      dispatch(connectionAction());
      // setAccount(acc);
    } catch (e) {
      console.log("Error while getting user Address");
    }
  };

  const getMyNFts = async () => {
    try {
      if (account == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        let genisisNft = [];
        let commontNft = [];

        let berrycontractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let userWalletOfowner = await berrycontractOf.methods
          .walletOfOwner(account)
          .call();
        console.log("userWalletOfowner", userWalletOfowner);
        for (let i = 0; i < userWalletOfowner.length; i++) {
          if (parseInt(userWalletOfowner[i]) > 800) {
            let d = items.filter((e) => e.edition == userWalletOfowner[i]);
            genisisNft = [...genisisNft, d];
          } else {
            let d = items.filter((e) => e.edition == userWalletOfowner[i]);
            commontNft = [...commontNft, d];
          }
        }
        setMyCommonNftIds(commontNft);
        setMyGenisisNftIds(genisisNft);
      }
    } catch (e) {
      console.log("Error while getting my nfts", e);
    }
  };

  const getIdsReward = async () => {
    try {
      console.log("aaaaa ", account);
      if (account == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        let common = [];
        let genisis = [];

        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );

        let userTotalIds = await stakingContractOf.methods
          .getTotalIds(account)
          .call();
        console.log("userTotalIds", userTotalIds);
        let userStakedNfts = await stakingContractOf.methods
          .userStakedNFT(account)
          .call();
        console.log("userStakedNfts", userStakedNfts);

        //////total ids
        for (let i = 0; i < userTotalIds.length; i++) {
          let nftId = userTotalIds[i];

          let rewardForSingleId = await stakingContractOf.methods
            .getReward(account, nftId)
            .call();
          rewardForSingleId = caver.utils.fromPeb(rewardForSingleId);
          rewardForSingleId = parseFloat(rewardForSingleId).toFixed(2);

          let stakedRemainingTime = await stakingContractOf.methods
            .remainingTime(nftId)
            .call();
          let stakededTime = await stakingContractOf.methods
            .getTime(account, nftId)
            .call();
          let finalTime;
          let awaitedTime = stakedRemainingTime;

          if (awaitedTime > 0) {
            const secondsSinceEpoch = Math.round(Date.now() / 1000);
            awaitedTime = parseInt(stakededTime) + parseInt(awaitedTime);
            finalTime = awaitedTime - parseInt(secondsSinceEpoch);
            stakedRemainingTime = parseInt(stakedRemainingTime);

            let d = Math.floor(stakedRemainingTime / (3600 * 24));
            let h = Math.floor((stakedRemainingTime % (3600 * 24)) / 3600);
            let m = Math.floor((stakedRemainingTime % 3600) / 60);

            if (d < 0) {
              d = 0;
            }
            if (h < 0) {
              h = 0;
            }
            if (m < 0) {
              m = 0;
            }
            finalTime = `DD: ${d} HH: ${h} MM: ${m}`;
          } else {
            finalTime = "00:00:00";
          }
          if (parseInt(userTotalIds[i]) > 800) {
            let d = items.filter((e) => e.edition == userTotalIds[i]);
            genisis = [...genisis, { d, rewardForSingleId, finalTime }];
          } else {
            let d = items.filter((e) => e.edition == userTotalIds[i]);
            common = [...common, { d, rewardForSingleId, finalTime }];
          }
        }

        ////userStaked
        for (let i = 0; i < userStakedNfts.length; i++) {
          let nftId = userStakedNfts[i];
          let rewardForSingleId = await stakingContractOf.methods
            .getReward(account, nftId)
            .call();

          rewardForSingleId = caver.utils.fromPeb(rewardForSingleId);
          rewardForSingleId = parseFloat(rewardForSingleId).toFixed(2);

          let stakedRemainingTime = await stakingContractOf.methods
            .remainingTime(nftId)
            .call();
          let stakededTime = await stakingContractOf.methods
            .getTime(account, nftId)
            .call();
          let finalTime;

          let awaitedTime;
          if (awaitedTime > 0) {
            const secondsSinceEpoch = Math.round(Date.now() / 1000);
            awaitedTime =
              parseInt(stakededTime) + parseInt(stakedRemainingTime);
            finalTime = awaitedTime - parseInt(secondsSinceEpoch);
            stakedRemainingTime = parseInt(stakedRemainingTime);
            let d = Math.floor(stakedRemainingTime / (3600 * 24));
            let h = Math.floor((stakedRemainingTime % (3600 * 24)) / 3600);
            let m = Math.floor((stakedRemainingTime % 3600) / 60);
            if (d < 0) {
              d = 0;
            }
            if (h < 0) {
              h = 0;
            }
            if (m < 0) {
              m = 0;
            }
            finalTime = `DD: ${d} HH: ${h} MM: ${m}`;
          } else {
            finalTime = "00:00:00";
          }
          if (parseInt(userStakedNfts[i]) > 800) {
            let d = items.filter((e) => e.edition == userStakedNfts[i]);
            genisis = [...genisis, { d, rewardForSingleId, finalTime }];
          } else {
            let d = items.filter((e) => e.edition == userStakedNfts[i]);
            common = [...common, { d, rewardForSingleId, finalTime }];
          }
        }

        setUserCommonIds(common);
        setUserGenisisIds(genisis);
      }
    } catch (e) {
      console.log("error while getting users all Minted ids", e);
    }
  };

  const getIdsTime = async () => {
    try {
      console.log("getIdsTime ", account);
      if (account == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        let dummy = [];
        let common = [];
        let genisis = [];

        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );

        let userTotalIds = await stakingContractOf.methods
          .getTotalIds(account)
          .call();

        let userStakedNfts = await stakingContractOf.methods
          .userStakedNFT(account)
          .call();

        for (let i = 0; i < userTotalIds.length; i++) {
          let nftId = userTotalIds[i];

          let stakedRemainingTime = await stakingContractOf.methods
            .getTime(account, nftId)
            .call();

          let valueType = await stakingContractOf.methods
            .getIDType(nftId)
            .call();
          let finalTime;
          if (valueType == "1") {
            const secondsSinceEpoch = Math.round(Date.now() / 1000);

            if (parseInt(secondsSinceEpoch) >= stakedRemainingTime) {
              finalTime = parseInt(secondsSinceEpoch) - stakedRemainingTime;
            }
          } else if (valueType == "2") {
            let totalStakingTime = await stakingContractOf.methods
              .finalTimeForDutchMint()
              .call();

            let awaitedTime =
              parseInt(stakedRemainingTime) + parseInt(totalStakingTime);
            const secondsSinceEpoch = Math.round(Date.now() / 1000);

            if (parseInt(secondsSinceEpoch) >= awaitedTime) {
              finalTime = parseInt(secondsSinceEpoch) - awaitedTime;
            } else {
              finalTime = "00:00:00";
            }
          } else {
            finalTime = stakedRemainingTime;
          }
          if (parseInt(userTotalIds[i]) > 800) {
            let d = items.filter((e) => e.edition == userTotalIds[i]);
            genisis = [...genisis, { d, finalTime }];
          } else {
            let d = items.filter((e) => e.edition == userTotalIds[i]);
            common = [...common, { d, finalTime }];
          }
        }
        for (let i = 0; i < userStakedNfts.length; i++) {
          let nftId = userStakedNfts[i];
          let stakedRemainingTime = await stakingContractOf.methods
            .getTime(account, nftId)
            .call();
          let valueType = await stakingContractOf.methods
            .getIDType(nftId)
            .call();
          let finalTime;

          if (valueType == "1") {
            let totalStakingTime = await stakingContractOf.methods
              .finalTimeForFreeMint()
              .call();
            let awaitedTime =
              parseInt(stakedRemainingTime) + parseInt(totalStakingTime);
            const secondsSinceEpoch = Math.round(Date.now() / 1000);

            if (parseInt(secondsSinceEpoch) >= awaitedTime) {
              finalTime = parseInt(secondsSinceEpoch) - awaitedTime;
            }
          } else if (valueType == "2") {
            let totalStakingTime = await stakingContractOf.methods
              .finalTimeForDutchMint()
              .call();

            let awaitedTime =
              parseInt(stakedRemainingTime) + parseInt(totalStakingTime);
            const secondsSinceEpoch = Math.round(Date.now() / 1000);

            if (parseInt(secondsSinceEpoch) >= awaitedTime) {
              finalTime = parseInt(secondsSinceEpoch) - awaitedTime;
            } else {
              finalTime = "00:00:00";
            }
          } else {
            finalTime = stakedRemainingTime;
          }
          if (parseInt(userStakedNfts[i]) > 800) {
            let d = items.filter((e) => e.edition == userStakedNfts[i]);
            genisis = [...genisis, { d, finalTime }];
          } else {
            let d = items.filter((e) => e.edition == userStakedNfts[i]);
            common = [...common, { d, finalTime }];
          }
        }

        setUserCommonIds(common);
        setUserGenisisIds(genisis);
      }
    } catch (e) {
      console.log("error while getting users all Minted ids", e);
    }
  };
  const ustakeSingleId = async (value) => {
    try {
      console.log("ustakeSingleId", value);
      if (account == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        toast.info("No Wallet Conntected");
        // console.log("Not Connected");
      } else if (account == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        toast.info("Wrong Network");

        // console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        toast.info("Connect Wallet");

        // console.log("Not Connected");
      } else {
        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let berrycontractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let valueType = await berrycontractOf.methods.getIdType(value).call();

        let stakedTime = await berrycontractOf.methods
          .getDutchMintingTime(value)
          .call();
        let totalStakingTime = await stakingContractOf.methods
          .finalTimeForDutchMint()
          .call();

        let awaitedTime = parseInt(stakedTime) + parseInt(totalStakingTime);
        const secondsSinceEpoch = Math.round(Date.now() / 1000);

        if (valueType == "1") {
          let stakedTime = await stakingContractOf.methods
            .getTime(account, value)
            .call();
          let totalStakingTime = await stakingContractOf.methods
            .finalTimeForFreeMint()
            .call();
          let awaitedTime = parseInt(stakedTime) + parseInt(totalStakingTime);
          const secondsSinceEpoch = Math.round(Date.now() / 1000);

          if (parseInt(secondsSinceEpoch) >= awaitedTime) {
            await stakingContractOf.methods.lockedSingleUnStake(value).send({
              from: account,
              gas: "5000000",
            });
            getMyNFts();
            getIdsReward();
            toast.success("transaction Successfull");
          } else {
            toast.info("Unstake Time Not Reached Yet!");
          }
        } else if (valueType == "2") {
          let stakedTime = await berrycontractOf.methods
            .getDutchMintingTime(value)
            .call();
          let totalStakingTime = await stakingContractOf.methods
            .finalTimeForDutchMint()
            .call();

          let awaitedTime = parseInt(stakedTime) + parseInt(totalStakingTime);
          const secondsSinceEpoch = Math.round(Date.now() / 1000);

          if (parseInt(secondsSinceEpoch) >= awaitedTime) {
            await stakingContractOf.methods.lockedSingleUnStake(value).send({
              from: account,
              gas: "5000000",
            });
            getMyNFts();
            getIdsReward();
            toast.success("Transaction Successfull");
          } else {
            toast.info("Unstake Time Not Reached Yet!");
          }
        } else if (valueType == "3" || valueType == "4" || valueType == "0") {
          await stakingContractOf.methods.unstake(value).send({
            from: account,
            gas: "5000000",
          });
          getMyNFts();
          getIdsReward();
          toast.success("Transaction Successfull");
        }
      }
    } catch (e) {
      console.log("Error while unstaking single id", e);
      toast.error("Transaction Failed");
    }
  };
  const claimSingleIdReward = async (value) => {
    try {
      if (account == "No Wallet") {
        toast.info("No Wallet Conntected");
      } else if (account == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (account == "Connect Wallet") {
        toast.info("Connect Wallet");
      } else {
        let berrycontractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );

        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let valueType = await berrycontractOf.methods.getIdType(value).call();
        console.log("valueType", valueType);
        if (valueType == "1" || valueType == "2") {
          await stakingContractOf.methods.lockedWithdrawReward(value).send({
            from: account,
            gas: "5000000",
          });
          toast.success("Transaction Successfull");
          getIdsReward();
        } else if (valueType == "0" || valueType == "3" || valueType == "4") {
          await stakingContractOf.methods.withDrawReward(value).send({
            from: account,
            gas: "5000000",
          });
          toast.success("Transaction Successfull");
          getIdsReward();
        }
      }
    } catch (e) {
      console.log("Error while Claiming single id", e);
      toast.error("Transaction Failed");
    }
  };
  const getUserBonus = async () => {
    try {
      let stakingContractOf = new caver.klay.Contract(
        stakingAbi,
        stakingAddress
      );

      let bonus = await stakingContractOf.methods.getBonus(account).call();

      bonus = caver.utils.fromPeb(bonus);
      setBcbBonus(bonus);
    } catch (e) {
      console.log("error while getting user bonus reward", e);
    }
  };
  const getUserTokenBalance = async () => {
    try {
      let tokenContractOf = new caver.klay.Contract(tokenAbi, tokenAddress);
      let userBcbBalance = await tokenContractOf.methods
        .balanceOf(account)
        .call();
      userBcbBalance = caver.utils.fromPeb(userBcbBalance);
      setBcbBalance(userBcbBalance);
    } catch (e) {
      console.log("error while getting user user Bcb Balance ", e);
    }
  };
  const stakeNft = async (nftId) => {
    console.log("boolForStake");
    if (account == "No Wallet") {
      toast.info("No Wallet Conntected");
    } else if (account == "Wrong Network") {
      toast.info("Wrong Network");
    } else if (account == "Connect Wallet") {
      toast.info("Connect Wallet");
    } else {
      try {
        let berryContractOf = new caver.klay.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let boolForStake = await berryContractOf.methods
          .isApprovedForAll(account, stakingAddress)
          .call();
        console.log(boolForStake, "boolForStake");
        if (boolForStake) {
          console.log(boolForStake, "boolForStake in true", nftId, account);

          let stake = await stakingContractOf.methods
            .Stake([nftId])
            .send({ from: account, gas: "5000000" })
            .then((res) => {
              console.log("res", res);
            });
          getMyNFts();
          getIdsReward();
          toast.success("Transaction Succesfull");
        } else {
          let stakedNFT = await berryContractOf.methods
            .setApprovalForAll(stakingAddress, true)
            .send({ from: account, gas: "5000000" });
          let stake = await stakingContractOf.methods
            .Stake([nftId])
            .send({ from: account, gas: "5000000" })
            .then((res) => {
              console.log("res", res);
            });
          getMyNFts();
          getIdsReward();
          toast.success("Transaction Succesfull");
        }
      } catch (e) {
        console.log("Error while staking NFT", e);
      }
    }
  };
  const stakeAllNft = async (nftId) => {
    try {
      let berryContractOf = new caver.klay.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      let stakingContractOf = new caver.klay.Contract(
        stakingAbi,
        stakingAddress
      );
      let userWalletOfowner = await berryContractOf.methods
        .walletOfOwner(account)
        .call();
      let boolForStake = await berryContractOf.methods
        .isApprovedForAll(account, stakingAddress)
        .call();
      if (boolForStake) {
        let stake = await stakingContractOf.methods
          .Stake(userWalletOfowner)
          .send({ from: account, gas: "5000000" })
          .then((res) => {
            console.log("res", res);
          });
        getMyNFts();
        getIdsReward();
        toast.success("Transaction Succesfull");
      } else {
        await berryContractOf.methods
          .setApprovalForAll(stakingAddress, true)
          .send({ from: account, gas: "5000000" });
        await stakingContractOf.methods
          .Stake(userWalletOfowner)
          .send({ from: account, gas: "5000000" })
          .then((res) => {
            console.log("res", res);
          });
        getMyNFts();
        getIdsReward();
        toast.success("Transaction Succesfull");
      }
    } catch (e) {
      console.log("Error while staking NFT", e);
    }
  };

  const unStakeAll = async () => {
    try {
      if (account == "No Wallet") {
        toast.info("No Wallet Conntected");
      } else if (account == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (account == "Connect Wallet") {
        toast.info("Connect Wallet");
      } else {
        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let flagForUnstake = true;
        let checkZero = await stakingContractOf.methods.getIds(account).call();

        if (checkZero.length > 0) {
          for (let i = 0; i <= checkZero.length; i++) {
            if (checkZero[i] == 0) {
              flagForUnstake = false;
            }
          }
          if (flagForUnstake) {
            await stakingContractOf.methods
              .lockedUnstakeAll()
              .send({ from: account, gas: "5000000" });
            getMyNFts();
            getIdsReward();
            toast.success("Transaction Successful");
          } else {
            toast.info("Unstake Time Not Reached Yet!");
          }
        } else {
          toast.info("There isn't any NFT in Stake");
        }
      }
    } catch (e) {
      toast.error("Transaction Failed");
      console.log("error while Unstake All", e);
    }
  };
  const unStakeAllPublic = async () => {
    try {
      if (account == "No Wallet") {
        toast.info("No Wallet Conntected");
      } else if (account == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (account == "Connect Wallet") {
        toast.info("Connect Wallet");
      } else {
        let stakingContractOf = new caver.klay.Contract(
          stakingAbi,
          stakingAddress
        );
        let userStakedNftsPublic = await stakingContractOf.methods
          .userStakedNFT(account)
          .call();
        console.log("userStakedddd", userStakedNftsPublic);
        if (userStakedNftsPublic.length > 0) {
          await stakingContractOf.methods
            .unStakeAll(userStakedNftsPublic)
            .send({ from: account, gas: "5000000" });
          getMyNFts();
          getIdsReward();
          toast.success("Transaction Successful");
        } else {
          toast.info("There isn't any NFT in Stake");
        }
      }
    } catch (e) {
      toast.error("Transaction Failed");
      console.log("error while Unstake All", e);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getIdsReward();
    }, 60000);
  });
  useEffect(() => {
    getMyNFts();
    getIdsReward();
    getUserBonus();
    getUserTokenBalance();
  }, [account]);
  useEffect(() => {
    getWalletAddress();
  }, []);
  return (
    <>
      <div className="airdrop-image131">
        <div className="container pb-5">
          <div className="row airdrop-image11 d-flex justify-content-center">
            <div className="col-md-12 col-11">
              <img src={Group796} className="image2" />
              <img src={Group795} className="image1" />
              <img src={Group797} className="image3" />
              <img src={Group798} className="image4" />
              <img src={Rectangle42} className="image55" />
              <img src={Rectangle43} className="image66" />
            </div>
            <div className="col-md-12 col-11 d-flex justify-content-end mt-4 me-md-3">
              <button
                onClick={() => getWalletAddress()}
                className="btn btn-random-buttun"
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

            <div className="col-12 d-flex justify-content-center mb-2 mt-3">
              <h3 className="randombox-he">{t("stake1")}</h3>
            </div>
            <div className="row d-flex justify-content-center justify-content-between">
              <div className="col-md-8 d-flex flex-row mt-3 mb-4">
                <div className="col-lx-2 me-3">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-stake"
                      size="lg"
                      onClick={() => stakeAllNft()}
                    >
                      {t("stake2")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="col-md-12 d-flex flex-row justify-content-between mt-md-1 mt-4">
                  <span className="random-Box-span1">{t("stake4")}:</span>
                  <span className="random-Box-span1">
                    {bcbBalance} &nbsp;BCB
                  </span>
                </div>
                <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                  <span className="random-Box-span1">{t("stake5")}:</span>
                  <span className="random-Box-span1">
                    {bCashBalance} &nbsp;BCB
                  </span>
                </div>
                <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                  <span className="random-Box-span1">{t("stake6")}:</span>
                  <span className="random-Box-span1">
                    {klayReward} &nbsp;KLAY
                  </span>
                </div>
                <div className="col-md-12 d-flex flex-row justify-content-between  mt-3">
                  <span className="random-Box-span1">{t("stake20")}:</span>
                  <span className="random-Box-span1">{bcbBonus} &nbsp;BCB</span>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-4 mb-4">
              {myCommonNftIds &&
                myCommonNftIds?.map((post) => {
                  console.log("post", post[0]?.name);
                  return (
                    <div className="col-md-6 mt-md-4 mt-3">
                      <h4 className="stake-h4 text-center">
                        {t("stake7")}# {post[0]?.edition}
                      </h4>
                      <div className="row d-flex justify-content-center mt-2">
                        <div className="col-md-6 stake-boxs ">
                          <div className="row">
                            <div className=" col-12 d-flex justify-content-center align-items-center mt-1">
                              <img
                                src={post[0]?.image}
                                className="stake-image mt-1 img-fluid"
                              />
                            </div>
                          </div>

                          <div className="row d-flex justify-content-center flex-row  mt-1">
                            <div className="col-md-6  col-12 mt-2">
                              <div className="d-grid gap-2">
                                <button
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                  onClick={() => stakeNft(post[0]?.edition)}
                                >
                                  {t("stake11")}
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 col-12 mt-2">
                              <div className="d-grid gap-2">
                                <a
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                  href="/breed"
                                >
                                  {t("Tokenomics61")}
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-2 mb-2">
                            <div className="col-md-12 col-12">
                              <div className="d-grid gap-2">
                                <button
                                  className="btn btn-stake122"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake9")}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {myGenisisNftIds &&
                myGenisisNftIds?.map((post) => {
                  return (
                    <div className="col-md-6  mt-md-4 mt-3">
                      <h4 className="stake-h4 text-center">
                        {t("stake10")} # {post[0].edition}
                      </h4>
                      <div className="row d-flex justify-content-center mt-2">
                        <div className="col-md-6 stake-boxs">
                          <div className="d-flex justify-content-center align-items-center mt-2">
                            <img
                              src={post[0].image}
                              className="stake-image mt-1 img-fluid"
                            />
                          </div>
                          <div className="row d-flex justify-content-center mt-2 mb-2">
                            <div className="col-md-12 col-12">
                              <div className="d-grid gap-2">
                                <button
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "11px",
                                  }}
                                  onClick={() => stakeNft(post[0]?.edition)}
                                >
                                  {t("stake11")}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-2 mb-2 mt-2">
                            <div className="col-md-12 col-12">
                              <div className="d-grid gap-2">
                                <button
                                  className="btn btn-stake122"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake9")}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 d-flex justify-content-center pt-md-5 pt-2 mb-2">
              <h3 className="randombox-he">{t("stake12")}</h3>
            </div>
            <div className="row d-flex justify-content-center justify-content-md-start">
              <div className="col-md-8 d-flex flex-row mt-2 mb-2">
                <div className="col-md-3 me-3">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-stake"
                      size="lg"
                      onClick={() => unStakeAll()}
                    >
                      {t("stake13")}
                    </button>
                  </div>
                </div>
                <div className="col-md-3 me-3">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-stake"
                      size="lg"
                      onClick={() => unStakeAllPublic()}
                    >
                      {t("stake21")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-md-2 mt-1 mb-5">
              {userCommonIds &&
                userCommonIds.map((post) => {
                  return (
                    <div className="col-md-6 mt-md-1 mt-3">
                      <h4 className="stake-h4 text-center">
                        {t("stake14")} # {post.d[0]?.edition}
                      </h4>
                      <div className="row d-flex justify-content-center mt-4">
                        <div className="col-md-6 stake-boxs">
                          <div className="d-flex justify-content-center align-items-center mt-2">
                            <img
                              src={post.d[0]?.image}
                              className="stake-image mt-1 img-fluid"
                            />
                          </div>

                          <div className="row d-flex justify-content-center">
                            <div className="col-lg-12 col-12 d-flex justify-content-between mt-2">
                              <span className="stake-span21">
                                {t("stake15")}:
                              </span>
                              <span className="stake-span21">
                                {post.rewardForSingleId &&
                                  post.rewardForSingleId
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                &nbsp;BCB
                              </span>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center">
                            <div className=" col-lg-12 col-12 d-flex justify-content-between mt-3">
                              <span className="stake-span21">
                                {t("stake16")}:
                              </span>
                              <span className="stake-span21">
                                {post.finalTime}
                              </span>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-3">
                            <div className="col-xl-5 col-12 mt-2">
                              <div className="d-grid gap-2">
                                <button
                                  onClick={() =>
                                    ustakeSingleId(post.d[0]?.edition)
                                  }
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake17")}
                                </button>
                              </div>
                            </div>
                            <div className="col-xl-7 col-12 mt-2 mb-2">
                              <div className="d-grid gap-2">
                                <button
                                  onClick={() =>
                                    claimSingleIdReward(post.d[0]?.edition)
                                  }
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake18")}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {userGenisisIds &&
                userGenisisIds?.map((post) => {
                  return (
                    <div className="col-md-6  mt-md-1 mt-3">
                      <h4 className="stake-h4 text-center">
                        {t("stake10")} # {post.d[0]?.edition}
                      </h4>
                      <div className="row d-flex justify-content-center mt-4">
                        <div className="col-md-6 stake-boxs">
                          <div className="d-flex justify-content-center align-items-center mt-2">
                            <img
                              src={post.d[0]?.image}
                              className="stake-image mt-1 img-fluid"
                            />
                          </div>

                          <div className="row d-flex justify-content-center">
                            <div className="col-lg-12 col-12 d-flex justify-content-between mt-2 text-white">
                              <span className="stake-span21">
                                {t("stake15")}:
                              </span>
                              {post.rewardForSingleId &&
                                post.rewardForSingleId
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              &nbsp;BCB
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center">
                            <div className="col-lg-12 col-12 d-flex justify-content-between mt-3">
                              <span className="stake-span21">
                                {t("stake16")}:
                              </span>
                              <span className="stake-span21">
                                {post.finalTime}
                              </span>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-center mt-3">
                            <div className="col-xl-5 col-12 mt-2">
                              <div className="d-grid gap-2">
                                <button
                                  onClick={() =>
                                    ustakeSingleId(post.d[0]?.edition)
                                  }
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake17")}
                                </button>
                              </div>
                            </div>
                            <div className="col-xl-7  col-12 mt-2 mb-2">
                              <div className="d-grid gap-2">
                                <button
                                  onClick={() =>
                                    claimSingleIdReward(post.d[0]?.edition)
                                  }
                                  className="btn btn-dutch"
                                  size="lg"
                                  style={{
                                    fontSize: "15px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {t("stake18")}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-4 mb-5"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Stake;
