import { truncateAddress } from "@/utils/format";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Link } from "react-router-dom";
export default function Header() {
  const { setShowAuthFlow, primaryWallet, handleLogOut } = useDynamicContext();

  return (
    <div className="fixed z-20 top-0 left-0 w-full">
      <div className="w-[calc(100%-80px)] max-w-[1600px] m-auto text-white  flex justify-between items-center  rounded-full px-10 py-4  bg-linear-to-r from-[#0C0C0C] to-[#171717]">
        <Link to={"/"}>
          <img src="/img/header-logo.png" alt="" />
        </Link>
        <div className="flex items-center gap-x-10">
          <Link to={"/"} className="hover:opacity-70 transition-all">
            Home
          </Link>
          <Link to={"/about"} className="hover:opacity-70 transition-all">
            About
          </Link>
          <Link
            to={"https://x.com/Theimitationai"}
            target="_blank"
            className="hover:opacity-70 transition-all"
          >
            X
          </Link>
          <Link
            to={"https://github.com/Turing-LAib"}
            target="_blank"
            className="hover:opacity-70 transition-all"
          >
            GitHub
          </Link>
          <div className="border-[1px] border-[#ACACAC] bg-black rounded-full px-5 py-2 cursor-pointer hover:opacity-70 transition-all">
            {primaryWallet?.isConnected ? (
              <div className="flex items-center gap-x-2" onClick={handleLogOut}>
                <img src="/svg/sol.svg" alt="" />
                {truncateAddress(primaryWallet?.address, 4, 4)}
              </div>
            ) : (
              <span onClick={() => setShowAuthFlow(true)}>CONNECT WALLET</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
