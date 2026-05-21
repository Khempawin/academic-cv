import { IPublicationEntry } from "@/interfaces/publications";

export const publicationEntries: IPublicationEntry[] = [
  {
    id: "P2",
    title: "REM-CTX: Automated Peer Review via Reinforcement Learning with Auxiliary Context",
    authors: "Pawin Taechoyotin, Daniel E. Acuna",
    year: 2026,
    venue: "Preprint",
    type: "P",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2604.00248" },
      { label: "GitHub", href: "https://github.com/sciosci/rem-ctx", stars: 0, repo: "sciosci/rem-ctx" }
    ],
    tags: ["Automated Peer Review", "Reinforcement Learning"], // Optional
    logo: "", // Optional
  },
  {
    id: "P1",
    title: "REMOR: Automated peer review generation with llm reasoning and multi-objective reinforcement learning",
    authors: "Pawin Taechoyotin, Daniel E. Acuna",
    year: 2025,
    venue: "Preprint",
    type: "P",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2505.11718" },
      { label: "GitHub", href: "https://github.com/sciosci/remor", stars: 0, repo: "sciosci/remor" }
    ],
    tags: ["Automated Peer Review", "Reinforcement Learning"], // Optional
    logo: "", // Optional
  },
  {
    id: "W2",
    title: "MAMORX: Multi-agent multi-modal scientific review generation with external knowledge",
    authors: "Pawin Taechoyotin, Guanshao Wang, Tong Zeng, Bradley Sides, Daniel E. Acuna",
    year: 2024,
    venue: "Neurips 2024 Workshop Foundation Models for Science: Progress, Opportunities, and Challenges",
    type: "W",
    links: [
      { label: "OpenReview", href: "https://openreview.net/forum?id=frvkE8rCfX" },
      { label: "NeurIPS", href: "https://neurips.cc/virtual/2024/105900" },
      { label: "GitHub", href: "https://github.com/sciosci/mamorx-review-system", stars: 11, repo: "sciosci/mamorx-review-system" },
    ], 
    tags: ["Multi-agent", "Multi-modal", "Scientific Review"], // Optional
    logo: "", // Optional
  },
  {
    id: "W1",
    title: "MISTI: Metadata-Informed Scientific Text and Image Representation through Contrastive Learning",
    authors: "Pawin Taechoyotin, Daniel E. Acuna",
    year: 2024,
    venue: "Proceedings of the Fourth Workshop on Scholarly Document Processing (SDP 2024)",
    type: "W",
    links: [
      { label: "ACL Anthology", href: "https://aclanthology.org/2024.sdp-1.15/" },
      { label: "GitHub", href: "https://github.com/sciosci/misti", stars: 0, repo: "sciosci/misti" },
    ],
    tags: ["Metadata-Informed", "Scientific Text", "Image Representation"], // Optional
    logo: "", // Optional
  },
  {
    id: "C1",
    title: "Health link: scalable health information exchange platform in Thailand",
    authors: "Pawin Taechoyotin, Patipan Prasertsom, Mullika Phanhong, Patchara Wongsutthikoson, Ravi Laohasurayodhin, Napassawan Pasuthip, Ben Ruktantichoke",
    year: 2021,
    venue: "2021 2nd International Conference on Big Data Analytics and Practices (IBDAP)",
    type: "C",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/9552033" },
    ],
    tags: [], // Optional
    logo: "", // Optional
  }
];