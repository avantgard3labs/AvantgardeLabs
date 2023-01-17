import { useContext } from "react";
import { userContext } from "../components/UserContext";

import Image from "next/image";
import beard from "../public/beard.jpg";
import image11 from "../public/image11.png";
import image12 from "../public/image12.png";
import img13 from "../public/img13.png";
import img14 from "../public/img14.png";

function Section2() {
    const { section2 } = useContext(userContext);
    const { header, para, title1,title2,title3,title4,content1,content2,content3 ,content4} = section2;
    return (
        <div className="section2Container w-[1400px] m-auto sm:p-5 mt-[100px]   ">
            <div className="sec2encompass">
                <div className="sec2HeaderAndPara  w-full text-center p-5 ">
                    <h1 className="sec2Header mb-[20px] ">{header}</h1>
                    <h6 className="secondContent w-[900px]  justify-center m-auto mb-[60px] text-justify">
                        {para}
                    </h6>
                </div>

                <div className="sec2AllComponent flex-col  w-full    ">
                    {/* ------------------------------------------------ */}
                    <div className="sec2Component   mb-[80px]">
                        <div className="">
                            {" "}
                            <Image
                                className="firstImage w-[282px] h-[282px] "
                                src={img13}
                            />
                        </div>

                        <div className=" w-[600px]  mt-[10px] secondContent  ">
                            {" "}
                            <h1 className="mb-[20px]">{title1}</h1>
                            <h6 className="text-justify">{content1}</h6>
                        </div>
                    </div>
                    {/* ------------------------------------------------ */}

                    <div className="sec2Component   mb-[80px]">
                        <div className="secondName secondContent  w-[600px]  mt-[10px]  ">
                            {" "}
                            <h1 className="mb-[20px]">{title2}</h1>
                            <h6 className="text-justify">{content2}</h6>
                        </div>
                        <div className="secondImage">
                            {" "}
                            <Image
                                className="w-[282px] h-[282px]"
                                src={image12}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------ */}

                    <div className="sec2Component   mb-[80px]">
                        <div className="firstImage">
                            {" "}
                            <Image
                                className="w-[282px] h-[282px]"
                                src={image11}
                            />
                        </div>

                        <div className=" secondContent w-[600px]  mt-[10px]  ">
                            {" "}
                            <h1 className="mb-[20px]">{title3}</h1>
                            <h6 className="text-justify">{content3}</h6>
                        </div>
                    </div>
                    {/* ------------------------------------------------ */}

                    <div className="sec2Component   mb-[80px]">
                        <div className="secondName secondContent  w-[600px]  mt-[10px]  ">
                            {" "}
                            <h1 className="mb-[20px]">{title4}</h1>
                            <h6 className="text-justify">
                                Learn from the real experts in both web3 and
                                web2 who have built a ton of opensource projects
                                and crypto products like Gogocoin, 0xPhantomDao,
                                Swix Dao, Bankless Dao, Mushrohms NFT and{" "}
                                <a
                                    className="text-sky-500"
                                    href="https://drive.google.com/file/d/1jVdlpi5JbVj1UkzILpiXs1TXz2bGxkdy/view"
                                >
                                
                                    more
                                </a>.
                                We take you from react, redux, nextJS, ERC720
                                contract, ERC721 all the way to advanced gas
                                optimisations and tricks/tips to create
                                efficient code. Mastering from Web2 to Web3.
                            </h6>
                        </div>
                        <div className="secondImage">
                            {" "}
                            <Image
                                className="w-[282px] h-[282px]"
                                src={img14}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------ */}
                </div>
            </div>
        </div>
    );
}

export default Section2;
