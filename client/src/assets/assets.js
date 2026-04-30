import logo from "./bird-svgrepo-com.svg";
import logo_full from "./ChatGPT Image Apr 10, 2026, 10_18_26 PM.png";
import send_icon from "./icons8-arrow-up-32.png";
import gallery_icon from "./icons8-gallery-48.png";
import diamond_icon from "./icons8-diamond-50.png";
import logout_icon from "./icons8-logout-rounded-30.png";
import bin_icon from "./icons8-waste-24.png";
import close_icon from "./icons8-multiply-50.png";
import menu_icon from "./icons8-menu-50.png";
import stop_icon from "./icons8-stop-circled-50.png";
import theme_icon from "./icons8-bright-50.png";
import user_icon from "./icons8-user-icon-50.png";
import search_icon from "./icons8-search-32.png";

export const assets = {
  logo,
  logo_full,
  search_icon,
  user_icon,
  theme_icon,
  send_icon,
  stop_icon,
  menu_icon,
  close_icon,
  bin_icon,
  logout_icon,
  diamond_icon,
  gallery_icon,
};

export const dummyUserData = {
  _id: "1",
  name: "Alice Sharma",
  email: "alice.sharma@example.com",
  password: "$2b$10$abc123hashedpasswordexample",
  credits: 150,
};

export const dummyPlans = [
  {
    _id: "basic",
    name: "Basic",
    price: 10,
    credits: 100,
    features: [
      "100 text generations",
      "50 image generations",
      "Standard support",
      "Access to basic models",
    ],
  },
  {
    _id: "pro",
    name: "Pro",
    price: 20,
    credits: 500,
    features: [
      "500 text generations",
      "200 image generations",
      "Priority support",
      "Access to pro models",
      "Faster response time",
    ],
  },
  {
    _id: "primium",
    name: "Premium ",
    price: 30,
    credits: 1000,
    features: [
      "1000 text generations",
      "500 image generations",
      "24/7 VIP support",
      "Access to premium models",
      "Dedicated account manager",
    ],
  },
];

export const dummyChats = [
  {
    _id: "1",
    userId: "user_1",
    userName: "John Doe",
    name: "Chat with John",
    messages: [
      {
        isImage: false,
        isPublished: true,
        role: "user",
        content: "Hey, how are you?",
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "assistant",
        content: "I'm good! How can I help you?",
        timestamp: new Date().toISOString(),
      },
      {
        isImage: true,
        isPublished: false,
        role: "user",
        content: "well done good work ",
        timestamp: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    userId: "user_2",
    userName: "Alice Smith",
    name: "Project Discussion",
    messages: [
      {
        isImage: true,
        isPublished: true,
        role: "ai",
        content: logo_full,
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "user",
        content: "Hey,Roham where are you?.",
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "assistant",
        content: "Yes, sir i am in the office.",
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "user",
        content: "show me your project code.",
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "assistant",
        content: `function greet(name) {
  const message = "Hello, " + name + "!";
  return message;
}

const user = "Rahul";
const result = greet(user);

console.log(result);

for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}`,
        timestamp: new Date().toISOString(),
      },
      {
        isImage: false,
        isPublished: true,
        role: "assistant",
        content: "Yes, it's ready for review.",
        timestamp: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];


export const dummyPublishedImages = [
            {
               imageUrl:logo,
                userName :"Radha Pandey",
            },
            {
               imageUrl:logo_full,
                userName :"Kishan Ji",
            },
            {
               imageUrl:close_icon,
                userName :"Nikhil Pandey",
            },
            {
               imageUrl:stop_icon,
                userName :"Anjali Mishra",
            },
            {
               imageUrl:theme_icon,
                userName :"Shri Harivansh Mahaprabhu",
            },
            {
               imageUrl:search_icon,
                userName :"Shri Premanand ji Maharaj",
            },
            {
               imageUrl:user_icon,
                userName :"Shri Chatnya Mahaprabhu",
            },
            {
               imageUrl:logout_icon,
                userName :"Kishori Ju",
            }
];