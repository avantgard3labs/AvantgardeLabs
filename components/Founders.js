import { useContext } from "react";
import { userContext } from "../components/UserContext";

import Image from "next/image";
import beard from "../public/beard.jpg";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import image9 from "../public/image9.png";
import wave from "../public/wave.png";
import tetranode from "../public/tetranode.jpg";
import satoshi from "../public/satoshi.png";

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
        <div className="foundersContainer w-[1400px] m-auto sm:p-5   ">
            <div className="text-center">
                <h1 className="mb-6">{heading}</h1>
            </div>
            <div className="founderAllCard flex justify-around">
                <div className="founderCard mt-10 text-center ">
                    <a href="https://twitter.com/0xwave?s=21&t=kbTsrN-Bc85BlcLSPOHorw">
                        <Image
                            className="w-[300px] hover:scale-105 ease-in duration-300  rounded-2xl "
                            src={wave}
                        ></Image>
                        <h1 className="mt-5">{name1}</h1>
                        <h6 className="mt-2">{role1}</h6>
                        {/* <h6 className="mt-2">{works1}</h6> */}
                    </a>
                </div>

                <div className="founderCard mt-10 text-center">
                    <a href="https://twitter.com/tetranode?s=21&t=kbTsrN-Bc85BlcLSPOHorw">
                        <Image
                            className="w-[300px] hover:scale-105 ease-in duration-300  rounded-2xl "
                            src={tetranode}
                        ></Image>
                        <h1 className="mt-5">{name2}</h1>
                        <h6 className="mt-2">{role2}</h6>
                        {/* <h6 className="mt-2">{works2}</h6> */}
                    </a>
                </div>

                <div className="founderCard mt-10 text-center">
                    <a href="https://twitter.com/devsatoshi?s=21&t=kbTsrN-Bc85BlcLSPOHorw">
                        <Image
                            className="w-[300px] hover:scale-105 ease-in duration-300  rounded-2xl"
                            src={satoshi}
                        ></Image>
                        <h1 className="mt-5">{name3}</h1>
                        <h6 className="mt-2">{role3}</h6>
                        {/* <h6 className="mt-2">{works3}</h6> */}
                    </a>
                </div>
            </div>
            <div className="flex justify-center m-auto mt-10">
                <a href="mailto:admin@avantgardelabs.io">
                    {" "}
                    <button className="touch mb-10">
                        Get in touch with us
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Founders;
