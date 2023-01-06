import { useContext } from "react";
import { userContext } from "../components/UserContext";

import Image from "next/image";
import beard from "../public/beard.jpg";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import image9 from "../public/image9.png";

function Founders() {
    const { founders } = useContext(userContext);
    const { heading,name1,name2,name3,role1,role2,role3,works1,works2,works3 } = founders;
    return (
        <div className="foundersContainer w-[1400px] m-auto sm:p-5 mt-[100px] mt-[-10px]  ">
            <div className="text-center">
                <h1 className="mb-6">{heading}</h1>
            </div>
            <div className="founderAllCard flex justify-around">
                <div className="founderCard mt-10 text-center">
                    <Image src={image7}></Image>
                    <h1 className="mt-5">{name1}</h1>
                    <h6 className="mt-2">{role1}</h6>
                    <h6 className="mt-2">{works1}</h6>
                </div>

                <div className="founderCard mt-10 text-center">
                    <Image src={image8}></Image>
                    <h1 className="mt-5">{name2}</h1>
                    <h6 className="mt-2">{role2}</h6>
                    <h6 className="mt-2">{works2}</h6>
                </div>

                <div className="founderCard mt-10 text-center">
                    <Image src={image9}></Image>
                    <h1 className="mt-5">{name3}</h1>
                    <h6 className="mt-2">{role3}</h6>
                    <h6 className="mt-2">{works3}</h6>
                </div>
            </div>
        </div>
    );
}

export default Founders;
