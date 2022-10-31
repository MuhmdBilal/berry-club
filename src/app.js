import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Minting from "./pages/Minting";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "./pages/Gallery";
import PublicSale from "./pages/PublicSale";
import NoPage from "./pages/NoPage";
import CreatingModal from "./Component/modal/creatingModal";
import AirDrop from "./Component/AirDrop/AirDrop";
import RandomBox from "./Component/Random-Box/RandomBox";
import Footer from "./Component/Footer";
import Stake from "./Component/Stake-Breed/Stake";
import Tokenomics from "./Component/Tokenomics/Tokenomics";
import PublicMint from "./pages/PublicMint";
import Breed from "./Component/Breed/Breed";
export default function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
       {/* <CreatingModal /> */}
      <Header />
      <Routes>
        {/* <Route  element={} /> */}
        <Route path="/" index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/minting" element={<Minting />} />
        <Route path="/dutch-sale" element={<PublicSale />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/airdrop" element={<AirDrop />} />
        <Route path="/RandomBox" element={<RandomBox />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/public-mint" element={<PublicMint />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/breed" element={<Breed />} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
