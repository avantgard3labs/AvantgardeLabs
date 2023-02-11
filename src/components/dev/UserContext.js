import { createContext, React } from "react";

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
                "Fully remote 12 week internship web2/ web3 Mastery program.",
            paragraph3:
                "We thrive to build strong men, train and onboard the next generation of smartest builders onto marquee web2/web3 jobs/ entrepreneurship.",
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
            title4: "Learn from the best in the space",
            content1:
                "Contribute to projects that people depend on, not a side project that never sees the light of day.  You'll collaborate on projects that are sourced directly from our corporate partners. Whether you're contributing to a major Open Source technology or a new greenfield project, you'll be solving a real-world need with technologies that employers care about.",
            content2:
                "Invest in yourself & your future career today. Since the amount of members we take in the club is 20 per cohort, we can guarantee high paying dev jobs in Bangalore or web3 jobs on preference. What if you can also get a 5-6 figure crypto investment portfolio when you graduate ?   Autonomously managed by treasury experts in the dev club while you could learn,code, get a job and graduate. Learn beyond coding into finance, investing, sales & marketing. This makes you different than most of your peers.",
            content3:
                "We strongly believe in the average theory - “ You are the average of the 5 people you spend most of your time with“. This is a highly curated club of the best builders you can find. We thrive by the science of small change with other community members holding you accountable for consistency. This simple mechanism gets you in better shape, helps you learn and execute faster cause everyone around you are high performers.",
            content4:
                "Learn from the real experts in both web3 and web2 who have built a ton of opensource projects and crypto products like Gogocoin, 0xPhantomDao,  Swix Dao, Bankless Dao, Mushrohms NFT and more. We take you from react, redux, nextJS, ERC720 contract, ERC721 all the way to advanced gas optimisations and tricks/tips to create efficient code. Mastering from Web2 to Web3.",
        },
        founders: {
            heading:
                "Created by world class web3 & opensource  builders and entrepreneurs",
            name1: "Wave",
            name2: "Tetranode",
            name3: "Satoshi",
            role1: "Co-Founder",
            role2: "Founder",
            role3: "Co-Founder",
            works1: "Ex- Google, Meta",
            works2: "Ex-Snapchat",
            works3: "Ex-Amazon,Instagram",
        },
        values: {
            mainHeading: "Values",
            heading1: "1. Transparency.",
            heading2: "2 Diversity and Inclusion.",
            heading3: "3 Responsibility.",
            heading4: "4. Kindness and Empathy.",
            content1:
                "Open source everything, conversations in public, document and share journey.",
            content2:
                "Seek to foster as diverse a membership as possible and support everyone to contribute.",
            content3:
                "As self-governed community we rely on members to be personally responsible for their actions and commitments to the community.",
            content4:
                "We know that we are living in a complex, stressful and diverse world and go out of our way to make people's lives and days better through our interactions.",
            rightHeading: "Mission",
            rightContent:
                "Developer DAO exists to accelerate the education and impact of a new wave of web3 builders",
            rightTitle: "Goals",
            rightContent1: "1. Onboard, Educate & Support Web3 Developers",
            rightContent2: "2. Foster & Build Web3 Tools & Public Goods",
            wiki: "",
        },
    };
    return <userContext.Provider value={data}>{children}</userContext.Provider>;
};
