import { useContext } from "react";
import { userContext } from "../components/UserContext";


import Image from "next/image";
import logos from "../public/Group.svg";

function Navbar() {
    const { navbar } = useContext(userContext);
    const { logoName, navButton, logo } = navbar;
    return (
        <div className="navbarContainer w-full align-middle relative  ">
            <div className="navbar flex   w-full justify-between align-middle p-10    ">
                <div className="leftnav ">
                    <Image
                        className="lg:ml-[60px] "
                        src={logos}
                        width="50"
                        height="60"
                    />
                    <h3 className="logoName lg:ml-5 mb-5">{logoName}</h3>
                </div>
                <div className="rightNav flex align-middle mb-5  ">
                    <button className=" navButton mx-[60px] border  px-9 ">
                        {navButton}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
