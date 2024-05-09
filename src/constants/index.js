import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,

  benefitImage2,

  file02,

  homeSmile,

  notification2,
  notification3,
  notification4,

  plusSquare,

  searchMd,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "3",
    title: "Team",
    url: "/team",
  },
  {
    id: "4",
    title: "Career",
    url: "/career",

  },
  {
    id: "5",
    title: "Sechdule Meeting",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const benefits = [
  {
    id: "0",
    title: "Speed of Delivery",
    text: "Our agile strategy guarantees swift results, speeding time to market for maximum ROI and genuine business transformation collaboration.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Quality of Service",
    text: "Continuously testing means we find and fix bugs quickly, guaranteeing high quality delivery every time we connect with us.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Value for Money",
    text: "Our quick route to market, strong customer engagement, and high growth standards ensure optimal ROI for every customer at fair prices.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },



];


