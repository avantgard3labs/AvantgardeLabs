import { useContext } from "react";
import { userContext } from "../components/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";




import Image from "next/image";
import beard from "../public/beard.jpg";
import dumbell from "../public/dumbbell.svg";

function Icons() {
    const { icons } = useContext(userContext);
    const { title1, title2, title3, title4, application } = icons;

    const [expiryTime, setExpiryTime] = useState("01 feb 2023 12:00:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownlMinutes: "",
        countdownSeconds: "",
    });
             const countdownDateTime = new Date(expiryTime).getTime();
             const currentTime = new Date().getTime();
             const remainingDayTime = countdownDateTime - currentTime;

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(
                remainingDayTime / (1000 * 60 * 60 * 24)
            );
            const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
            );

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
            };
            const runningCountdownOver = {
                countdownDays: 0,
                countdownHours: 0,
                countdownMinutes: 0,
                countdownSeconds: 0,
            };

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setCountdownTime(runningCountdownOver);
                setExpiryTime(false);
            }
        }, 1000);
    };

    useEffect(() => {
        countdownTimer();
    });

    return (
        <div className="iconsContainer w-[1400px]  m-auto p-5 mt-[120px]">
            <div className=" iconsControl flex justify-around">
                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title1}</h4>

                    <HiCode className="dumbbell" />
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title2}</h4>

                    <BiDumbbell className="dumbbell" />
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title3}</h4>
                    <FaBrain className="dumbbell" />
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title4}</h4>
                    <FiRepeat className="dumbbell" />
                </div>
            </div>
            <div className="timer m-auto wx-[1400px] flex justify-center mt-[100px] text-2xl align-middle   ">
                <div className="applications ">
                    {" "}
                    <h3 className="mr-[60px] mt-4 ">{application} </h3>
                </div>

                <div className="flex flex-col mr-5 text-center dates ">
                    <span>Days</span>
                    <h3>{countdownTime.countdownDays}:</h3>
                </div>

                <div className="flex flex-col mr-5 text-center dates">
                    <span>Hrs</span>
                    <h3>{countdownTime.countdownHours}: </h3>
                </div>

                <div className="flex flex-col mr-5 text-center dates">
                    <span>Min</span>
                    <h3>{countdownTime.countdownMinutes}:</h3>
                </div>

                <div className="flex flex-col mr-5 text-center dates">
                    <span>Sec</span>
                    <h3>{countdownTime.countdownSeconds} </h3>
                </div>
            </div>
        </div>
    );
}

export default Icons;
