import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import group from "../public/Group.svg";
import Router from "next/router";
import { userContext, UserContextProvider } from "../components/UserContext";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Icons from "../components/Icons";
import Section2 from "../components/Section2";
import Founders from "../components/Founders";

export default function Home() {
    return (
        <>
            <Head>
                <title>Avantgarde Labs</title>

                <meta
                    name="description"
                    content="We are a group of Stoics who want to cultivate good habits in other people"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link rel="icon" href="../Group.svg" />

                <script
                    src="https://kit.fontawesome.com/1beabbb46f.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <div>
                <UserContextProvider>
                    <Navbar />

                    <Main />
                    <Icons />
                    <Section2 />
                    <Founders />
                </UserContextProvider>
            </div>
        </>
    );
}
