import React, { useContext } from "react";
import { userContext } from "../components/UserContext";
function Values() {
    const { values } = useContext(userContext);
    const {
        header,
        mainHeading,
        para,
        heading1,
        heading2,
        heading3,
        heading4,
        content1,
        content2,
        content3,
        content4,
        rightHeading,
        rightContent,
        rightContent1,
        rightContent2,
        rightTitle,
    } = values;
    return (
        <div className=" w-[1400px] m-auto sm:p-5 mb-10 valueContainer ">
            <div className="valueencompass  ">
                <div className="valueleft ">
                    <h1 className="mb-5">{mainHeading}</h1>
                    <h4>{heading1}</h4>
                    <h6 className="mb-5">{content1}</h6>

                    <h4>{heading2}</h4>
                    <h6 className="mb-5">{content2}</h6>

                    <h4>{heading3}</h4>
                    <h6 className="mb-5">{content3}</h6>

                    <h4>{heading4}</h4>
                    <h6 className="mb-5">{content4}</h6>
                </div>

                <div className="valueright ">
                    <h1 className="mb-5">{rightHeading}</h1>
                    <h6 className="mb-5">{rightContent}</h6>
                    <h4>{rightTitle}</h4>
                    <h6 className="mb-2">{rightContent1}</h6>
                    <h6 className="mb-10">{rightContent2}</h6>
                    <a href="https://drive.google.com/file/d/1jVdlpi5JbVj1UkzILpiXs1TXz2bGxkdy/view">
                        <button className="touch   flex  m-auto text-center">
                            Take a look at what's going on
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Values;
