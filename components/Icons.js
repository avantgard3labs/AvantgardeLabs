import { useContext } from "react";
import { userContext } from "../components/UserContext";
import { useState } from "react";
import { useEffect } from "react";

import Image from "next/image";
import beard from "../public/beard.jpg";

function Icons() {
    const { icons } = useContext(userContext);
    const { title1, title2, title3, title4, application } = icons;

    const [expiryTime, setExpiryTime] = useState("07 jan 2023 12:18:20");
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

                    <i class="fa-solid fa-code"></i>
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title2}</h4>
                    <i class="fa-solid fa-dumbbell "></i>
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title3}</h4>
                    <i class="fa-solid fa-brain "></i>
                </div>

                <div className="section  justify-center flex-col align-self p-5">
                    <h4 className="text-2xl">{title4}</h4>
                    <i class="fa-solid fa-repeat"></i>
                </div>
            </div>
            <div className="timer m-auto wx-[1400px] flex justify-center mt-[100px] text-2xl align-middle   ">
                <div className="applications ">
                    {" "}
                    <h3 className="mr-[60px] mt-4 ">{application} </h3>
                </div>

                <div className="flex flex-col mr-5 text-center dates ">
                    <span>Days</span>
                    <h3>{countdownTime.countdownDays }:</h3>
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
