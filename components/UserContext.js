import { createContext,React } from "react";

export const userContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const data = {
        navbar: {
            logoName: "Avantgarde Dev Club",
            navButton: "Apply for access",
        },
        main: {
            heading: "A cult of misfits escaping the matrix together",
            paragraph1:
                "Avantgarde dev club is a exclusive elite community of 1% student builders across the county who dare to take the red pill, be stoic and different than their peers.",
            paragraph2:
                " We thrive to build strong men, train and onboard the next generation of smartest builders onto marque web2/web3 jobs/ entrepreneurship. ",
        },
        icons: {
            title1: "Code",
            title2: "Train",
            title3: "Learn",
            title4: "Repeat",
            application: "Applications close by ",
        },
        section2: {
            header: "Learn by Doing not Watching ",
            para: "We pair fun, educational curriculum with real-world practical experience. It's collaborative, remote, & happens under the guidance of expert mentors.",
            title1: " Gain Real-World Experience",
            title2: "Learn while you earn, guaranteed job offers",
            title3: "Join a community of high performing stoics",
            content1:
                "Contribute to projects that people depend on, not a side project that never sees the light of day.  You'll collaborate on projects that are sourced directly from our corporate partners. Whether you're contributing to a major Open Source technology or a new greenfield project, you'll be solving a real-world need with technologies that employers care about.",
            content2:
                "Invest in yourself & your future career today. Since the amount of members we take in the club is 20 per cohort, we can guarantee high paying dev jobs in Bangalore or web3 jobs on preference. What if you can also get a 5-6 figure crypto investment portfolio when you graduate ?   Autonomously managed by treasury experts in the dev club while you could learn,code, get a job and graduate. Learn beyond coding into finance, investing, sales & marketing. This makes you different than most of your peers.",
            content3:
                "We strongly believe in the average theory - “ You are the average of the 5 people you spend most of your time with“. This is a highly curated club of the best builders you can find. We thrive by the science of small change with other community members holding you accountable for consistency. This simple mechanism gets you in better shape, helps you learn and execute faster cause everyone around you are high performers.",
        },
        founders: {
            heading:
                "Created by world class web3 & opensource  builders and entrepreneurs",
            name1: "Mike",
            name2: "Jake",
            name3: "Trevor",
            role1: "Founder & CEO (YC S20)",
            role2: "Co-founder & CTO",
            role3: "Co-founder & CTO",
            works1: "Ex- Google, Meta",
            works2: "Ex-Snapchat",
            works3: "Ex-Amazon,Instagram",
        },
    };
    return <userContext.Provider value={data}>{children}</userContext.Provider>;
};
