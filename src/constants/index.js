import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
	} from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
	export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];

	export const colorList = [
		{ id: "titanium", name: "Titanium", hex: "#74726F" },
    { id: "black", name: "Black Titanium", hex: "#2D2D2D" },
    { id: "white", name: "White Titanium", hex: "#F5F5F0" },
    { id: "blue", name: "Blue Titanium", hex: "#394E5C" },
	]

	export const storageOptions = [
    { size: "128", price: 999 },
    { size: "256", price: 1099 },
    { size: "512", price: 1299 },
    { size: "1TB", price: 1499 },
  ]

	export const paymentPlans = [
    { id: "monthly", name: "Monthly payments", description: "From $45.79/mo. for 24 mo." },
    { id: "full", name: "Pay in full", description: "From $999" },
    { id: "carrier", name: "Pay with carrier", description: "From $41.62/mo. for 24 mo." },
  ]


  export const baseImages = [
    `assets/images/titanium.png`,
    `assets/images/titanium-black.png`,
    `assets/images/titanium-white.png`,
    `assets/images/titanium-blue.png`,
  ]