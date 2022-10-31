// import Web3 from "web3";
// let isItConnected = false;
// const networks = {
//   Mumbai: {
//     chainId: `0x${Number(43113).toString(16)}`,
//     chainName: "Matic",
//     nativeCurrency: {
//       name: "Matic",
//       //   symbol: "MATIC",
//       decimals: 18,
//     },
//     rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
//     blockExplorerUrls: ["https://mumbai.polygonscan.com"],
//   },
// };
// const changeNetwork = async ({ networkName }) => {
//   try {
//     if (!window.ethereum) throw new Error("No crypto wallet found");
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           ...networks[networkName],
//         },
//       ],
//     });
//   } catch (err) {
//     console.log("not found");
//   }
// };
// const handleNetworkSwitch = async (networkName) => {
//   await changeNetwork({ networkName });
// };
// let accounts;
// const getAccounts = async () => {
//   const web3 = window.web3;
//   try {
//     accounts = await web3.eth.getAccounts();
//     return accounts;
//   } catch (error) {
//     console.log("Error while fetching acounts: ", error);
//     return null;
//   }
// };
// const disconnectWallet = async () => {
//   await window.ethereum.request({
//     method: "eth_requestAccounts",
//     params: [{ eth_accounts: {} }],
//   });
//   console.log("disconnect");
// };
// export const loadWeb3 = async () => {
//   try {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//       await window.web3.eth.getChainId((err, netId) => {
//         console.log("networkId Polygon==>", netId);
//         switch (netId.toString()) {
//           case "43113":
//             isItConnected = true;
//             break;
//           default:
//             // handleNetworkSwitch("Mumbai");
//             isItConnected = false;
//         }
//       });
//       if (isItConnected == true) {
//         let accounts = await getAccounts();
//         return accounts[0];
//       } else {
//         let res = "Wrong Network";
//         return res;
//       }
//     } else {
//       let res = "No Wallet";
//       return res;
//     }
//   } catch (error) {
//     let res = "No Wallet";
//     return res;
//   }
// };

import Caver from "caver-js";
let isItConnected = false;
const caver = new Caver(window.klaytn);
let accounts;
const getAccounts = async () => {
  const { klaytn } = window;
  try {
    // accounts = await klaytn.selectedAddress;
    accounts = await caver.klay.getAccounts();
    return accounts[0];
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};

export const loadWeb3 = async () => {
  try {
    const { klaytn } = window;

    if (klaytn) {
      await klaytn.enable();
      let netId = await klaytn.networkVersion;
      console.log("net id", netId);
      switch (netId.toString()) {
        case "1001": //mainnet 8217 ,testnet 1001
          isItConnected = true;
          break;
        default:
          isItConnected = false;
      }
      if (isItConnected == true) {
        let accounts = await getAccounts();
        return accounts;
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};

// import Web3 from "web3";
// let isItConnected = false;

// let accounts;
// const getAccounts = async () => {
//   const web3 = window.web3;
//   try {
//     accounts = await web3.eth.getAccounts();
//     return accounts;
//   } catch (error) {
//     console.log("Error while fetching acounts: ", error);
//     return null;
//   }
// };
// const disconnectWallet = async () => {
//   await window.ethereum.request({
//     method: "eth_requestAccounts",
//     params: [{ eth_accounts: {} }],
//   });
//   console.log("disconnect");
// };
// export const loadWeb3 = async () => {
//   try {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//       await window.web3.eth.getChainId((err, netId) => {
//         console.log("networkId Polygon==>", netId);
//         switch (netId.toString()) {
//           case "8217":
//             isItConnected = true;
//             break;
//           default:
//             // handleNetworkSwitch("Mumbai");
//             isItConnected = false;
//         }
//       });
//       if (isItConnected == true) {
//         let accounts = await getAccounts();
//         return accounts[0];
//       } else {
//         let res = "Wrong Network";
//         return res;
//       }
//     } else {
//       let res = "No Wallet";
//       return res;
//     }
//   } catch (error) {
//     let res = "No Wallet";
//     return res;
//   }
// };

// import Caver from "caver-js";
// let isItConnected = false;
// const caver = new Caver(window.klaytn);
// let accounts;
// const getAccounts = async () => {
//   const { klaytn } = window;
//   try {
//     // accounts = await klaytn.selectedAddress;
//     accounts = await caver.klay.getAccounts();
//     return accounts[0];
//   } catch (error) {
//     console.log("Error while fetching acounts: ", error);
//     return null;
//   }
// };

// export const loadWeb3 = async () => {
//   console.log('into loadweb3');
//   try {
//     const { klaytn } = window;
//     console.log("klayton",klaytn);
//     if (klaytn) {
//       await klaytn.enable();
//       let netId = await klaytn.networkVersion;
//       console.log("net i",netId);
//       switch (netId.toString()) {
//         case "1001": //mainnet 8217 ,testnet 1001
//           isItConnected = true;
//           break;
//         default:
//           isItConnected = false;
//       }
//       if (isItConnected == true) {
//         let accounts = await getAccounts();
//         return accounts;
//       } else {
//         let res = "Wrong Network";
//         return res;
//       }
//     } else {
//       let res = "No Wallet";
//       return res;
//     }
//   } catch (error) {
//     let res = "No Wallet";
//     return res;
//   }
// };
