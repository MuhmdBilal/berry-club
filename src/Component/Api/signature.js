import { ethers } from "ethers";
import { loadWeb3 } from "../Api/api";
import Caver from "caver-js";
const caver = new Caver("https://api.baobab.klaytn.net:8651");
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
export const getSignatureTest = async (contract, user) => {
  try {
    let sigdataArr = [];
    console.log("in signature", contract, user);
    // user = await loadWeb3();
    //   console.log("Acc in signature", user);
    //   console.log("Acc in signature", privateKey);

    // contract = "0x642D5D54f3920A5165C8298D98fC0b237F1Ca9C4"; //BerryClubContract
    // user = "0xAD4f1d02ad3e819AD86D3eD27dfd13F31A19a09a"; //user_address

    // const RPC = "https://api.baobab.klaytn.net:8651";
    // const provider = new ethers.providers.JsonRpcProvider(RPC);
    // const blockNumber = await provider.getBlockNumber();
    let blockNumber = await caver.rpc.klay.getBlockNumber();
    // blockNumber = blockNumber.replace("0x", "");
    // console.log("in blockNumber", blockNumber);
    blockNumber = parseInt(blockNumber);
    // console.log("in blockNumber", parseInt(blockNumber));
    let nonce = (await caver.rpc.klay.getBlock(blockNumber)).timestamp;
    // nonce = nonce.substring("0x".length);
    // nonce = parseInt(nonce);
    nonce = parseInt(nonce);
    // console.log("nonce in singature", nonce);
    sigdataArr.push(nonce);

    let hash = ethers.utils.solidityKeccak256(
      ["string", "string", "uint256"],
      [contract.toLowerCase(), user.toLowerCase(), nonce]
    );
    // console.log("hash", hash);
    const signingKey = new ethers.utils.SigningKey(privateKey);
    let deployTx = signingKey.signDigest(hash);

    const signature = ethers.utils.joinSignature(deployTx);
    console.log("Signature:", signature);
    sigdataArr.push(signature);
    // console.log("sigdataArr", sigdataArr);
    return sigdataArr;
  } catch (error) {
    console.error("error while genrate signature", error);
  }
};
