import { useContext } from "react";
import { userContext, UserContextProvider } from "@/components/dev/UserContext";

import { BiDumbbell } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";


import Image from "next/image";
import beard from "../../../public/beard.jpg";

function Main() {
    const { main } = useContext(userContext);
    const { heading, paragraph1, paragraph2,paragraph3 } = main;
    return (
        <div className="bg-[black]">
            <div className="mainContainer w-[1400px] m-auto sm:p-5  ">
                <div className="mainBoth flex justify-between align-middle   p-5">
                    <div className="mainLeft ">
                        <h1 className="heading text-4xl mt-[70px]">
                            {heading}
                        </h1>
                        <h5 className="para w-[500px]  my-[20px] text-justify">
                            {paragraph1}
                        </h5>
                        <h5 className=" para para2 w-[500px] text-justify mb-5 ">
                            {paragraph2}
                        </h5>
                        <h5 className=" para para2 w-[500px] text-justify ">
                            {paragraph3}
                        </h5>
                    </div>
                    <div className="mainRight   ">
                        <div className="bigIcon ">
                            <Image src={beard} />
                        </div>
                        <div className="smallIcons relative ">
                            <HiCode />
                            <BiDumbbell className="secondicon mt-8" />
                            <FaBrain />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
