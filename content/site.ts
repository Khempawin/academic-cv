import { ISiteConfig } from "@/interfaces/site";

export const siteConfig: ISiteConfig = {
    name: "Pawin Taechoyotin",
    siteName: "Pawin Taechoyotin",
    tagline: "PhD Student · Automated Peer Review Generation · AI for Science",
    bio: "My research focus is on Science of Science. The main topic of my current research is automated scientific peer review, where LLMs are trained to analyze manuscripts and generate peer reviews. I'm also interested in Multi-Modal Representation Learning of Scientific concepts and information, which is believed to be the foundation of information comprehension for Artificial Intelligence models. Recently, I have had an interest on research integrity, where I develops techniques to identify research integrity issues in publications such as duplicated values in tables across publications.",
    siteUrl: "https://pawin.io",
    avatar: "/img/profile.png",
    lastUpdated: "2026-05-14",
    sourceUrl: "https://github.com/lizhihao2022/personal_page",
    location: "[Boulder, Colorado, USA]",
    infoHubUrl: "https://www.colorado.edu/cs/",
    links: {
        email: "mailto:pawin.taechoyotin@colorado.edu",
        cv: "/Pawin_Taechoyotin_CV.pdf",
        github: "https://github.com/khempawin",
        scholar: "https://scholar.google.com/citations?user=1Yv3nJkAAAAJ&hl=en",
        // dblp: "https://dblp.org/pid/407/8482.html",
        // linkedin: "https://www.linkedin.com/in/pawin-taechoyotin/",
    },
    featuredProjects: [
        // {
        //     title: "",
        //     description: "",
        //     tags: [""],
        //     links: {
        //         demo: "",
        //         code: "",
        //     },
        //     cover: "",
        // },
    ],
    selectedPublications: [
        // {
        //     title: "",
        //     authors: "",
        //     venue: "",
        //     year: 2020,
        //     links: {
        //         doi: "",
        //         arxiv: "",
        //         code: ""
        //     },
        //     cover: "",
        //     tags: [""],
        // },
    ],
    resume: {
        education: [
            {
                school: "University of Colorado Boulder, Colorado, USA",
                degree: "Ph.D. student, Computer Science",
                period: "Aug 2024 – Present",
                // details: "Ph.D. candidate in Data Science and Analytics.",
                highlights: [
                    { label: "Supervisor: Prof. Daniel Acuna", url: "https://acuna.io/" },
                ],
                // logo: "",
            },
            {
                school: "University of Colorado Boulder, Colorado, USA",
                degree: "Master's degree, Computer Science",
                period: "Aug 2022 – Jun 2024",
                // details: "",
                // highlights: [{ label: "", url: "" }],
                // logo: "",
            },
            {
                school: "King Mongkut's University of Technology Thonburi, Bangkok, Thailand",
                degree: "Bachelor's degree, Computer Engineering",
                period: "Aug 2014 – Jun 2018",
                // details: "",
                // highlights: [{ label: "", url: "" }],
                // logo: "",
            },
        ],
        experience: [
            {
                role: "Data Scientist/Data Engineer",
                organization: "Government Big Data institute, Thailand",
                period: "Aug 2018 – Jul 2022",
                details: "Design and analyze organization datasets to produce insights for policy making of Government Agencies, Instructor on Data Analytics and Data Preprocessing",
                // highlights: [
                //     { label: "", url: "" },
                // ],
                // logo: "",
            },
            {
                role: "Part Time Software Developer",
                organization: "Yannix Co., Ltd., Bangkok, Thailand",
                period: "Jan 2018 – Mar 2018",
                details: "Developed a system monitoring web application for resource management for system administrators with VueJS, Python, Flask.",
                // highlights: [
                //     { label: "", url: "" },
                // ],
                // logo: "",
            },
        ],
        academicService: [
            "Reviewer (2026): AAAI, Springer Nature: Humanities and Social Sciences Communications Journal, and IC2S2",
            "Reviewer (2025): NeurIPS, AACL-IJCNLP 2025 Workshop WASP, 10th International Congress on Peer Review and Scientific Publication, PeerJ Computer Science Journal",
            "Reviewer (2024): SDP 2024, FM4Science 2024",
        ],
        teaching: [
            {
                role: "Graduate Part Time Instructor",
                institution: "University of Colorado Boulder",
                courses: [
                    "CSCI 1300: Starting Computing (2024 Fall)",
                ],
            },
            {
                role: "Graduate Teaching Assistant",
                institution: "University of Colorado Boulder",
                courses: [
                    "CSCI 1300: Starting Computing (2024 Spring)",
                    "CSCI 1300: Starting Computing (2023 Fall)",
                ],
            },
            {
                role: "Course Manager",
                institution: "University of Colorado Boulder",
                courses: [
                    "CSCI 1300: Starting Computing (2022 Fall)",
                    "CSCI 1300: Starting Computing (2023 Spring)",
                ],
            },
        ],
    },
}