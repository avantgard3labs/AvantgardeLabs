import { useContext } from "react";
import { userContext, UserContextProvider } from "@/components/dev/UserContext";

import Image from "next/image";
import beard from "../../../public/beard.jpg";
// import image7 from "../public/image7.png";
// import image8 from "../public/image8.png";
// import image9 from "../public/image9.png";
// import wave from "../public/wave.png";
// import tetranode from "../public/tetranode.jpg";
// import satoshi from "../public/satoshi.png";

function Founders() {
    const { founders } = useContext(userContext);
    const {
        heading,
        name1,
        name2,
        name3,
        role1,
        role2,
        role3,
        works1,
        works2,
        works3,
    } = founders;
    return (
        <div className="bg-[black]">
            <div className="foundersContainer w-[1400px] m-auto sm:p-5   ">
                <div className="text-center"></div>

                <div className="flex justify-center m-auto pt-10">
                    <a href="mailto:admin@avantgardelabs.io">
                        {" "}
                        <button className="touch mb-10">
                            Get in touch with us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Founders;
