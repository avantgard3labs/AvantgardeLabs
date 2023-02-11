import Head from "next/head";

import {userContext, UserContextProvider } from "@/components/dev/UserContext";

import Founders from "@/components/dev/Founders";
import Navbar from "@/components/dev/Navbar";
import Icons from "@/components/dev/Icons";

import Main from "@/components/dev/Main";

import Section2 from "@/components/dev/Section2";

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
