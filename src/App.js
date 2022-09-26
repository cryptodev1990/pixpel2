import { Routes, Route, Link } from "react-router-dom";
import './scss/index.scss';

import {
  AddressManagement,
  Home,
  NFTMarket,
  Stacking,
  Exchange,
  HelpCenter,
  Inventory,
  Notification,
  Profile,
  SwapMaster,
  UserHome,
  Wallet,
  Withdraw,
  GameMarket,
  Collection,
  CreateNFT,
  MyCollection,
  MysteryBox,
  MintFinish,
  Developer,
  BuyCrypto,
  GameLanding,
  StakingPortfolio,
  TokenRoom
} from "./pages/index"

import { Header, Footer } from "./components";

function Test() {
  return (
    <>
      <main>
        <h2>404</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-market" element={<NFTMarket />} />
        <Route path="/game-market" element={<GameMarket />} />
        <Route path="/staking" element={<Stacking />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swap-master" element={<SwapMaster />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/address-management" element={<AddressManagement />} />
        <Route path="/account" element={<UserHome />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/mycollection" element={<MyCollection />} />
        <Route path="/create-nft" element={<CreateNFT />} />
        <Route path="/finishmint" element={<MintFinish />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/mysterybox" element={<MysteryBox />} />
        <Route path="/buycrypto" element={<BuyCrypto />} />
        <Route path="/gamelanding" element={<GameLanding />} />
        <Route path="/stakingportfolio" element={<StakingPortfolio />} />
        <Route path="/tokenroom" element={<TokenRoom />} />
        <Route path="*" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
