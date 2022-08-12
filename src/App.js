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
    Developer
} from "./pages/index"

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nft-market" element={<NFTMarket />} />
                <Route path="/game-market" element={<GameMarket />} />
                <Route path="/stacking" element={<Stacking />} />
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
                <Route path="/create-nft" element={<CreateNFT />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="*" element={<Test />} />
            </Routes>
        </div>
    );
}

export default App;
