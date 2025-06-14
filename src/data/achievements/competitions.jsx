import categoryIconMap from "./categoryIcons";

// This function returns the appropriate icon component based on the achievement's category
const getCategoryIcon = (category) => {
  return categoryIconMap[category] || categoryIconMap["Informatics"]; // Default to Informatics if category not found
};

const comps = [
  {
    year: "2022",
    title: "Astronomy Sci-fi Writing",
    description:
      "Participated in a national Astronomy writing competition where I wrote an originial science fiction story based on the theme of Astronomy. The story was well-received and I was awarded a certificate of participation.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Astronomy",
  },
  {
    year: "2023",
    title: "Satellite Design",
    description:
      "I participated in a national Satellite Design competition where I designed a satellite. During this competition, I had to conduct research on how to best design the satellite and soon after submitted it. I recieved a certificate of participation for this competition.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Astronomy",
  },
  {
    year: "2023",
    title: "Astrigue",
    description:
      "Participated in a national Astronomy Quiz competition where I competed against other students from across the country. The competition was intense and I was able to showcase my knowledge of Astronomy. I received a certificate of participation for this competition.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Astronomy",
  },
  {
    year: "2024",
    title: "Astrigue",
    description:
      "Participated in a national Astronomy Quiz competition where I competed against other students from across the country. The competition was intense and I was able to showcase my knowledge of Astronomy. I received a certificate of participation for this competition.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Astronomy",
  },
  {
    year: "2024",
    title: "PCTC Round 1",
    description:
      "Participated in the first round of Perse Team coding compeition where I solved multiple coding problems. This was my first competitive programming compeition and I managed to get higher participation rank.  ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "4",
    category: "Informatics",
  },
  {
    year: "2024",
    title: "YBN CTF",
    description:
      "Participated in the YBN Capture the Flag compeition where I solved multiple challenges related to cybersecurity. This was my second CTF and I improved on my skills significatly from the first one and performed better. I received a certificate of participation for this compeition.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Cybersecurity",
  },
  {
    year: "2024",
    title: "ARTC Camp",
    description:
      "I participated in the ARTC camp which was organised in collaboration with the Advanced Remanufacturing and Technology Centre. In this competition, I learnt about 3D printing and arduino. The problem statement I tackled was to create a more accessible bus design.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Engineering",
  },
  {
    year: "2024",
    title: "Blahaj CTF",
    description:
      "This was my first Capture the Flag (CTF) competition where I solved multiple challenges related to cybersecurity. I managed to get a good rank in this competition and received a certificate of participation for this compeition.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Cybersecurity",
  },
  {
    year: "2024",
    title: "What the hack",
    description:
      "This was a hackathon organised by SUTD where I worked with a team and created a machine learning powered chrome extension that aimed to solve the problem of inequality as it would detect which messages were offensive and which were not. Through this experience, I learnt about chrome extensions.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Informatics",
  },
  {
    year: "2025",
    title: "Big D camp",
    description:
      "This was organised SUTD in collaboration with SST. In this camp, I had to create a disaster management robot that would be able to pick up objects and move to the homebase. In the end my team's robot was able to be controlled using bluetooth and a joystick. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Engineering",
  },
  {
    year: "2025",
    title: "NOI",
    description:
      "I participated in the National Olympiad in Informatics preliminary round where I was able to solve a few coding problems. In the end, I was able to get participation and learnt a lot about algorithms and computational thinking. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Informatics",
  },
  {
    year: "2025",
    title: "NCO",
    description:
      "I participated in the prelimary round of the National cybersecurity olympiad and was able to solve a few challenges related to cybersecurity. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Cybersecurity",
  },
  {
    year: "2025",
    title: "PCTC Round 1",
    description:
      "I participated in the first round of the Perse Coding Team Challenge again, where this time I was able to solve a lot more problems than the previous year. I had refined my programming skills and due to this was able to acheive a distinction.",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "1",
    category: "Informatics",
  },
  {
    year: "2025",
    title: "PCTC Round 2",
    description:
      "Since I had done well in the first round, I was able to qualify for the second round. In this round I was able to solve a few problems and was able to get a merit.  ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "2",
    category: "Informatics",
  },
  {
    year: "2025",
    title: "NSC",
    description:
      "I participated in the National Software competition which was organised by Singapore Polytechnic. This was a hackathon where I had to use swift to create an app related to the theme of SG60. This was my first experience with swift. After much hardwork with my team we managed to get first place. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "1",
    category: "Informatics",
  },
  {
    year: "2025",
    title: "SASMO",
    description:
      "This was my first time participating in the Singapore and Asian Schools Math Olympiad. This was also my first math competition. After a lot of critical thinking, I managed to acheive a bronze award in this competition. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "3",
    category: "Mathematics",
  },
  {
    year: "2025",
    title: "Grey CTF",
    description:
      "At the time of doing this CTF, this was the most challenging CTF I had done so far. I had to try my hardest and think out of the box to solve some of the challenges provided. Overall this deepened my understanding of cybersecurity. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Cybersecurity",
  },
  {
    year: "2025",
    title: "BBCS Conference",
    description:
      "I participated in the Building Blocs June 2025 AI conference. Through this conference I attended many workshops on machine learning partcipated in a hackathon where I created a model for sign language to text translation and a yolo detection model for detecting nearby images with my team. ",
    get Icon() {
      return getCategoryIcon(this.category);
    },
    achievement: "5",
    category: "Informatics",
  },
];

export default comps;
